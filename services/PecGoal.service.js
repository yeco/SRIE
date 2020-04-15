const db = require("express-http-context").get("db");

export default {
  getAll: async () => {
    return await db.pec_goals.find({});
  },
};
