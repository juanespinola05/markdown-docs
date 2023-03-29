const ENVIRONMENT = {
  isProduction: process.env.NODE_ENV === 'production',
  AUTH_HOST: process.env.AUTH_HOST ?? '',
  DB_HOST_PORT: process.env.DB_HOST_PORT ?? 8080,
  SERVICE_ACCOUNT: {
    type: process.env.type,
    project_id: process.env.project_id,
    private_key_id: process.env.private_key_id,
    private_key: process.env.FIREBASE_PRIVATE_KEY !== undefined ? JSON.parse(process.env.FIREBASE_PRIVATE_KEY) : undefined,
    client_email: process.env.client_email,
    client_id: process.env.client_id,
    auth_uri: process.env.auth_uri,
    token_uri: process.env.token_uri,
    auth_provider_x509_cert_url: process.env.auth_provider_x509_cert_url,
    client_x509_cert_url: process.env.client_x509_cert_url
  }
}

export const { isProduction, AUTH_HOST, DB_HOST_PORT, SERVICE_ACCOUNT } = ENVIRONMENT
