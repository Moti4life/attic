/* const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout( () => {
        //resolve('success resolve')
        reject('gg rejected')
    }, 2000 )


})


//then 
doWorkPromise.then( (result) => {
    console.log('this is resolve', result)

}).catch( (error) => {
    console.log('this is the error: ', error)

})
 */



//================


const add = (a,b) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve(a + b)
        }, 2000) 

    })

}

// add ( 1, 2).then( (result) => {
//     console.log(result)

//     add(result, 5).then((result2) => {
//         console.log(result2)
//     })


// }).catch( (error) => {
//     console.log(error)

// }) 

add(1,1).then ( (result) => {
    console.log(result)

    return add(result, 4)
}).then( (result2) => {
    console.log(result2)
}).catch( (error) => {
    console.log(error)
})
