use thiserror::Error;

#[derive(Debug, Error)]
pub enum DomainError {
    #[error(transparent)]
    RepositoryError(anyhow::Error),
}
