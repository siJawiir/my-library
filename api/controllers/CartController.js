const { Cart, Book, User } = require("../models");

class CartController {
  static async getData(req, resp) {
    try {
      let data = await Cart.findAll({
        include: [
          {
            model: Book,
            attributes: ["title", "price", "image"],
          },
          {
            model: User,
            attributes: ["fullname", "address", "city", "phone"],
          },
        ],
      });
      resp.status(200).json(data);
    } catch (error) {
      resp.status(500).json(error);
    }
  }

  static async getDataBy(req, resp) {
    try {
      const id = +req.params.id;
      let data = await Book.findByPk(id);
      resp.status(200).json(data);
    } catch (error) {
      resp.status(500).json(error);
    }
  }

  static async postData(req, resp) {
    try {
      const {book_id, user_id, quantity} = req.body
      const data = await Cart.create({
         book_id, user_id, quantity
      })
      data
         ? resp.status(200).json({
             message: "Cart ID has Added!",
             data,
           })
         : resp.status(403).json({
             message: "Data ID Coulnd't be Added!",
           });

      // const book_id = req.body.id;
      // let fetchedCart;
      // let newQty = 1;
      // req, user.getData()
      // .then(cart => {
      //    fetchedCart = cart;
      //    return cart.getData({
      //       where: {
      //          id: book_id
      //       }
      //    })
      // })
      // .then((books) => {
      //    let book;
      //    if (books.length > 0) {
      //       book = books[0]
      //    }
      //    if (book) {
      //       const oldQty = book.cart.quantity;
      //       newQty = oldQty + 1
      //       return book
      //    }
      //    else {
      //       return Book.findByPk(id)
      //    }
      // })
      // .then((book) => {
      //    return fetchedCart.addItem(book, {
      //       through: {
      //          quantity : newQty
      //       }
      //    })
      // })
      
    } catch (error) {
      resp.status(500).json(error);
      console.log(error)
    }
  }

  static async deleteData(req, resp) {
    try {
    } catch (error) {}
  }
}

module.exports = CartController;
