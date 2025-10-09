module.exports = {
  adminAuth: {
    type: "credentials",
    users: [{
      username: process.env.NODE_RED_USERNAME || "admin",
      password: process.env.NODE_RED_PASSWORD || "junior"
    }]
  },
  ui: { path: "ui" },
  logging: { console: { level: "info" } }
};
