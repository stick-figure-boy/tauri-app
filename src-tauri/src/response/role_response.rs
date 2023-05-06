use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct RoleResponse {
    pub id: i64,
    pub role: String,
}
