<template>
    <div>
        <div class="container" style="padding-top: 10%">
            <div class="row d-flex justify-content-center">
                <div class="col-5 text-left login-form-container">
                    <div class="d-flex justify-content-center">
                        <img src="https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png" alt="" width="150">
                    </div>
                    <div>
                        <div class="form-group">
                            <label for="email">Endereço de email</label>
                            <input type="email" name="" id="email" class="form-control" aria-describedby="emailHelp">
                            <small class="form-text text-muted" id="emailHelp">nunca compartilharemos seu e-mail com mais ninguém.</small>
                        </div>
                        <div class="form-group">
                            <label for="password">Senha</label>
                            <input type="password" name="" id="password" class="form-control">
                        </div>
                        <div class="form-group form-check">
                            <input type="checkbox" name="" id="checkbox" class="form-check-input">
                            <label for="check" class="form-check-label">Olhe para mim</label>
                        </div>
                        <button @click="login()" type="submit" class="btn btn-primary btn-block">Entrar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    name: 'Entrar',
    methods: {
        ...mapActions('conta', ['login'])
    }
}
</script>