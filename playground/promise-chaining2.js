require ('../src/db/mongoose')

//const User = require('../src/models/user')

const TaskModel = require('../src/models/task')
const toDeleteId = '607aa3d7acf6332bf0a2f189'


/* TaskModel.findByIdAndDelete(toDeleteId).then( (deletedID) =>  {
    console.log(deletedID)
    return TaskModel.countDocuments( {completed: false} )
}).then( (newCount) => {
    console.log(newCount)
}).catch( (error) => {
    console.log(error)
}) */


const deleteTaskAndCount = async(id) =>{
    await TaskModel.findByIdAndDelete(id)
    const count = await TaskModel.countDocuments( {completed: false})
    return count
}

deleteTaskAndCount(toDeleteId).then( (newCount) =>{
    console.log('task left unfinished: ', newCount)
}).catch( (error) => {
    console.log(error)
})




