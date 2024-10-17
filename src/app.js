import express from 'express'

const app = express()

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.listen(() => {
    console.log('Esta corriendo el servidor')
    
})