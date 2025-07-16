<template>
    <div class="grid text-center">
        <h2 class="h2">Seja bem vindo de volta!</h2>
        <div class="justify-content-md-center">
            <div class="card card-center" style="width: 30rem;">
                <div class="card-body">
                    <div :class="this.validateEmail ? 'input-group mb-3' : 'input-group mb-1'">
                        <span :class="this.validateEmail ? 'input-group-text' : 'input-group-text invalid__input'" id="basic-addon1">
                            <i :class="this.validateEmail ? 'bi bi-envelope' : 'bi bi-envelope invalid__i'"></i>
                        </span>
                        <input type="text" :class="this.validateEmail ? 'form-control' : 'form-control invalid__input'" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" v-model="email">
                    </div>
                    <div class="box__p mb-3" v-if="!this.validateEmail">
                        <p class="password--invalid__p"> {{ this.messageInvalidEmail }} </p>
                    </div>
                    <div :class="this.validatePassword ? 'input-group mb-3' : 'input-group mb-1'">
                        <span :class="this.validatePassword ? 'input-group-text' : 'input-group-text invalid__input'" id="basic-addon1">
                            <i :class="this.validatePassword ? 'bi bi-key' : 'bi bi-key invalid__i'"></i>
                        </span>
                        <input type="password" :class="this.validatePassword ? 'form-control' : 'form-control invalid__input'" placeholder="Senha" aria-label="Password" aria-describedby="basic-addon1" v-model="password">
                    </div>
                    <div class="box__p mb-3" v-if="!this.validatePassword">
                        <p class="password--invalid__p"> {{ this.messageInvalidPassword }} </p>
                    </div>
                    <button type="button" class="btn btn-outline-success" v-on:click="validateForms">Entrar</button>
                </div>
            </div>
        </div>
        <br>
        <div>
            <p>Ainda nao possui uma conta? <span class="span-link" v-on:click="() => this.$router.replace('/register')">Crie sua conta aqui.</span></p>
        </div>
        <div id="register__alert" class="container d-flex justify-content-center"></div>
    </div>
</template>

<script>
import { loginClient } from '../../requestAuthApi.js';
import { showAuthAlert } from '../../bootstrapElements.js';

export default {
    name: 'LoginPage',
    data() {
        return {
            email: '',
            password: '',
            validateEmail: true,
            validatePassword: true,
            messageInvalidEmail: '',
            messageInvalidPassword: '',
        }
    },
    methods: {
        async validateForms() {
            this.validateEmail = this.email === '' ? false : true
            this.validatePassword = this.password === '' ? false : true

            this.messageInvalidEmail = this.validateEmail ? '' : '* Insira um email'
            this.messageInvalidPassword = this.validatePassword ? '' : '* Insira uma senha'

            if (this.validateEmail && this.validatePassword) {
                try {
                    const client = {
                        email: this.email,
                        password: this.password
                    }

                    var response = await loginClient(client)

                    switch(response.status) {
                        case 200:
                            this.$router.replace('/home')
                            showAuthAlert('register__alert', ['Conta criada com sucesso!', 'Clique aqui', 'para entrar'], 'success')
                            break;
                        case 900:
                            showAuthAlert('register__alert', ['Esse email ja existe! Tente outro email.', '', ''], 'danger')
                            break;
                        case 901:
                            showAuthAlert('register__alert', ['O email recebido pelo servidor esta invalido! Tente novamente.', '', ''], 'danger')
                            break;
                        default:
                            showAuthAlert('register__alert', ['Ocorreu um erro inesperado! Tente novamente mais tarde.', '', ''], 'danger')
                            break;
                    }
                } catch (error) {
                    showAuthAlert('register__alert', ['Ocorreu um erro inesperado! Tente novamente mais tarde.', '', ''], 'danger')
                }
            }
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
