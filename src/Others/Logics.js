import {NodeFetchHelper} from "./NodeFetchHelper";
import {SessionManager} from "./SessionManager";
import axios from "axios";

const user_endpoint = 'localhost:2000/users/';
const product_endpoint = 'http://localhost:2000/products/categories';
const page_product_endpoint = 'http://localhost:2000/products/allData/categories';

const product_top = 'http://localhost:2000/orders/top';
const cart = 'http://localhost:2000/carts/byid';

export class Logics {
    static getUser(setUser) {
        NodeFetchHelper.get(user_endpoint, null, {
            Authorization: "Bearer " + SessionManager.getAccessToken()
        }, (status, jsonData, ok) => {
            setUser(jsonData)

        })
    }
    static getRoles(setRoles) {
        NodeFetchHelper.get(`http://localhost:2000/users/byid/${SessionManager.getUserId()}`, null, {
            Authorization: "Bearer " + SessionManager.getAccessToken()
        }, (status, jsonData, ok) => {
            setRoles(jsonData.roles)
            console.log(jsonData)

        })
    }

    static getProduct(categories, setProduct) {
        NodeFetchHelper.get(product_endpoint, {categories}, {
            Authorization: 'Bearer ' + SessionManager.getAccessToken()
        }, (status, jsonData, ok) => {
            console.log("HEELLLO",SessionManager.getAccessToken())
            if (ok) {
                setProduct(jsonData)
            }
        })
    }

    static getPaginatedProduct(categories, page, setProduct, setTotal) {
        const limit = 4
        const skip = (page - 1) * limit
        console.log(limit)
        console.log(skip)
        NodeFetchHelper.get(page_product_endpoint, {categories, skip, limit}, {
            Authorization: 'Bearer ' + SessionManager.getAccessToken()
        }, (status, jsonData, ok) => {
            console.log(jsonData)
            if (ok) {
                setProduct(jsonData[0].edges)
                setTotal(Math.floor(jsonData[0].pageInfo[0].count / limit) + 1)

            }

        })
    }

    static getTopProduct(categories, setProduct) {
        NodeFetchHelper.get(product_top, {categories}, {
            Authorization: 'Bearer ' + SessionManager.getAccessToken()
        }, (status, jsonData, ok) => {
            console.log(jsonData)
            if (ok) {
                setProduct(jsonData)
            }
        })
    }

    // static getTopProduct(categories, setProduct) {
    //     axios.get(`http://localhost:2000/orders/top/?categories=${categories}`, {
    //         headers: {Authorization: 'Bearer ' + SessionManager.getAccessToken()}
    //     })
    //         .then((response) => {
    //             setProduct(response)
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         })
    // }

    static getCartCount(callback) {
        let id = SessionManager.getUserId();
        NodeFetchHelper.get(cart, {id}, {
            Authorization: 'Bearer ' + SessionManager.getAccessToken()
        }, (status, jsonData, ok) => {
            console.log("after calling cart", jsonData.length)
            callback(jsonData.length)
        })

    }

    static getCart(setCart) {
        let id = SessionManager.getUserId();
        NodeFetchHelper.get(cart, {id}, {
            Authorization: 'Bearer ' + SessionManager.getAccessToken()
        }, (status, jsonData, ok) => {
            if (ok) {
                console.log("CArtdata", jsonData)
                setCart(jsonData)
            }
        })

    }

    static getCartTotalAmount(arrCart, setTotalAmount) {
        let count = 0;
        arrCart.map((item, index) => {
            count = count + item.products.price * item.count;
        })
        setTotalAmount(count);

    }


}