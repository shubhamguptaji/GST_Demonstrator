const router = require("express").Router();
const Products = require("../../models/Products");
const fetch = require("node-fetch");
const mongoose = require("mongoose");

router.get("/", (req, res, next) => {
  Products.find()
    .exec()
    .then(doc => {
      res.status(200).json(doc);
    })
    .catch(err => {
      console.log(err);
      res.status(400).send({
        error: err
      });
    });
});

router.post("/", (req, res, next) => {
  fetch(`http://api.mathjs.org/v4/`, {
    method: "POST",
    body: JSON.stringify({
      expr: [
        `a = ${req.body.gst} * ${req.body.price}`,
        "b =  a % 100",
        `a = a/100`,
        `finalPrice = ${req.body.price} + a + 0.b`
      ]
    })
  })
    .then(r => r.json())
    .then(result => {
      if (result.error === null) {
        const newProduct = new Products({
          _id: new mongoose.Types.ObjectId(),
          name: req.body.name,
          GST_slab: req.body.gst,
          price: req.body.price,
          timestamp: Date.now(),
          finalPrice: result.result[3]
        });
        newProduct
          .save()
          .then(r => res.status(200).send(r))
          .catch(err => {
            res.status(400).send(err);
          });
      } else {
        res.status(400).send(result.error);
      }
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

router.get("/gst", (req, res, next) => {
  Products.find({}, { GST_slab: 1 })
    .then(r => res.status(200).send(r))
    .catch(err => res.status(400).send(err));
});

module.exports = router;
