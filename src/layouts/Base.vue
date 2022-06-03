<template>
    <div>
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
                
                <router-link class="navbar-brand" to="/">E-commerce DTP Software</router-link>
                <div class="ml-auto">
                    <div v-if="usuario.fotoUrl">
                        <img :src="usuario.fotoUrl"  alt="" class="img-thumbnail profile-image" />
                        <router-link class="btn btn-primary my-2 my-sm-0" to="/carrinho">
                           <img src="https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG38.png" alt="" width="50">
                           <span class="badge badge-danger badge-pill">{{ carrinho.length }}</span>
                        </router-link>
                    </div>
                    <router-link class="btn btn-primary my-2 my-sm-0" to="/login">Entrar</router-link>
                </div>
            </nav>
        </div>
        <div class="page-container">
           <router-view /> 
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name: 'Base',
    computed: {
        ...mapGetters('conta', ['usuario']),
        ...mapGetters('produto', ['carrinho'])
    }
}
</script>
<style>
   nav {
       background-color: teal;
   }
   .navbar-brand {
       font-weight: bold;
       font-size: 25px;
       color: #ffffff !important;
   }
   .profile-image {
       width: 50px;
       border-radius: 100% !important;
   }
   .page-container {
       padding-top: 81px;
   }
   .btn {
       border-radius: 0%;
       font-weight: bold;
       background: teal;
       border: teal;
   }
   .btn:hover {
       background: #00b4b4;
   }
   .input {
       border-radius: 0%;
   }
   .btn:focus {
       background: teal;
   }
</style>