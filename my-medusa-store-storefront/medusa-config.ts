
export default {
  plugins: [
    {
      resolve: "medusa-plugin-contentful",
      options: {
        space_id: process.env.CONTENTFUL_SPACE_ID,
        access_token: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    http: {
      storeCors: process.env.STORE_CORS || "*",
      adminCors: process.env.ADMIN_CORS || "*",
      authCors: process.env.AUTH_CORS || "*",
    },
    redisUrl: process.env.REDIS_URL,
    jwtSecret: process.env.JWT_SECRET || "supersecret",
    cookieSecret: process.env.COOKIE_SECRET || "supersecret",
  },
}