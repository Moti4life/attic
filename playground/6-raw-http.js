const http = require('http')

const url = 'http://api.weatherstack.com/current?access_key=dfbd28c68e662deab875bc820cea8f15&query=54,-114'

const newRequest = http.request(url, (response) => {
    
    let data = ''
    response.on('data', (chunk) => {
        data = data + chunk.toString()
        

    })

    response.on ('end', () => {
        const responseBody = JSON.parse(data)
        console.log(responseBody)
    })

})

/* request.on('error', (error) => {
    console.log('error occured', error)
}) */


newRequest.end()