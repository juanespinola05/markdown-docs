import { MarkdownDocCreationAttributes } from '@/types'
import { addDoc, collection, Timestamp } from 'firebase/firestore'
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
    throw new Error('Unable to create document')
  }
}
