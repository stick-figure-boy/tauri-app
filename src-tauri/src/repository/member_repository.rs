use crate::{error::DomainError, model::member_model::Member};
use async_trait::async_trait;
use futures::{StreamExt, TryStreamExt};
use sqlx::{SqliteConnection, SqlitePool};

use mockall::automock;

#[automock]
#[async_trait]
pub trait MemberRepository: Send + Sync + 'static {
    async fn find_by_email(&self, email: String) -> Result<Option<Member>, DomainError>;
    async fn get_by_organization_id(
        &self,
        organization_id: i64,
    ) -> Result<Vec<Member>, DomainError>;
}

#[derive(Debug, Clone)]
pub struct SqliteMemberRepository {
    pool: SqlitePool,
}

impl SqliteMemberRepository {
    pub fn new(pool: SqlitePool) -> Self {
        Self { pool }
    }
}

#[async_trait]
impl MemberRepository for SqliteMemberRepository {
    async fn find_by_email(&self, email: String) -> Result<Option<Member>, DomainError> {
        let mut conn = self.pool.acquire().await?;
        InternalMemberRepository::find_by_email(&mut conn, email).await
    }

    async fn get_by_organization_id(
        &self,
        organization_id: i64,
    ) -> Result<Vec<Member>, DomainError> {
        let mut conn = self.pool.acquire().await?;
        let members =
            InternalMemberRepository::get_by_organization_id(&mut conn, organization_id).await?;
        Ok(members)
    }
}

pub(crate) struct InternalMemberRepository {}

impl InternalMemberRepository {
    async fn find_by_email(
        conn: &mut SqliteConnection,
        email: String,
    ) -> Result<Option<Member>, DomainError> {
        const SQL: &str = "SELECT id, organization_id, role_id, account_id, name, email, avatar_url, created_at, updated_at, deleted_at FROM members WHERE email = $1 AND deleted_at IS NULL;";
        let row: Option<Member> = sqlx::query_as(SQL)
            .bind(email.as_str())
            .fetch_optional(conn)
            .await?;

        row.map(|row| -> Result<Member, DomainError> {
            let id: i64 = row.id.into();
            let organization_id: i64 = row.organization_id.into();
            let role_id: i64 = row.role_id.into();
            let account_id: String = row.account_id.into();
            let name: String = row.name.into();
            let email: String = row.email.into();
            let avatar_url: String = row.avatar_url.into();
            let created_at: String = row.created_at.into();
            let updated_at: String = row.updated_at.into();
            let deleted_at: Option<String> = row.deleted_at.into();
            Member::new(
                id,
                organization_id,
                role_id,
                account_id,
                name,
                email,
                avatar_url,
                created_at,
                updated_at,
                deleted_at,
            )
        })
        .transpose()
    }

    async fn get_by_organization_id(
        conn: &mut SqliteConnection,
        organization_id: i64,
    ) -> Result<Vec<Member>, DomainError> {
        const SQL: &str = "SELECT id, organization_id, role_id, account_id, name, email, avatar_url, created_at, updated_at, deleted_at FROM members WHERE organization_id = $1 AND deleted_at IS NULL ORDER BY created_at DESC;";
        let rows: Result<Vec<Member>, DomainError> = sqlx::query_as(SQL)
            .bind(organization_id.to_string())
            .fetch(conn)
            .map(
                |row: Result<Member, sqlx::Error>| -> Result<Member, DomainError> {
                    let row = row?;
                    let id: i64 = row.id.into();
                    let organization_id: i64 = row.organization_id.into();
                    let role_id: i64 = row.role_id.into();
                    let account_id: String = row.account_id.into();
                    let name: String = row.name.into();
                    let email: String = row.email.into();
                    let avatar_url: String = row.avatar_url.into();
                    let created_at: String = row.created_at.into();
                    let updated_at: String = row.updated_at.into();
                    let deleted_at: Option<String> = row.deleted_at.into();
                    let member = Member::new(
                        id,
                        organization_id,
                        role_id,
                        account_id,
                        name,
                        email,
                        avatar_url,
                        created_at,
                        updated_at,
                        deleted_at,
                    )?;
                    Ok(member)
                },
            )
            .try_collect()
            .await;
        rows
    }
}

// #[cfg(test)]
// mod tests {
//     use crate::get_sqlite_pool;

//     use super::*;

//     #[tokio::test]
//     async fn test_find_by_email() -> anyhow::Result<()> {
//         let pool = get_sqlite_pool().await;
//         let mut conn = pool.acquire().await?;

//         let member = InternalMemberRepository::find_by_email(
//             &mut conn,
//             "test_user1@example.com".to_string(),
//         )
//         .await
//         .unwrap();
//         assert_eq!(1, member.id);
//         Ok(())
//     }
// }
