<template>
    <div class="card mb-4 shadow-sm">
        <img :src="produtoImageUrl" alt="" class="card-img-top product-image" />
        <div class="card-body">
            <h5 class="card-title text-left">{{ produto.nome }}</h5>
            <div class="row">
                <router-link type="button" class="btn btn-primary btn-lg">Detalhes</router-link>
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