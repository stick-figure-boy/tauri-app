use serde::{Deserialize, Serialize};
use sqlx::FromRow;

#[derive(Debug, Serialize, Deserialize, FromRow)]
pub struct Skill {
    pub id: i64,
    pub skill: String,
    pub display_order: i64,
    pub created_at: String,
    pub updated_at: String,
}
