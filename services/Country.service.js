const db = require("express-http-context").get("db");

export default {
  getByCode: async (code) => {
    return await db.countries.findOne({ code: code.toUpperCase() });
  },
  getCountries: async () => {
    return await db.countries.find({});
  },
};
