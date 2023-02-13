import axios from "axios";

const URL = "http://localhost:3000/api/users";

const getData = async (cb) => {
    try {
      let users = await axios({
        method: "GET",
        url: URL,
      });
      cb(users.data);
    } catch (error) {
      // console.log(error)
      console.status(500).json(error);
    }
  };
  
  const getStatusUser = async (cb)=> {
      try {
          let user = await axios({
              method: 'GET',
              url: URL + '/status'
          })
          cb([user.data.count])
      } catch (error) {
          cb.status(500).json(error)
      }
  }
  
  export { getData, getStatusUser };
  