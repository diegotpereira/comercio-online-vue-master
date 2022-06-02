import state from "./state";
import * as getters from './getters'
import * as actions from './actions'
import * as mutaions from './mutations'

export default {
    namespaced: true,
    getters,
    actions,
    mutaions,
    state
}