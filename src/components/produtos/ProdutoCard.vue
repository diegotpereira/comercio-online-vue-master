<template>
    <div class="card mb-4 shadow-sm">
        <img :src="produto.imageUrl" alt="" class="card-img-top product-image" />
        <div class="card-body">
            <h5 class="card-title text-left">{{ produto.name }}</h5>
            <h5 class="card-price text-left">R$ {{ produto.price }}</h5>
            <div class="row">
                <router-link type="button" class="btn btn-primary btn-lg" :to="'/detalhes/' + produto.id ">Detalhes</router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ProdutoCard',
    props: ['produto']
}
</script>
<style>
.card .product-image {
    height: 300px;
}
</style>