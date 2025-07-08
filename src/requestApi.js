const baseUrl = 'http://localhost:5217/api/v1/auth'

async function registerClient(client) {
    try {
        const response = await fetch(baseUrl + '/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: client.name.toString(),
                email: client.email.toString(),
                password: client.password.toString(),
                phone_dd: client.phoneDD.toString(),
                phone_number: client.phoneNumber.toString(),
                cep: client.cep.toString(),
                state: client.state.toString(),
                city: client.city.toString(),
                address: client.address.toString()
            })
        })

        console.log(response.status)

        if (!response.ok) {
            throw new Error('Erro na requisicao ' + response.status)
        }

        return response.status
    } catch(error) {
        console.log(error)
        throw error
    }
}

export { registerClient }
