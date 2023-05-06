use serde::{Deserialize, Serialize};
use sqlx::FromRow;

use crate::error::DomainError;

#[derive(Debug, Serialize, Deserialize, FromRow)]
pub struct Role {
    pub id: i64,
    pub role: String,
    pub created_at: String,
    pub updated_at: String,
}

impl Role {
    pub fn new(
        id: i64,
        role: String,
        created_at: String,
        updated_at: String,
    ) -> Result<Role, DomainError> {
        Ok(Role {
            id,
            role,
            created_at,
            updated_at,
        })
    }
}
