import { credential } from 'firebase-admin'
import { initializeApp, ServiceAccount } from 'firebase-admin/app'
import serviceAccount from './serviceAccount.json'

const adminApp = initializeApp({
  credential: credential.cert(serviceAccount as ServiceAccount),
  databaseURL: 'https://markdown-docs-20776-default-rtdb.firebaseio.com'
})
