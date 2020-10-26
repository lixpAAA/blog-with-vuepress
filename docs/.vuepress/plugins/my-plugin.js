const Axios = require('axios')

module.exports = (options, ctx) => {
   console.log(Axios)
   return {
     _axios: Axios
   }
}