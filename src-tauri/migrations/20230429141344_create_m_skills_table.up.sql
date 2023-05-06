CREATE TABLE IF NOT EXISTS m_skills (
    id INTEGER UNSIGNED,
    skill_category_id INTEGER UNSIGNED NOT NULL,
    skill VARCHAR(64) NOT NULL,
    display_order INTEGER UNSIGNED NOT NULL,
    created_at TIMESTAMP DEFAULT (DATETIME('now', 'localtime')),
    updated_at TIMESTAMP DEFAULT (DATETIME('now', 'localtime')),
    PRIMARY KEY(id),
    UNIQUE(skill),
    CONSTRAINT fk_skill_category_id FOREIGN KEY (skill_category_id) REFERENCES m_skill_categories(id) ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT
    OR IGNORE INTO m_skills (id, skill_category_id, skill, display_order)
VALUES
    (1, 1, 'Golang', 1);

INSERT
    OR IGNORE INTO m_skills (id, skill_category_id, skill, display_order)
VALUES
    (2, 1, 'JAVA', 2);

INSERT
    OR IGNORE INTO m_skills (id, skill_category_id, skill, display_order)
VALUES
    (3, 1, 'Python', 3);

INSERT
    OR IGNORE INTO m_skills (id, skill_category_id, skill, display_order)
VALUES
    (4, 1, 'PHP', 4);

INSERT
    OR IGNORE INTO m_skills (id, skill_category_id, skill, display_order)
VALUES
    (5, 2, 'TypeScript', 1);

INSERT
    OR IGNORE INTO m_skills (id, skill_category_id, skill, display_order)
VALUES
    (6, 2, 'JavaScript', 2);

INSERT
    OR IGNORE INTO m_skills (id, skill_category_id, skill, display_order)
VALUES
    (7, 2, 'Vue.js', 3);

INSERT
    OR IGNORE INTO m_skills (id, skill_category_id, skill, display_order)
VALUES
    (8, 2, 'React', 4);

INSERT
    OR IGNORE INTO m_skills (id, skill_category_id, skill, display_order)
VALUES
    (9, 2, 'HTML', 5);

INSERT
    OR IGNORE INTO m_skills (id, skill_category_id, skill, display_order)
VALUES
    (10, 2, 'CSS', 6);

INSERT
    OR IGNORE INTO m_skills (id, skill_category_id, skill, display_order)
VALUES
    (11, 3, 'Swift', 1);

INSERT
    OR IGNORE INTO m_skills (id, skill_category_id, skill, display_order)
VALUES
    (12, 3, 'Kotlin', 2);

INSERT
    OR IGNORE INTO m_skills (id, skill_category_id, skill, display_order)
VALUES
    (13, 4, 'System Architecture', 1);

INSERT
    OR IGNORE INTO m_skills (id, skill_category_id, skill, display_order)
VALUES
    (14, 4, 'DB Architecture', 2);

INSERT
    OR IGNORE INTO m_skills (id, skill_category_id, skill, display_order)
VALUES
    (15, 4, 'DB Schema Architecture', 3);

INSERT
    OR IGNORE INTO m_skills (id, skill_category_id, skill, display_order)
VALUES
    (16, 5, 'PL', 1);

INSERT
    OR IGNORE INTO m_skills (id, skill_category_id, skill, display_order)
VALUES
    (17, 5, 'PM', 2);

INSERT
    OR IGNORE INTO m_skills (id, skill_category_id, skill, display_order)
VALUES
    (18, 5, 'PO', 3);

INSERT
    OR IGNORE INTO m_skills (id, skill_category_id, skill, display_order)
VALUES
    (19, 5, 'Scrum Master', 4);

INSERT
    OR IGNORE INTO m_skills (id, skill_category_id, skill, display_order)
VALUES
    (20, 99, 'AWS', 1);
