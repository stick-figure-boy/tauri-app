use super::error::{CommandError, ErrCode};
use crate::{
    repository::member_repository::{MemberRepository, SqliteMemberRepository},
    request::auth_request::SignInRequest,
    response::member_response::MemberResponse,
};
use tauri::State;

// TODO
#[tauri::command]
pub async fn sign_in(
    sqlite_pool: State<'_, sqlx::SqlitePool>,
    request: SignInRequest,
) -> Result<MemberResponse, CommandError> {
    let validation_err = request.get_validation_messages();
    if validation_err.is_some() {
        return Err(CommandError {
            error_code: ErrCode::DBNoData.as_str().to_string(),
            messages: validation_err.unwrap(),
        });
    }

    let pool = &*sqlite_pool;
    let p = pool.clone();
    let repo = SqliteMemberRepository::new(p);
    let member = repo
        .find_by_email(request.email)
        .await
        .map_err(|e| e.to_string());
    if member.is_err() {
        return Err(CommandError {
            error_code: ErrCode::DBNoData.as_str().to_string(),
            messages: vec![member.unwrap_err()],
        });
    }

    if let Some(m) = member.unwrap() {
        let res = MemberResponse {
            account_id: m.account_id,
            name: m.name,
            avatar_url: m.avatar_url,
            email: m.email,
            is_admin: true,
        };
        Ok(res)
    } else {
        Err(CommandError {
            error_code: ErrCode::DBNoData.as_str().to_string(),
            messages: vec!["Missing email or password".to_string()],
        })
    }
}
