<template>
    <div style="padding: 25px">
        <div class="container">
            <div class="row">
                <div class="col-md-4" v-for="produto in produtos" :key="produto.id"> 
                    <ProdutoCard :produto="produto" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters('produto', ['produtos']),
    },
    
}
</script>