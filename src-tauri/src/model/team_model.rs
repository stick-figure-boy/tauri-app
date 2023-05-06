use serde::{Deserialize, Serialize};
use sqlx::FromRow;

#[derive(Debug, Serialize, Deserialize, FromRow)]
pub struct Team {
    pub id: i64,
    pub organization_id: i64,
    pub name: String,
    pub created_at: String,
    pub updated_at: String,
    pub deleted_at: Option<String>,
}
