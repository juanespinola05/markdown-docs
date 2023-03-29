import { MarkdownDocCreationAttributes, UserData } from '@/types'
import { serializeDocumentData } from '@/utils/firebase'
import { addDoc, collection, doc, DocumentData, getDoc, getDocs, query, Timestamp, where } from 'firebase/firestore'
import { db } from '../client'

const MARKDOWN_DOCS_COLLECTION_NAME = 'markdown-documents'
const markdownCollection = collection(db, MARKDOWN_DOCS_COLLECTION_NAME)

export const createMarkdownDoc = async (data: MarkdownDocCreationAttributes): Promise<string> => {
  try {
    const docRef = await addDoc(markdownCollection, {
      ...data,
      createdAt: Timestamp.fromDate(new Date()),
      lastEdition: Timestamp.fromDate(new Date())
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
      ...serializeDocumentData(data)
    }
  } else throw new Error('Not found')
}

export const getMarkdownDoccumentsByUser = async (email: UserData['email']): Promise<DocumentData[]> => {
  const q = query(markdownCollection, where('userId', '==', email))
  const querySnapshot = await getDocs(q)

  const documents: DocumentData[] = []
  querySnapshot.forEach(doc => {
    const data = serializeDocumentData(doc.data())
    documents.push({ ...data, docId: doc.id })
  })

  return documents
}
