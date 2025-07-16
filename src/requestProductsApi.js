import axios from "axios";

const baseUrl = 'http://localhost:8002/'

async function getAllShops() {
    
    try {
        
        let responseBody = null

        await axios.get(baseUrl + 'api/v1/shops')
        .then((response) => {
            responseBody = response
        }).catch((error) => {
            responseBody = error
        })

        return responseBody

    } catch (error) {
        console.log(error)
        throw error
    }

}

async function getAllProducts() {

    try {
        
        let responseBody = null

        await axios.get(baseUrl + 'api/v1/products')
        .then((response) => {
            responseBody = response
        }).catch((error) => {
            responseBody = error
        })

        return responseBody

    } catch (error) {
        console.log(error)
        throw error
    }
    
}

export { getAllProducts, getAllShops }
