CREATE TABLE IF NOT EXISTS members_teams_relations (
    id INTEGER UNSIGNED,
    member_id INTEGER UNSIGNED NOT NULL,
    team_id INTEGER UNSIGNED NOT NULL,
    created_at TIMESTAMP DEFAULT (DATETIME('now', 'localtime')),
    updated_at TIMESTAMP DEFAULT (DATETIME('now', 'localtime')),
    PRIMARY KEY(id),
    CONSTRAINT fk_member_id FOREIGN KEY (member_id) REFERENCES members(id) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_team_id FOREIGN KEY (team_id) REFERENCES teams(id) ON DELETE CASCADE ON UPDATE CASCADE,
    UNIQUE(member_id, team_id)
);
