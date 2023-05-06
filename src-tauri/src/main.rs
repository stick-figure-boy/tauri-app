#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use sqlx::{Pool, Sqlite};
use tauri::Manager;
mod handlers;
mod model;
mod repository;
mod request;
mod response;
mod utils;

pub(crate) mod database;
pub(crate) mod error;

pub async fn get_sqlite_pool() -> Pool<Sqlite> {
    const DATABASE_DIR: &str = "./sqlite";
    const DATABASE_FILE: &str = "db.sqlite";
    let db_dir = std::env::current_dir().unwrap();
    let database_dir = db_dir.join(DATABASE_DIR);
    let database_file = database_dir.join(DATABASE_FILE);
    let db_exists = std::fs::metadata(&database_file).is_ok();
    if !db_exists {
        std::fs::create_dir(&database_dir).unwrap();
    }

    let database_dir_str = std::fs::canonicalize(&database_dir)
        .unwrap()
        .to_string_lossy()
        .replace('\\', "/");
    let database_url = format!("sqlite://{}/{}", database_dir_str, DATABASE_FILE);
    let pool = database::create_sqlite_pool(&database_url).await;
    return pool.unwrap();
}

fn main() -> Result<(), Box<dyn std::error::Error>> {
    use tauri::async_runtime::block_on;

    let sqlite_pool = block_on(get_sqlite_pool());

    block_on(database::migrate_database(&sqlite_pool))?;

    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            handlers::auth_handler::sign_in,
            handlers::member_handler::get_members,
            handlers::role_handler::get_roles
        ])
        .setup(|app| {
            app.manage(sqlite_pool);
            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");

    Ok(())
}
