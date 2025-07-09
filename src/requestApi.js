const baseUrl = 'http://localhost:5217/api/v1/auth'

async function registerClient(client) {
    try {
        let responseBody = null

        await fetch(baseUrl + '/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: client.name.toString(),
                email: client.email.toString(),
                password: client.password.toString(),
                phone_number: client.phoneNumber.toString(),
                cep: client.cep.toString(),
                state: client.state.toString(),
                city: client.city.toString(),
                address: client.address.toString()
            })
        }).then((response) => {
            console.log(response)
            responseBody = response
        }).catch((error) => {
            console.log(error)
            throw new Error(error)
        })

        console.log('response body' + responseBody)

        return responseBody

    } catch(error) {
        console.log(error)
        throw error
    }
}

export { registerClient }
