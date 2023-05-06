CREATE TABLE IF NOT EXISTS teams (
    id INTEGER UNSIGNED,
    organization_id INTEGER UNSIGNED NOT NULL,
    name VARCHAR(60) NOT NULL,
    created_at TIMESTAMP DEFAULT (DATETIME('now', 'localtime')),
    updated_at TIMESTAMP DEFAULT (DATETIME('now', 'localtime')),
    deleted_at TIMESTAMP NULL,
    PRIMARY KEY(id),
    CONSTRAINT fk_organization_id FOREIGN KEY (organization_id) REFERENCES organizations(id) ON DELETE CASCADE ON UPDATE CASCADE,
    UNIQUE(organization_id, name)
);

CREATE INDEX idx_teams_name ON teams (organization_id, name);
