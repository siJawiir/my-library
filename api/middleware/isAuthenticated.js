
const isAuthenticated = (req, resp, next) => {
  if (req.auth) {
    return next()
  } else {
      return resp.status(401).json({
          error: "User not Authenticated"
      })
  }
}
module.exports = {isAuthenticated}