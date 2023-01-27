const bookGenreRoute = require('express').Router();
const BookGenreController = require('../controllers/BookGenreController');

bookGenreRoute.get('/', BookGenreController.getData)
bookGenreRoute.post('/', BookGenreController.postData)
bookGenreRoute.put('/update/:id', BookGenreController.putData)
bookGenreRoute.delete('/delete/:id', BookGenreController.deleteData)




module.exports = bookGenreRoute;
