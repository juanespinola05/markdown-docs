import { DB_HOST_PORT, isProduction } from '@/constants/environment'
import { initializeApp } from 'firebase/app'
import { getAuth, connectAuthEmulator, setPersistence, browserSessionPersistence } from 'firebase/auth'
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCR9VMoa3z7WSDNvfkeXNJh8MsM5dWQUME',
  authDomain: 'markdown-docs-20776.firebaseapp.com',
  projectId: 'markdown-docs-20776',
  storageBucket: 'markdown-docs-20776.appspot.com',
  messagingSenderId: '435085101631',
  appId: '1:435085101631:web:3e475cc334b8a4e9b8c68a',
  measurementId: 'G-KRW4QJB350'
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(isProduction ? app : undefined)

void setPersistence(auth, browserSessionPersistence)

if (!isProduction) {
  connectAuthEmulator(auth, 'http://localhost:9099')
  connectFirestoreEmulator(db, 'localhost', DB_HOST_PORT as number)
}
