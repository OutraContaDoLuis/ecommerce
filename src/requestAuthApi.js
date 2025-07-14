import axios from 'axios';

const baseUrl = 'http://localhost:5217/api/v1/auth'

async function registerClient(client) {
    try {
        let responseBody = null

        await axios.post(baseUrl + '/register', {
            name: client.name.toString(),
            email: client.email.toString(),
            password: client.password.toString(),
            phone_number: client.phoneNumber.toString(),
            cep: client.cep.toString(),
            state: client.state.toString(),
            city: client.city.toString(),
            address: client.address.toString()
        }).then((response) => {
            console.log(response)
            responseBody = response
        }).catch((error) => {
            console.log(error)
            responseBody = error
        })

        console.log('response body register ' + responseBody)

        return responseBody

    } catch(error) {
        console.log(error)
        throw error
    }
}

async function loginClient(client) {
    try {
        let responseBody = null

        await axios.post(baseUrl + '/login', {
            email: client.email,
            password: client.password
        }).then((response) => {
            console.log(response)
            responseBody = response
        }).catch((error) => {
            console.log(error)
            throw new Error(error)
        })

        console.log('response body login ' + responseBody)

        return responseBody

    } catch(error) {
        console.log(error)
        throw error
    }
}

export { registerClient, loginClient }
