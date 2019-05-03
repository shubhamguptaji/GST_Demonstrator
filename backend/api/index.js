const router = require("express").Router();

router.use("/Products", require("./routes/Products"));

module.exports = router;
