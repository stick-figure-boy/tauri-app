use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct MemberResponse {
    pub account_id: String,
    pub name: String,
    pub email: String,
    pub avatar_url: String,
    pub is_admin: bool,
}
