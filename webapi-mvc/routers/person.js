const express = require("express");
const { get, save, validate } = require("../repositories/persons");
const router = express.Router();
const logger = console;

router.get("/:name?", async (req, res) => {
  const name = req.params.name || req.query.name;

  if (!name) return res.status(400).json({ error: "name is required" });

  try {
    const result = await get(name);
    res.status(200).json(result);
  } catch (error) {
    logger.error(error);
    res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
    const person = {...req.body};
    logger.debug('person: %o', person)

    try {
        await validate(person);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }

    const result = await save(person);
    res.status(204).json({ result });
})

module.exports = router;
