const publisherRoute = require('express').Router();
const PublisherController = require('../controllers/PublisherController');

publisherRoute.get('/', PublisherController.getData)
publisherRoute.post('/create', PublisherController.postData)
publisherRoute.put('/update/:id', PublisherController.putData)
publisherRoute.delete('/delete/:id', PublisherController.deleteData)




module.exports = publisherRoute;
