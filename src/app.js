import express from 'express'
import environment from './config/environment.js'
import path from 'node:path'
import getDirName from './utils/dirname.utils.js'

const app = express()
const __dirname = getDirName(import.meta.url)

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'../public')))

app.listen( environment.port, () => {
    console.log(`Server online on http://${environment.server_url}:${environment.port}`)
    
})