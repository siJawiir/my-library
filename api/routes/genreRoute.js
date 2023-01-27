const genreRoute = require('express').Router();
const GenreController = require('../controllers/GenreController');

genreRoute.get('/', GenreController.getData)
genreRoute.post('/', GenreController.postData)
genreRoute.put('/update/:id', GenreController.putData)
genreRoute.delete('/delete/:id', GenreController.deleteData)




module.exports = genreRoute;
