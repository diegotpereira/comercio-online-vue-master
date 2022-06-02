import Vue from "vue";
import Vuex from 'vuex'
import conta from './conta'
import produto from './produto'

Vue.use(Vuex)

export default function () {
    const store = new Vuex.Store({
        modules: {
            conta,
            produto
        },
        strict: process.env.DEV
    })
    return store
}