const router = require('express').Router();


router.get('/add-product', (req, res, next) => {
  res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form >'); // Sends a response
});
router.post('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

router.get('/', (req, res, next) => {
  console.log('Final middleware!');
  res.send('<h1>Hello from Express!</h1>'); // Sends a response
});

router.use((req, res) => {
  res.status(404).send('<h1>Page not found</h1>'); // Sends a response
})


module.exports = router;