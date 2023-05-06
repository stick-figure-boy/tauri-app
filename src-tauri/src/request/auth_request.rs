use serde::Deserialize;
use validator::Validate;

use crate::validate_object;

#[derive(Debug, Deserialize, Validate)]
pub struct SignInRequest {
    #[validate(email(message = "Must be entered in the form of an email address."))]
    pub email: String,
    #[validate(length(min = 8, message = "Password must be at least 8 characters."))]
    pub password: String,
}

validate_object!(SignInRequest);
