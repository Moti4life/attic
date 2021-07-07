/* setTimeout (() => {
    console.log('2 sec delay')


}, 2000)

console.log('starting')

const names = ['moti1', 'moti2', 'moti' ]
const shortNames = names.filter((name) => {
    return name.length <= 4

} )


const geoCode = (address, callback) => {
    setTimeout( () => {
        const data = {
            latitude: 0,
            longtitude: 0
        }
        callback(data)
    }, 2000) 

}
geoCode('manila', newData => {
    console.log(newData)
    
}) */

//======================

//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

/* const add = (num1, num2, result) => {
    setTimeout( () => {
        result(num1 + num2)
    }, 2000)

}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
}) */


//=====================


const doWorkCallback = (callback) => {

    setTimeout(  () => {
        //callback('error', undefined)
        callback(undefined, 'successeses')
    }, 2000)
}

doWorkCallback( (error, result)  => {
    if(error){
        return console.log(error)
    }

    console.log(result)

})


















