/* const doWork = () => {
    console.log('doing something')
}


doWork() */

const add = (a,b) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            if (a < 0 || b < 0) {
                return reject('numbers must not be negative')
            }
            resolve(a + b)
        }, 2000) 

    })

}


const doWork = async () => {
    // throw new Error('something went wrongs')
    // return 'issa string'
    
    const sum1 = await add(1, 99)
    const sum2 = await add(sum1, 50)
    const sum3 = await add(sum2, 3)
    return sum3
}

//console.log(doWork())

doWork().then( (result) => {
    console.log('result', result)
}).catch( (error) => {
    console.log('err!', error)
})

