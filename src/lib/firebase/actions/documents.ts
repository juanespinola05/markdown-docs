import { MarkdownDocCreationAttributes, MarkdownDocData, MarkdownDocFromCollection } from '@/types'
import { serializeDocumentData } from '@/utils/firebase'
import { addDoc, collection, doc, getDoc, getDocs, query, Timestamp, updateDoc, where } from 'firebase/firestore'
import { db } from '../client'
import { User } from 'firebase/auth'

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

export const getMarkdownDocByIdAndUser = async (userEmail: string, docId: string): Promise<MarkdownDocData> => {
  const snapshot = await getDoc(doc(db, MARKDOWN_DOCS_COLLECTION_NAME, docId))

  if (snapshot.exists()) {
    const data = snapshot.data()
    if (data.userId !== userEmail) throw new Error('Not found')
    return {
      ...serializeDocumentData<MarkdownDocData>(data)
    }
  } else throw new Error('Not found')
}

export const getMarkdownDoccumentsByUser = async (userId: User['uid']): Promise<MarkdownDocFromCollection[]> => {
  const q = query(markdownCollection, where('userId', '==', userId))
  const querySnapshot = await getDocs(q)

  const documents: MarkdownDocFromCollection[] = []
  querySnapshot.forEach(doc => {
    const data = serializeDocumentData<MarkdownDocData>(doc.data())
    documents.push({ ...data, docId: doc.id })
  })

  return documents
}

export const updateMarkdownDoc = async (params: Partial<MarkdownDocData>, docId: string): Promise<void> => {
  getDoc(doc(db, MARKDOWN_DOCS_COLLECTION_NAME, docId))
    .then(doc => {
      void updateDoc(doc.ref, params)
    })
    .catch(err => console.error(err))
}
