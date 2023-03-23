import { MarkdownDocCreationAttributes } from '@/types'
import { addDoc, collection, doc, DocumentData, getDoc, Timestamp } from 'firebase/firestore'
import { db } from '../client'

const MARKDOWN_DOCS_COLLECTION_NAME = 'markdown-documents'

export const createMarkdownDoc = async (data: MarkdownDocCreationAttributes): Promise<string> => {
  try {
    const docRef = await addDoc(collection(db, MARKDOWN_DOCS_COLLECTION_NAME), {
      ...data,
      createdAt: Timestamp.fromDate(new Date()),
      lastEdit: Timestamp.fromDate(new Date())
    })
    return docRef.id
  } catch (e) {
    console.error(e)
    throw new Error('Unable to create document')
  }
}

export const getMarkdownDocByIdAndUser = async (userEmail: string, docId: string): Promise<DocumentData> => {
  const snapshot = await getDoc(doc(db, MARKDOWN_DOCS_COLLECTION_NAME, docId))

  if (snapshot.exists()) {
    const data = snapshot.data()
    if (data.userId !== userEmail) throw new Error('Not found')
    return {
      ...data,
      createdAt: new Date(data.createdAt.seconds * 1000).toISOString(),
      lastEdit: new Date(data.lastEdit.seconds * 1000).toISOString()
    }
  } else throw new Error('Not found')
}
