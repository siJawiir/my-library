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
      if (!data) {
        resp.status(400).json("Bad Request");
      }
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
      const user = req.user;
      const { book_id, quantity } = req.body;
      const cart = await Cart.findOne({ where: user });
      const book = await Book.findOne({
        where: {
          id: book_id,
        },
      });

      // console.log(book.dataValues)

      if (!book) {
        resp.status(404).json({
          MessageChannel: "Item not Found!",
        });
        return;
      }

      const price = book.price;
      const title = book.title;

      if (cart) {
        const bookIndex = cart.books?.findIndex(
          (book) => book.book_id == book_id
        );
        // chek if book exist
        if (bookIndex > -1) {
          let product = cart.books[bookIndex];
          product.quantity += quantity;
          cart.quantity = cart.books.reduce((acc, curr) => {
            return acc + curr.quantity * curr.price;
          }, 0);
          cart.books[bookIndex] = product;
          await cart.save();
          resp.status(200).send(cart);
        } else {
          cart.books?.push({ books_id, title, quantity, price });
          cart.quantity = cart.books?.reduce((acc, curr) => {
            return acc + curr.quantity * curr.price;
          }, 0);
          await cart.save();
          resp.status(200).json(cart);
        }
      } else {
        // check cart exist, create
        const newCart = await Cart.create({
          user,
          books: [{ book_id, title, quantity, price }],
        });
        return resp.status(200).json(newCart);
      }

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
      console.log(error);
    }
  }

  static async deleteData(req, resp) {
    try {
      const user = req.user;
      const id = +req.params.id;
      let cart = await Cart.findOne({ user });
      const bookIndex = cart.books.findIndex((book) => book.book_id == book_id);
      if (bookIndex > - 1 ) {
        let book = cart.books[bookIndex]
        cart.quantity -= book.quantity * book.price
        if (cart.quantity < 0) {
          cart.quantity = 0
        }
        cart.books.splice(bookIndex, 1)
        cart.quantity = cart.books.reduce((acc, curr) => {
          return acc+ curr.quantity * curr.price
        },0)
        cart = await cart.save()
        resp.status(200).json(cart)
      }else{
        resp.status(404).json({
          MessageChannel: "item not found!"
        })
      }
    } catch (error) {
      resp.status(500).json(error)
    }
  }
}

module.exports = CartController;
