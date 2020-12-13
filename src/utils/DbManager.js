// request: {
//   id: String,
//   state: String,
//   img: Blob,
//   creationDate: Int
// }
import store from '../store/index'

class DbManager {
  constructor() {
    this.db = null
    this.store = store
  }
  connect() {
    const request = indexedDB.open('AgroDb')
    request.onerror = () => {console.error('Error when opening db connection')}
    request.onsuccess = (event) => {
      this.db = event.target.result
      this.db.onerror = (event) => {
        console.error(event.target.errorCode)
      }
      this.getAllRequests()
    }
    request.onupgradeneeded = (event) => {
      const db = event.target.result
      const objectStore = db.createObjectStore('requests', { keyPath: 'id' })
      objectStore.createIndex('state', 'state', { unique: false })
    }
  }
  saveNewRequest(request) {
    const transaction = this.db.transaction('requests', 'readwrite')
    transaction.oncomplete = () => {
      console.log('Request saved to db')
    }
    transaction.objectStore('requests').put(request)
  }
  getAllRequests() {
    const objectStore = this.db.transaction('requests').objectStore('requests')
    objectStore.openCursor().onsuccess = (event) => {
      const cursor = event.target.result
      if (cursor) {
        const imageUrl = window.URL.createObjectURL(cursor.value.img)
        const request = cursor.value
        request.img = imageUrl
        this.store.commit('addRequest', request)
        cursor.continue()
      }
    }
  }
  updateRequestById(id, newState) {
    const objectStore = this.db.transaction('requests', 'readwrite').objectStore('requests')
    objectStore.get(id).onsuccess = (event) => {
      let requestData = event.target.result
      requestData.state = newState
      objectStore.put(requestData).onsuccess = () => {
        this.store.commit('updateRequestState', { id, newState })
      }
    }
  }
}

const dbManager = new DbManager()

export {
  dbManager
}