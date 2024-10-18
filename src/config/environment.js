import dotenv from 'dotenv'
dotenv.config()

export default {
    port: process.env.PORT,
    server_url: process.env.SERVER_URL,
    database_name: process.env.DATABASE_NAME,
    database_username: process.env.DATABASE_USERNAME,
    database_password: process.env.DATABASE_PASSWORD,
    database_url: process.env.DATABASE_URL,
    jwt_secret: process.env.JWT_SECRET
}