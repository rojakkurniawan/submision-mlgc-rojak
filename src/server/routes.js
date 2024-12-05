const handler = require("../server/handler");

const routes = [
  {
    path: "/predict",
    method: "POST",
    handler: handler.postPredictHandler,
    options: {
      payload: {
        allow: "multipart/form-data",
        multipart: true,
        maxBytes: 1000000,
      },
    },
  },
  {
    path: "/predict/histories",
    method: "GET",
    handler: handler.getHistoryHandler,
  },
];

module.exports = routes;
