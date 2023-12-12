import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import productRoutes from '../src/routes/product.routes'
import categoryRoutes from '../src/routes/category.routes'
import userRoutes from '../src/routes/user.routes'
import authRoutes from '../src/routes/auth.routes'



const app = express()
const PORT = 3000

app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/mongostore', {
    family: 4
})
mongoose.connection.on("connected", () => {
    console.log("Conexão com o MongoDB estabelecida com sucesso!")
})
mongoose.connection.on("error", (err) => {
    console.error("Erro na conexão com o MongoDB:", err)
})

app.use('/products', productRoutes)
app.use('/users', userRoutes)
app.use('/categories', categoryRoutes)
app.use('/auth', authRoutes)

app.listen(PORT, () => {
    console.log('Servidor rodando em http://localhost:'+PORT)
});