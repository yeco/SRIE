-- pec goals
CREATE TABLE pec_goals (
    id SMALLINT PRIMARY KEY,
    code VARCHAR(5) UNIQUE,
    translation_key VARCHAR(5) NOT NULL,
    goal_order SMALLINT
);

-- topics
CREATE TABLE topics (
    id SMALLINT PRIMARY KEY,
    translation_key VARCHAR(100) NOT NULL
);

-- educational_levels
CREATE TABLE educational_levels (
    id SMALLINT PRIMARY KEY,
    code VARCHAR(2) UNIQUE
);

-- ods4 scales
CREATE TABLE ods4_scales (
    id SMALLINT PRIMARY KEY,
    code VARCHAR(5),
    translation_key VARCHAR(5),
    scale_order SMALLINT
);

-- indicators
CREATE TABLE indicators (
    id SMALLINT PRIMARY KEY,
    translation_key VARCHAR(250),
    indicator_order SMALLINT
);

-- indicators_pec_goals
CREATE TABLE indicators_pec_goals (
    indicator_id SMALLINT REFERENCES indicators,
    pec_goal_id SMALLINT REFERENCES pec_goals
);

-- indicators_topics
CREATE TABLE indicators_topics (
    indicator_id SMALLINT REFERENCES indicators,
    topic_id SMALLINT REFERENCES topics
);

-- indicators_educational_levels
CREATE TABLE indicators_educational_levels (
    indicator_id SMALLINT REFERENCES indicators,
    educational_level_id SMALLINT REFERENCES educational_levels
);

-- indicators_ods4_scales
CREATE TABLE indicators_ods4_scales (
    indicator_id SMALLINT REFERENCES indicators,
    ods4_scale_id SMALLINT REFERENCES ods4_scales
);
