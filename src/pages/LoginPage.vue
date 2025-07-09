<template>
    <div class="grid text-center">
        <h2 class="h2">Seja bem vindo de volta!</h2>
        <div class="justify-content-md-center">
            <div class="card card-center" style="width: 30rem;">
                <div class="card-body">
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">
                            <i class="bi bi-envelope"></i>
                        </span>
                        <input type="text" class="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" v-model="email">
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">
                            <i class="bi bi-key"></i>
                        </span>
                        <input type="password" class="form-control" placeholder="Senha" aria-label="Username" aria-describedby="basic-addon1" v-model="password">
                    </div>
                    <button type="button" class="btn btn-outline-success" v-on:click="validateForms">Entrar</button>
                </div>
            </div>
        </div>
        <br>
        <div>
            <p>Ainda nao possui uma conta? <span class="span-link" v-on:click="() => this.$router.replace('/register')">Crie sua conta aqui.</span></p>
        </div>
    </div>
</template>

<script>

export default {
    name: 'LoginPage',
    data() {
        return {

        }
    },
    methods: {
        validateForms() {

        }
    }
}

</script>

<style scoped>

.box__p {
    padding: 0 auto;
}

.password--invalid__p {
    color: rgb(255, 63, 63);
}

.password--valid__p {
    color: rgb(28, 190, 28);
}

.password--invalid__p, .password--valid__p {
    font-size: 14px;
    text-align: start;
    margin: 0 auto;
    float: none;
}

.invalid__input {
    border-color: rgb(255, 63, 63);
}

.invalid__i {
    color: rgb(255, 63, 63);
}

</style>
