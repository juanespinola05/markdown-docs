import { adminAuth } from '../admin'
import nookies from 'nookies'
import { GetServerSidePropsContext } from 'next'
import { DecodedIdToken } from 'firebase-admin/auth'

export const validateToken = async (context: GetServerSidePropsContext): Promise<DecodedIdToken> => {
  const cookies = nookies.get(context)
  try {
    const token = await adminAuth.verifyIdToken(cookies.token)
    return token
  } catch (e) {
    console.error(e)
    throw new Error('Validation error')
  }
}
