CREATE TABLE IF NOT EXISTS members_skills_relations (
    id INTEGER UNSIGNED,
    member_id INTEGER UNSIGNED NOT NULL,
    skill_id INTEGER UNSIGNED NOT NULL,
    level TNYINT(1) NOT NULL DEFAULT 1,
    created_at TIMESTAMP DEFAULT (DATETIME('now', 'localtime')),
    updated_at TIMESTAMP DEFAULT (DATETIME('now', 'localtime')),
    PRIMARY KEY(id),
    UNIQUE(member_id, skill_id),
    CONSTRAINT fk_member_id FOREIGN KEY (member_id) REFERENCES members(id) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_skill_id FOREIGN KEY (skill_id) REFERENCES m_skills(id) ON DELETE CASCADE ON UPDATE CASCADE
);
