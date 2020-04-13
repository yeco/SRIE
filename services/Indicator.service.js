const db = require("express-http-context").get("db");

const getFindWhere = (pec_goal, topic, educational_level) => {
  let where = "";
  let whereClauses = [];
  if (pec_goal) {
    whereClauses.push(`ipg.pec_goal_id = ${pec_goal}`);
  }
  if (topic) {
    whereClauses.push(`it.topic_id = ${topic}`);
  }
  if (educational_level) {
    whereClauses.push(`iel.educational_level_id = ${educational_level}`);
  }
  if (whereClauses.length > 0) {
    where = `WHERE ${whereClauses.join(" AND ")}`;
  }
  return where;
};

export default {
  find: async (pec_goal, topic, educational_level) => {
    const where = getFindWhere(pec_goal, topic, educational_level);
    const sql = `SELECT i.*, 
                     string_agg(DISTINCT pg.code, '/') as pec_goals, 
                     string_agg(DISTINCT t.translation_key, '/') as topics,
                     string_agg(DISTINCT el.code, '/') as educational_levels 
                 FROM indicators i 
                 LEFT JOIN indicators_pec_goals ipg ON i.id = ipg.indicator_id
                 LEFT JOIN indicators_topics it ON i.id = it.indicator_id
                 LEFT JOIN indicators_educational_levels iel ON i.id = iel.indicator_id
                 LEFT JOIN pec_goals pg ON pg.id = ipg.pec_goal_id
                 LEFT JOIN topics t ON t.id = it.topic_id
                 LEFT JOIN educational_levels el ON el.id = iel.educational_level_id
                 ${where}
                 GROUP BY i.id`;

    return await db.query(sql);
  },
};
