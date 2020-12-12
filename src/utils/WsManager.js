class WsMahager {
  constructor() {
    this.socket = null
  }
  connect() {
    this.socket = new WebSocket(process.env.VUE_APP_WS_SERVER)
    console.log(this.socket)
  }
}

const wsManager = new WsMahager()

export {
  wsManager
}