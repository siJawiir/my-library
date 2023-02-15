import axios from "axios";
import Swal from "sweetalert2";

const URL = "http://localhost:3000/api/books";

const getLatestDataBook = async (cb) => {
  try {
    let books = await axios({
      method: "GET",
      url: URL + '/latest',
    });
    cb(books.data);
  } catch (error) {
    // console.log(error)
    console.status(500).json(error);
  }
};

const getDataBook = async (cb) => {
  try {
    let books = await axios({
      method: "GET",
      url: URL,
    });
    cb(books.data);
  } catch (error) {
    // console.log(error)
    console.status(500).json(error);
  }
};

const getStatusBook = async (cb)=> {
    try {
        let book = await axios({
            method: 'GET',
            url: URL + '/status'
        })
        cb([book.data.count])
    } catch (error) {
        cb.status(500).json(error)
    }
}

const addData = async (book) => {
  try {
    let books = await axios({
      method: "POST",
      url: URL,
      data: book,
    });
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Data has been saved',
      showConfirmButton: false,
      timer: 1500
    })
  } catch (error) {
    console.status(500).json(error)
  }
}

export { getLatestDataBook, getStatusBook, getDataBook, addData };
