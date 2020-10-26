const Data = require('../logs/logs.json')

module.exports = {
  createRandomId() {
    return (Math.random()*10000000).toString(16).substr(0,4)+'-'+(new Date()).getTime()+'-'+Math.random().toString().substr(2,5);
  },
  getLog(key) {
     return Data[key]
  },
  setLog(key, log) {
    console.log('log',key, log)
     if(!Data[key]) {
       Data[key] = []
     } 
      Data[key].push(log)
      return true
  }
}