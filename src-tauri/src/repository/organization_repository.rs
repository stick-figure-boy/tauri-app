use crate::{error::DomainError, model::organization_model::Organization};
use async_trait::async_trait;
use sqlx::{SqliteConnection, SqlitePool};

use mockall::automock;

#[automock]
#[async_trait]
pub trait OrganizationRepository: Send + Sync + 'static {
    async fn find_by_id(&self, id: i64) -> Result<Option<Organization>, DomainError>;
}

#[derive(Debug, Clone)]
pub struct SqliteOrganizationRepository {
    pool: SqlitePool,
}

impl SqliteOrganizationRepository {
    pub fn new(pool: SqlitePool) -> Self {
        Self { pool }
    }
}

#[async_trait]
impl OrganizationRepository for SqliteOrganizationRepository {
    async fn find_by_id(&self, id: i64) -> Result<Option<Organization>, DomainError> {
        let mut conn = self.pool.acquire().await?;
        let organization = OrganizationRepositoryImpl::find_by_id(&mut conn, id).await?;
        Ok(organization)
    }
}

pub(crate) struct OrganizationRepositoryImpl {}

impl OrganizationRepositoryImpl {
    async fn find_by_id(
        conn: &mut SqliteConnection,
        id: i64,
    ) -> Result<Option<Organization>, DomainError> {
        const SQL: &str = "SELECT * FROM organizations WHERE id = ? AND deleted_at IS NULL;";
        let row: Option<Organization> = sqlx::query_as(SQL)
            .bind(id.to_string())
            .fetch_optional(conn)
            .await?;
        row.map(|row| -> Result<Organization, DomainError> {
            let id: i64 = row.id.into();
            let name: String = row.name.into();
            let created_at: String = row.created_at.into();
            let updated_at: String = row.updated_at.into();
            let deleted_at: Option<String> = row.deleted_at.into();
            Organization::new(id, name, created_at, updated_at, deleted_at)
        })
        .transpose()
    }
}

// #[cfg(test)]
// mod tests {
//     use crate::get_sqlite_pool;

//     use super::*;

//     #[tokio::test]
//     async fn test_find_by_id() -> anyhow::Result<()> {
//         let pool = get_sqlite_pool().await;
//         let mut conn = pool.acquire().await?;

//         let organization = OrganizationRepositoryImpl::find_by_id(&mut conn, 1)
//             .await
//             .unwrap();
//         assert_eq!("Test Organaization1", organization.name);
//         Ok(())
//     }
// }
