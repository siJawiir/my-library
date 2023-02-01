const {Cart, Book} = require('../models');


class CartController{
    static async getData(req, resp) {
        try {

      } catch (error) {
         
      }
    }

     static async getDataBy(req, resp){
        try {
            
      } catch (error) {
         
      }
   }
   
   static async postData(req, resp) {
      try {
           const id = +req.params.id
           const {book_id} = req.body
           const quantity = Number.parseInt(req.body.quantity)

           let cart = await Cart.findAll()
           let bookDetail = await Book.findById(book_id)
           if (!bookDetail) {
            return resp.status(500).json({
               message: "invalid request"
            })
           };

           if (cart) {
            const indexFound = cart.items.findIndex(item => item.book_id.id == book_id)
            if (indexFound !== -1 && quantity <= 0) {
               cart.items.splice(indexFound,1)
               if (cart.items.length == 0) {
                  cart.subTotal = 0
               } else {
                  cart.subTotal = cart.items.map(item => item.total).reduce((acc, next) => acc + next)
               }
            }else if (indexFound !== -1) {
               cart.items[indexFound].quantity = cart.items[indexFound].quantity + quantity
               cart.items[indexFound].total = cart.items[indexFound].quantity * Book
               cart.items[indexFound].price = cart.items[indexFound] = Book.price
               cart.subTotal = cart.items.map(item => item.total).reduce((acc, next) => acc + next)
            }else if (quantity > 0) {
               cart.items.push({
                  book_id : book_id,
                  quantity : quantity,
                  price: Book.price,
                  total : parseInt(Book.price * quantity)
               })
               cart.subTotal = cart.items.map(item => item.total).reduce((acc, next) => acc + next)
            } else {
               return(
                  resp.status(400).json({
                     message: "invalid request"
                  })
               )
            }
            let data = await Cart.create()
            resp.status(200).json({
               message: "success",
               data: data
            })
           }


        } catch (error) {
            resp.status(500).json(error)
        }
     }

     static async deleteData(req, resp) {
        try {
            
        } catch (error) {
            
        }
     }
}

module.exports = CartController
