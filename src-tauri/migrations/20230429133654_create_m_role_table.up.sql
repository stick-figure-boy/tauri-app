CREATE TABLE IF NOT EXISTS m_roles (
    id INTEGER UNSIGNED,
    role VARCHAR(32) NOT NULL,
    created_at TIMESTAMP DEFAULT (DATETIME('now', 'localtime')),
    updated_at TIMESTAMP DEFAULT (DATETIME('now', 'localtime')),
    PRIMARY KEY(id),
    UNIQUE(role)
);

INSERT OR IGNORE INTO
    m_roles (id, role)
VALUES
    (1, 'admin');

INSERT OR IGNORE INTO
    m_roles (id, role)
VALUES
    (2, 'general');
