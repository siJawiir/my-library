const publisherRoute = require('express').Router();
const PublisherController = require('../controllers/PublisherController');

publisherRoute.get('/', PublisherController.getData)
publisherRoute.get("/status", PublisherController.getStatusData);
publisherRoute.post('/', PublisherController.postData)
publisherRoute.put('/update/:id', PublisherController.putData)
publisherRoute.delete('/delete/:id', PublisherController.deleteData)




module.exports = publisherRoute;
