const express=require("express")
const app=express()
const cors=require("cors")
const router=require("./Routes/route")
const connect=require("./db")

connect() // Connecting to the database
app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

app.use('/user',router)


app.listen(5000,()=>{
    console.log("Food Serever Started")
})

