/* const square = function (x)
{
    return x * x
}
 */

//alternative arrow function

/* const square = (x) => {
    return x * x
}  */

//alternative 2

/* const square = (x) => x * x
 
console.log(square(2)) */

const event = {
    name: 'car meet',
    guestList: ['moti', 'jon'],
    printGuestList() {
        console.log('Guest list for ' + this.name)

        this.guestList.forEach((guest) => {
            console.log(guest + ' is going to ' + this.name)
        })
    }

}
event.printGuestList()