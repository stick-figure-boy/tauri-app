use serde::Serialize;
use sqlx::FromRow;

use crate::error::DomainError;

#[derive(Debug, Serialize, FromRow)]
pub struct Member {
    pub id: i64,
    pub organization_id: i64,
    pub role_id: i64,
    pub account_id: String,
    pub name: String,
    pub email: String,
    pub avatar_url: String,
    pub created_at: String,
    pub updated_at: String,
    pub deleted_at: Option<String>,
}

impl Member {
    pub fn new(
        id: i64,
        organization_id: i64,
        role_id: i64,
        account_id: String,
        name: String,
        email: String,
        avatar_url: String,
        created_at: String,
        updated_at: String,
        deleted_at: Option<String>,
    ) -> Result<Member, DomainError> {
        Ok(Member {
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
        })
    }
}
