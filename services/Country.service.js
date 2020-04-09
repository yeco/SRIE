import massive from "../db";
var httpContext = require("express-http-context");

const db = httpContext.get("db");

export default {
  getByCode: async (code) => {
    return await db.countries.findOne({ code: code.toUpperCase() });
  },
  getCountries: async () => {
    return await db.countries.find({});
  },
};
