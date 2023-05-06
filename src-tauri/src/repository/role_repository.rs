use crate::{error::DomainError, model::role_model::Role};
use async_trait::async_trait;
use futures::{StreamExt, TryStreamExt};
use sqlx::{SqliteConnection, SqlitePool};

use mockall::automock;

#[automock]
#[async_trait]
pub trait RoleRepository: Send + Sync + 'static {
    async fn get_all(&self) -> Result<Vec<Role>, DomainError>;
}

#[derive(Debug, Clone)]
pub struct SqliteRoleRepository {
    pool: SqlitePool,
}

impl SqliteRoleRepository {
    pub fn new(pool: SqlitePool) -> Self {
        Self { pool }
    }
}

#[async_trait]
impl RoleRepository for SqliteRoleRepository {
    async fn get_all(&self) -> Result<Vec<Role>, DomainError> {
        let mut conn = self.pool.acquire().await?;
        let roles = InternalRoleRepository::get_all(&mut conn).await?;
        Ok(roles)
    }
}

pub(crate) struct InternalRoleRepository {}

impl InternalRoleRepository {
    async fn get_all(conn: &mut SqliteConnection) -> Result<Vec<Role>, DomainError> {
        const SQL: &str = "SELECT * FROM m_roles ORDER BY id ASC";
        let rows: Result<Vec<Role>, DomainError> = sqlx::query_as(SQL)
            .fetch(conn)
            .map(
                |row: Result<Role, sqlx::Error>| -> Result<Role, DomainError> {
                    let row = row?;
                    let id: i64 = row.id.into();
                    let role: String = row.role.into();
                    let created_at: String = row.created_at.into();
                    let updated_at: String = row.updated_at.into();
                    let member = Role::new(id, role, created_at, updated_at)?;
                    Ok(member)
                },
            )
            .try_collect()
            .await;
        rows
    }
}

#[cfg(test)]
mod tests {
    use crate::get_sqlite_pool;

    use super::*;

    #[tokio::test]
    async fn test_get_all() -> anyhow::Result<()> {
        let pool = get_sqlite_pool().await;
        let mut conn = pool.acquire().await?;

        let roles = InternalRoleRepository::get_all(&mut conn).await.unwrap();
        assert_eq!(2, roles.len());
        assert_eq!(1, roles[0].id);
        assert_eq!("admin", roles[0].role);
        Ok(())
    }
}
