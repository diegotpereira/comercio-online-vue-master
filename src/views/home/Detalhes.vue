<template>
    <div class="container-fluid">
        <div class="row d-flex justify-content-center">
            <div class="col-6">
                <div class="card-text-left shadow-md">
                    <img :src="produto.imageUrl" alt="" class="card-img-top">
                </div>
            </div>
            <div class="col-6 text-left text-justify">
                <div class="display-3">{{ produto.name }}</div>
                <p class="lead text-justify">{{ produto.content }}</p>
                <div>
                    <p class="h3">Preço</p>
                    <p class="h2">R$ {{ produto.price }}</p>
                </div>
                <AddNoCarrinho :produto="produto" v-if="usuario.uid" />
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import AddNoCarrinho from '../../components/detalhes/AddNoCarrinho'
export default {
    data() {
        return {
            estaNoCardProp: false
        }
    },
    computed: {
        ...mapGetters('conta', ['usuario']),
        ...mapGetters('produto', ['produto'])
    },
    methods: {
        ...mapActions('produto', ['produtoDetalhes'])
    },
    mounted() {
        this.produtoDetalhes(this.$route.params.idProduto)
    },
    components: {
        AddNoCarrinho
    }
}
</script>
<style>
.container-fluid {
  padding: 30px;
}
.image-product {
  width: 100%;
}
.card * {
  max-height: 85vh;
}
</style>