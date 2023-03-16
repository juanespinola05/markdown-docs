const ENVIRONMENT = {
  isProduction: process.env.NODE_ENV === 'production',
  AUTH_HOST: process.env.AUTH_HOST ?? '',
  DB_HOST_PORT: process.env.DB_HOST_PORT ?? 8080
}

export const { isProduction, AUTH_HOST, DB_HOST_PORT } = ENVIRONMENT
