export default setProdutos(state, val) {
    state.produtos = val 
}
export function setProduto(state, val) {
    state.produto = val
}
export function setCarregar(state, val) {
    state.enviandoDado = val
}
export function setCarrinho(state, val) {
    state.carrinho = val 
}