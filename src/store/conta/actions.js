import router from '../../router'
import Axios from 'axios'

export function login({ commit }) {
    let url = 'https://randomuser.me/api/'

    Axios.get(url).then(function (response) {
        let usuarioDado = {
            displayNome: response.data.results[0].name.first,
            email: response.data.results[0].email,
            fotoUrl: response.data.results[0].thumnail,
            uid: response.data.results[0].login.uuid
        }
        commit('setUsuarioDado', usuarioDado)
        router.push('/')
    })
    .catch(function(err) {
        console.log(err);
    })
}