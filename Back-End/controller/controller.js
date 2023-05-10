const studentSchema = require("../module/module");

const createData = async(req,res)=>{
    const data = new studentSchema({
   ...req.body,
    })
    const saveData = await data.save()
    res.json(saveData);
    }
const getData = async(req,res)=>{
    const data = await studentSchema.find();
    res.json(data);
}
    





module.exports = {createData,getData}