import axios from "axios";

const URL = "http://localhost:3000/api/books";

const getLatestDataBook = async (cb) => {
  try {
    let users = await axios({
      method: "GET",
      url: URL + '/latest',
    });
    cb(users.data);
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

export { getLatestDataBook, getStatusBook };
