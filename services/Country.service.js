import massive from "../db";

export default {
  getByCode: async code => {
    const db = await massive();
    return await db.countries.findOne({ code: code.toUpperCase() });
  },
  getCountries: async () => {
    const db = await massive();
    return await db.countries.find({});
  }
};
