const express= require('express')

const app=express()
app.use(express.json())
const port =3015




app.get('/',(req,res)=>{
    res.json({
        notice :'welcome to notes taking app'
    })
})











app.listen(port,()=>{
    console.log('listing on port',port)
})