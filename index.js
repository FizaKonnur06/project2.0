const express=require('express')
const app=express()
app.use(express.json())
let students=[
    { roolno:1,name:"Fiza",course:"BCA"},
    {roolno:2,name:"Shifa",course:"B.com"}


]
// get all students
app.get('/students',(req,res)=>{
    res.json(students)
})
// push()
app.post('/students',(req,res)=>{
    const newstudent={roolno:students.lenght+1, ...req.body}
    students.push(newstudent);
    res.push(newstudent);
    res.status(201).json(newstudent);

})
// Put()
app.put('/student/:rollno',(req,res)=>{
    const student=student.find(u=>u.rollno ===parseInt(req.params.rollno))
    if(!student) return res.status(404).json({message:"student not found"})
        student.name=req.body.name || student.name
    student.email=req.body.email  || student.email
    res.json(user)


})
// delete
app.delete('/student/:rollno',(req,res)=>{
    student=student.filter(student=>student.roolno !==parseInt(req.params.rollno))
    res.json({message:'student deleted'})
})
app.listen(8000,()=>console.log("server is running on the port 1000"));

