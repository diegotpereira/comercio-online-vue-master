import axios from "axios";

// ação para buscar produtos lista 
export function getProdutos({ commit }) {
    let url = 'https://my-json-server.typicode.com/Nelzio/ecommerce-fake-json/products'
    axios.get(url)
    .then((response)=> {
        commit('setProdutos', response.data)
    })
    .catch(error => {
        console.log(error);
    })
}

// ação para buscar detalhe do produto
export function produtoDetalhes({ commit, id }) {
    let url = 'https://my-json-server.typicode.com/Nelzio/ecommerce-fake-json/products'
    axios.get(url, { params: {id: id}})
    .then((response) => {
        commit('setProduto', response.data[0])
    })
    .catch(function(error) {
        console.log(error);
    })
}

// ação adionar produto ao carrinho
export function addCarrinho({ commit, getters }, payload) {
    let carrinho = getters.carrinho
    let data = payload.produto
    data['quantidade'] = payload.quantidade
    carrinho.push(payload)
    commit('setCarrinho', carrinho)
}

// ação remover produto do carrinho
export function removerCarrinho({ commit, getters}, id) {
    let carrinho = []
    if (id) {
        for(let  index = 0; index < getters.carrinho.lenght; index++) {
            const elemento = getters.carrinho[index]
            if (elemento.id !== id) {
                carrinho.push.elemento
            }
        }
    }
    commit('setCarrinho', carrinho)
}