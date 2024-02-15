const express = require("express");

const router = express.Router();

router.get("/cte", (request, response) => {
  const { cnpj } = request.query;

  response.send(`${cnpj} empresa`);
});

module.exports = router;
