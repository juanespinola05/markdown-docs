import useUser from '@/context/user'
import { createMarkdownDoc } from '@/lib/firebase/actions/documents'

interface UseStorageHook {
  createBlankDocument: (title: string) => Promise<string>
}

export default function useStorage (): UseStorageHook {
  const { user } = useUser()

  const createBlankDocument = async (title: string): Promise<string> => {
    if (user == null) throw new Error('Must login to perform this')
    const document = await createMarkdownDoc({
      title,
      content: '',
      userId: user.email as string
    })
    return document
  }

  return {
    createBlankDocument
  }
}
