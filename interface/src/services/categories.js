import axios from "axios";

const URL = "http://localhost:3000/api/genres";

const getData = async (cb) => {
    try {
      let genres = await axios({
        method: "GET",
        url: URL,
      });
      cb(genres.data);
    } catch (error) {
      // console.log(error)
      console.status(500).json(error);
    }
  };
  
  const getStatusGenre = async (cb)=> {
      try {
          let genre = await axios({
              method: 'GET',
              url: URL + '/status'
          })
          cb([genre.data.count])
      } catch (error) {
          cb.status(500).json(error)
      }
  }
  
  export { getData, getStatusGenre };
