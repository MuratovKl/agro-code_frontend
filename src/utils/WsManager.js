import { dbManager } from './DbManager'

class WsManager {
  constructor() {
    this.socket = null
    this.sentId = ''
  }
  connect() {
    this.socket = new WebSocket(process.env.VUE_APP_WS_SERVER)
    this.socket.onopen = () => {
      console.log('ws connected')
    }
    this.socket.onerror = () => {
      console.error('Error in ws')
    }
    this.socket.onmessage = (event) => {
      console.log(`Message data: ${event.data}`)
      this.handleMessage(event.data)
    }
  }
  sendMessage(message) {
    if (this.socket) {
      this.socket.send(message)
      this.sentId = message
    }
  }
  handleMessage(message) {
    console.log(message)
    dbManager.updateRequestById(this.sentId, message)
  }
}

const wsManager = new WsManager()

export {
  wsManager
}