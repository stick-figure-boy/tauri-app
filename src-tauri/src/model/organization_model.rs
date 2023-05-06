use serde::{Deserialize, Serialize};
use sqlx::FromRow;

use crate::error::DomainError;

#[derive(Debug, Serialize, Deserialize, FromRow)]
pub struct Organization {
    pub id: i64,
    pub name: String,
    pub created_at: String,
    pub updated_at: String,
    pub deleted_at: Option<String>,
}

impl Organization {
    pub fn new(
        id: i64,
        name: String,
        created_at: String,
        updated_at: String,
        deleted_at: Option<String>,
    ) -> Result<Organization, DomainError> {
        Ok(Organization {
            id,
            name,
            created_at,
            updated_at,
            deleted_at,
        })
    }
}
