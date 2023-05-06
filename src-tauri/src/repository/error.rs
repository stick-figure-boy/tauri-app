use crate::error::DomainError;

impl From<sqlx::Error> for DomainError {
    fn from(error: sqlx::Error) -> Self {
        DomainError::RepositoryError(anyhow::Error::new(error))
    }
}
