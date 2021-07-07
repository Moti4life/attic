require ('../src/db/mongoose')

const User = require('../src/models/user')





/* User.findByIdAndUpdate('607955343cceef27d8590889' , { age: 1 } ).then( (user) => {
    console.log(user)
    return User.countDocuments ( {age : 1})
    
}).then( (resultOfCount) => {
    console.log(resultOfCount)
    
}).catch( (error) => {
    console.log(error)
    
}) */


const updateAgeAndCount = async (id, newAge) => {
    //will process even if not used variable selectedUser
    const selectedUser = await User.findByIdAndUpdate(id, { age: newAge })
    const count = await User.countDocuments( {age: newAge} )
    return count

}

updateAgeAndCount('607955343cceef27d8590889' , 2).then((newCount) => {
    console.log(newCount)
}).catch( (error) => {
    console.log(error)
})