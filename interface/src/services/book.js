import axios from "axios";
import Swal from "sweetalert2";

const URL = "http://localhost:3000/api/books";

const getLatestDataBook = async (cb) => {
  try {
    let books = await axios({
      method: "GET",
      url: URL + "/latest",
    });
    cb(books.data);
  } catch (error) {
    // console.log(error)
    console.status(500).json(error);
  }
};

const getDataBy = async (id, cb) => {
  try {
    let assistants = await axios({
      method: "GET",
      url: URL + "/detail/" + String(id),
    });
    // console.log(assistants)
    cb(assistants.data);
  } catch (error) {
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

const getStatusBook = async (cb) => {
  try {
    let book = await axios({
      method: "GET",
      url: URL + "/status",
    });
    cb([book.data.count]);
  } catch (error) {
    cb.status(500).json(error);
  }
};

const addData = async (data) => {
  try {
    let books = await axios({
      method: "POST",
      url: URL,
      data: data,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Data has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
    console.log(books);
  } catch (error) {
    console.status(500).json(error);
  }
};

const deleteData = async (id) => {
  try {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        let books = await axios({
          method: "DELETE",
          url: URL + `/delete/` + id,
        });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  } catch (error) {
    console.status(500).json(error);
  }
};

const editData = async (id, book) => {
  try {
    let assistants = await axios({
      method: "PUT",
      url: URL + `/update/` + String(id),
      data: book,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Data has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
  } catch (error) {
    console.status(500).json(error);
  }
};

export {
  getLatestDataBook,
  getStatusBook,
  getDataBook,
  addData,
  deleteData,
  editData,
  getDataBy
};
