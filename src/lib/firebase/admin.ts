import { credential } from 'firebase-admin'
import { getFirestore } from 'firebase-admin/firestore'
import { getAuth } from 'firebase-admin/auth'
import { getApps, App, initializeApp, ServiceAccount } from 'firebase-admin/app'
import { SERVICE_ACCOUNT } from '@/constants/environment'

const apps = getApps()
let app: App

try {
  app = (apps.length === 0)
    ? initializeApp({
      credential: credential.cert(SERVICE_ACCOUNT as ServiceAccount),
      databaseURL: 'https://markdown-docs-20776-default-rtdb.firebaseio.com'
    })
    : apps[0]
} catch (error) {}

export const adminAuth = getAuth(app)
export const adminFirestore = getFirestore(app)
