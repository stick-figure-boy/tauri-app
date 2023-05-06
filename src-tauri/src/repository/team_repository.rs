// use super::super::database;
// use crate::models::team_model::Team;
// use async_trait::async_trait;
// use futures::TryStreamExt;
// use sqlx::{Row, SqlitePool};
// use std::collections::BTreeMap;

// use mockall::automock;

// #[automock]
// #[async_trait]
// pub trait TeamRepository: Send + Sync + 'static {
//     async fn get_by_organization_id(&self, organization_id: i64) -> database::DbResult<Vec<Team>>;
//     async fn get_by_member_id(&self, member_id: i64) -> database::DbResult<Vec<Team>>;
// }

// #[derive(Debug, Clone)]
// pub struct SqliteTeamRepository {
//     pool: SqlitePool,
// }

// impl SqliteTeamRepository {
//     pub fn new(pool: SqlitePool) -> Self {
//         Self { pool }
//     }
// }

// #[async_trait]
// impl TeamRepository for SqliteTeamRepository {
//     async fn get_by_member_id(&self, member_id: i64) -> database::DbResult<Vec<Team>> {
//         let pool = self.pool.clone();
//         let teams = TeamRepositoryImpl::get_by_member_id(&pool, member_id).await?;
//         Ok(teams)
//     }
// }

// pub(crate) struct TeamRepositoryImpl {}

// impl TeamRepositoryImpl {
//     async fn get_by_member_id(pool: &SqlitePool, member_id: i64) -> database::DbResult<Vec<Team>> {
//         const SQL: &str = "SELECT * FROM teams WHERE member_id = ?  AND deleted_at IS NULL;";
//         let mut results = sqlx::query(SQL).bind(member_id.to_string()).fetch(pool);
//         let mut teams = BTreeMap::new();
//         while let Some(row) = results.try_next().await? {
//             let id: i64 = row.try_get("id")?;
//             let organization_id: i64 = row.try_get("organization_id")?;
//             let name: &str = row.try_get("name")?;
//             let created_at: &str = row.try_get("created_at")?;
//             let updated_at: &str = row.try_get("updated_at")?;
//             let deleted_at: &str = row.try_get("deleted_at")?;
//             teams.insert(
//                 id,
//                 Team::new(
//                     id,
//                     organization_id,
//                     name,
//                     created_at,
//                     updated_at,
//                     deleted_at,
//                 ),
//             );
//         }
//         Ok(teams.into_iter().map(|(_k, v)| v).collect())
//     }
// }
