import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({

    state () {          //хранятся переменные, массивы и тд
        return {
            count: 1,
            products: [],   //массив, который нужно заполнить
        }
    },


    mutations:{         //для ищменения данных в state
            SET_PRODUCTS_TO_STATE: (state, products) => {       //после вызыва
            state.products = products                           //наш products = products из серва
        }
    },


    actions:{              //асинхронные действия
        GET_PRODUCTS_API({commit}){                             //создаем действие
            return axios('http://localhost:3000/products', {    //вызываем axios запрос с методом GET
                method: "GET"                                   //тип зайди туда и получи что-то
            })
            .then((products) => {                               //так как axios - промис, нужен then
                commit('SET_PRODUCTS_TO_STATE', products.data)       //этой фиговиной вызываем мутацию (SET_PRODUCTS_TO_STATE)
                return products
            })
            .catch((error)=>{
                console.log(error)
                return error
            })
        }
    },


    getters:{           //получение данных из state
        PRODUCTS(state){
            return state.products
        }
    },


})


export default store;













/*
const store = createStore({
    state () {          //хранятся переменные, массивы и тд
        return {
            count: 1,
            products: [],   //массив, который нужно заполнить
        }
    },
    mutations:{         //для ищменения данных в state
            SET_PRODUCTS_TO_STATE: (state, products) => {       //после вызыва
            state.products = products                           //наш products = products из серва
        }
    },
    actions:{              //асинхронные действия
        GET_PRODUCTS_API({commit}){                             //создаем действие
            return axios('http://localhost:3000/products', {    //вызываем axios запрос с методом GET
                method: "GET"                                   //тип зайди туда и получи что-то
            })
            .then((products) => {                               //так как axios - промис, нужен then
                commit('SET_PRODUCTS_TO_STATE', products)       //этой фиговиной вызываем мутацию (SET_PRODUCTS_TO_STATE)
                return products
            })
            .catch((error)=>{
                console.log(error)
                return error
            })
        }
    },
    getters:{           //получение данных из state
        PRODUCTS(state){
            return state.products
        }
    },
})
*/
