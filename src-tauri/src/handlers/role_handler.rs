use crate::{
    model::role_model,
    repository::role_repository::{RoleRepository, SqliteRoleRepository},
    response::role_response::RoleResponse,
};
use tauri::State;

#[tauri::command]
pub async fn get_roles(
    sqlite_pool: State<'_, sqlx::SqlitePool>,
) -> Result<Vec<RoleResponse>, String> {
    let pool = &*sqlite_pool;
    let p = pool.clone();
    let repo = SqliteRoleRepository::new(p);
    let roles: Vec<role_model::Role> = repo.get_all().await.map_err(|e| e.to_string())?;

    let mut res: Vec<RoleResponse> = Vec::new();
    for role in roles {
        let r = RoleResponse {
            id: role.id,
            role: role.role,
        };
        res.push(r);
    }
    Ok(res)
}
