import useUser from '@/context/user'
import { createMarkdownDoc, getMarkdownDocByIdAndUser, getMarkdownDoccumentsByUser, updateMarkdownDoc } from '@/lib/firebase/actions/documents'
import { MarkdownDocData, MarkdownDocFromCollection } from '@/types'

type UpdateDocument = (params: Partial<MarkdownDocData>, docId: string) => Promise<void>
type CreateBlankDocument = (title: string) => Promise<string>
type GetDocument = (email: string, docId: string) => Promise<MarkdownDocData>
type GetDocuments = (email: string) => Promise<MarkdownDocFromCollection[]>

interface UseStorageHook {
  createBlankDocument: CreateBlankDocument
  updateDocument: UpdateDocument
  getDocument: GetDocument
  getDocuments: GetDocuments
}

export default function useStorage (): UseStorageHook {
  const { user } = useUser()

  const createBlankDocument: CreateBlankDocument = async (title) => {
    if (user == null) throw new Error('Must login to perform this')
    const document = await createMarkdownDoc({
      title,
      content: `# ${title}`,
      userId: user.email as string
    })
    return document
  }

  const updateDocument: UpdateDocument = async (params, docId) => {
    void updateMarkdownDoc(params, docId)
  }

  const getDocument: GetDocument = async (email, docId) => {
    return await getMarkdownDocByIdAndUser(email, docId)
  }

  const getDocuments: GetDocuments = async (email) => {
    return await getMarkdownDoccumentsByUser(email)
  }

  return {
    createBlankDocument,
    updateDocument,
    getDocument,
    getDocuments
  }
}
