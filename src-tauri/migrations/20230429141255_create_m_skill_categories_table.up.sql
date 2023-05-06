CREATE TABLE IF NOT EXISTS m_skill_categories (
    id INTEGER UNSIGNED,
    category VARCHAR(64) NOT NULL,
    display_order INTEGER UNSIGNED NOT NULL,
    created_at TIMESTAMP DEFAULT (DATETIME('now', 'localtime')),
    updated_at TIMESTAMP DEFAULT (DATETIME('now', 'localtime')),
    PRIMARY KEY(id),
    UNIQUE(category)
);

INSERT OR IGNORE INTO
    m_skill_categories (id, category, display_order)
VALUES
    (1, 'Backend', 1);

INSERT OR IGNORE INTO
    m_skill_categories (id, category, display_order)
VALUES
    (2, 'Frontend', 2);

INSERT OR IGNORE INTO
    m_skill_categories (id, category, display_order)
VALUES
    (3, 'Mobile', 3);

INSERT OR IGNORE INTO
    m_skill_categories (id, category, display_order)
VALUES
    (4, 'Architecture', 4);

INSERT OR IGNORE INTO
    m_skill_categories (id, category, display_order)
VALUES
    (5, 'Management', 5);

INSERT OR IGNORE INTO
    m_skill_categories (id, category, display_order)
VALUES
    (99, 'Other', 6);
