CREATE TABLE IF NOT EXISTS members (
    id INTEGER UNSIGNED,
    organization_id INTEGER UNSIGNED NOT NULL,
    role_id INTEGER UNSIGNED NOT NULL,
    account_id VARCHAR(32) NOT NULL,
    name VARCHAR(60) NOT NULL,
    email VARCHAR(254) NOT NULL,
    password TEXT NOT NULL,
    avatar_url TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT (DATETIME('now', 'localtime')),
    updated_at TIMESTAMP DEFAULT (DATETIME('now', 'localtime')),
    deleted_at TIMESTAMP NULL,
    PRIMARY KEY(id),
    CONSTRAINT fk_role_id FOREIGN KEY (role_id) REFERENCES m_roles(id) ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT fk_organization_id FOREIGN KEY (organization_id) REFERENCES organizations(id) ON DELETE CASCADE ON UPDATE CASCADE,
    UNIQUE(account_id),
    UNIQUE(email)
);

CREATE INDEX idx_members_name ON members (name);
CREATE INDEX idx_members_account_id ON members (account_id);

-- dummy
INSERT OR IGNORE INTO
    members (id, organization_id, role_id, account_id, name, email, password, avatar_url)
VALUES
    (1, 1, 1, 'test_account1', 'Test User1', 'test_user1@example.com', 'password', 'https://i.pravatar.cc/300');
