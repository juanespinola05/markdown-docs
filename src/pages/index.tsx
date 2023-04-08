import TemplatesGallery from '@/sections/TemplatesGallery'
import Head from 'next/head'
import { ReactElement, useEffect, useState } from 'react'
import LatestDocuments from '@/sections/LatestDocuments'
import { NextPage } from 'next'
import { getMarkdownDoccumentsByUser } from '@/lib/firebase/actions/documents'
import { DocumentData } from 'firebase/firestore'
import { useIsMount } from '@/hooks/useIsMount'
import { AuthAction, useAuthUser, withAuthUser, withAuthUserTokenSSR } from 'next-firebase-auth'
import AppLayout from '@/layout/AppLayout'

export const getServerSideProps = withAuthUserTokenSSR({
  whenUnauthed: AuthAction.REDIRECT_TO_LOGIN
})(async ({ AuthUser }) => {
  const userId = AuthUser.id as string
  const documents = await getMarkdownDoccumentsByUser(userId)

  return {
    props: {
      documents
    }
  }
})

interface IProps {
  documents: DocumentData[] | null
}

const Home: NextPage<IProps> = ({ documents }): ReactElement => {
  const { firebaseUser } = useAuthUser()
  const [docs, setDocs] = useState(documents)
  const isMount = useIsMount()

  useEffect(() => {
    if (firebaseUser === null) {
      if (!isMount) setDocs(null)
    } else {
      getMarkdownDoccumentsByUser(firebaseUser.uid)
        .then(setDocs)
        .catch(() => setDocs(null))
    }
  }, [firebaseUser])

  return (
    <>
      <Head>
        <title>Markdown Documents</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <TemplatesGallery />
      <LatestDocuments documents={docs} />
    </>
  )
}
// @ts-expect-error
Home.PageLayout = AppLayout

export default withAuthUser()(Home as any)
