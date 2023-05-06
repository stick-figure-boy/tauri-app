use std::str::FromStr;

use sqlx::{
    sqlite::{SqliteConnectOptions, SqliteJournalMode, SqlitePoolOptions, SqliteSynchronous},
    SqlitePool,
};

pub type DbResult<T> = Result<T, Box<dyn std::error::Error>>;

pub(crate) async fn create_sqlite_pool(database_url: &str) -> DbResult<SqlitePool> {
    let connection_options = SqliteConnectOptions::from_str(database_url)?
        .create_if_missing(true)
        .foreign_keys(true)
        .journal_mode(SqliteJournalMode::Wal)
        .synchronous(SqliteSynchronous::Normal);

    let sqlite_pool = SqlitePoolOptions::new()
        .connect_with(connection_options)
        .await?;

    Ok(sqlite_pool)
}

pub(crate) async fn migrate_database(pool: &SqlitePool) -> DbResult<()> {
    sqlx::migrate!("./migrations").run(pool).await?;
    Ok(())
}
