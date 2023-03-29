import TemplatesGallery from '@/sections/TemplatesGallery'
import useUser from '@/context/user'
import Head from 'next/head'
import { ReactElement, useEffect, useState } from 'react'
import LatestDocuments from '@/sections/LatestDocuments'
import { authStateChanged } from '@/lib/firebase/actions/auth'
import { GetServerSideProps, NextPage } from 'next'
import { validateToken } from '@/lib/firebase/actions/authAdmin'
import { getMarkdownDoccumentsByUser } from '@/lib/firebase/actions/documents'
import { DocumentData } from 'firebase/firestore'
import { useIsMount } from '@/hooks/useIsMount'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const { email } = await validateToken(context)
    const documents = await getMarkdownDoccumentsByUser(email as string)
    return {
      props: {
        documents
      }
    }
  } catch (error) {
    console.log(error)
    return { props: { documents: null } }
  }
}

interface IProps {
  documents: DocumentData[] | null
}

const Home: NextPage<IProps> = ({ documents }): ReactElement => {
  const { setUser, user } = useUser()
  const [docs, setDocs] = useState(documents)
  const isMount = useIsMount()

  useEffect(() => {
    authStateChanged(setUser)
  }, [])

  useEffect(() => {
    if (user === null) {
      if (!isMount) setDocs(null)
    } else {
      getMarkdownDoccumentsByUser(user.email)
        .then(setDocs)
        .catch(() => setDocs(null))
    }
  }, [user])

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

export default Home
