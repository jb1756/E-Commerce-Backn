const router = require('express').Router();
const apiRoutes = require('./api');

//API Router
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route! But add /categories, /products, /tags /</h1>")
});

module.exports = router;