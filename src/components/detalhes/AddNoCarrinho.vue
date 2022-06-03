<template>
    <div class="row">
        <div class="col-3">
            <label for="quantitidade" class="sr-only">Quantidade</label>
            <input type="number" name="" id="" class="form-control mb-2 mr-sm-2"  v-model="quantidade"/>
        </div>
        <button type="button" class="btn btn-primary btn-lg btn-block col-9" v-if="!estaNoCardProp" @click="addNoCarrinho({produto, quantidade})">Adicionar no Carrinho</button>
        <button type="button" class="btn btn-primary btn-lg btn-block col-9" v-else @click.stop="removerCarrinho(produto.id)">Remover no Carrinho</button>
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
    data() {
        return {
            estaNoCardProp: false,
            quantidade: 1
        }
    },
    props: ['produto'],
    computed: {
        ...mapState('produto', ['carrinho'])
    },
    methods: {
        ...mapActions('produto', ['addCarrinho', 'removerCarrinho']),

        estaNoCarrinho(id) {
            for(let index = 0; index < this.carrinho.length; index++) {
                const elemento = this.carrinho[index]
                if (elemento === id) {
                    return true;
                }
            }
            return false;
        }
    },
    watch: {
        produto(val) {
            this.estaNoCardProp = this.estaNoCarrinho(val.id)
        },
        carrinho() {
            this.estaNoCardProp = this.estaNoCarrinho(this.produto.id)
        },
        quantidade(val) {
            if (val <= 0) {
                this.quantidade =1
            }
        }
    }
}
</script>