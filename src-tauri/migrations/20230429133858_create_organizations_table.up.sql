CREATE TABLE IF NOT EXISTS organizations (
    id INTEGER UNSIGNED,
    name VARCHAR(120) NOT NULL,
    created_at TIMESTAMP DEFAULT (DATETIME('now', 'localtime')),
    updated_at TIMESTAMP DEFAULT (DATETIME('now', 'localtime')),
    deleted_at TIMESTAMP NULL,
    PRIMARY KEY(id),
    UNIQUE(name)
);

CREATE INDEX idx_organizations_name ON organizations (name);

-- dummy
INSERT OR IGNORE INTO
    organizations (id, name)
VALUES
    (1, 'Test Organaization1');
