module.exports = {
  adminAuth: {
    type: "credentials",
    users: [{
      username: process.env.NODE_RED_USERNAME || "admin",
      password: process.env.NODE_RED_PASSWORD || "$2b$08$SUA_SENHA_FORTE_AQUI"
    }]
  },
  ui: { path: "ui" },
  logging: { console: { level: "info" } }
};
