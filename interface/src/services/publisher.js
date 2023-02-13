import axios from "axios";

const URL = "http://localhost:3000/api/publishers";

const getData = async (cb) => {
  try {
    let publishers = await axios({
      method: "GET",
      url: URL,
    });
    cb(publishers.data);
  } catch (error) {
    // console.log(error)
    console.status(500).json(error);
  }
};

const getStatusPublisher = async (cb)=> {
    try {
        let publisher = await axios({
            method: 'GET',
            url: URL + '/status'
        })
        cb([publisher.data.count])
    } catch (error) {
        cb.status(500).json(error)
    }
}

export { getData, getStatusPublisher };
