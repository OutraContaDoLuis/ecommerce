<template>
    <div class="grid text-center">
        <h2 class="h2">Novo por aqui? Crie a sua conta!</h2>
        <div class="justify-content-md-center">
            <div class="card card-center" style="width: 30rem;">
                <div class="card-body">
                    <div :class="this.validateName ? 'input-group mb-3' : 'input-group mb-1'">
                        <span :class="this.validateName ? 'input-group-text' : 'input-group-text invalid__input'" id="basic-addon1">
                            <i :class="this.validateName ? 'bi bi-person' : 'bi bi-person invalid__i'"></i>
                        </span>
                        <input type="text" :class="this.validateName ? 'form-control' : 'form-control invalid__input'" placeholder="Nome" aria-label="Username" aria-describedby="basic-addon1" v-model="name">
                    </div>
                    <div class="box__p mb-3" v-if="!this.validateName">
                        <p class="password--invalid__p"> {{ this.messageInvalidName }} </p>
                    </div>
                    <div :class="this.validateEmail ? 'input-group mb-3' : 'input-group mb-1'">
                        <span :class="this.validateEmail ? 'input-group-text' : 'input-group-text invalid__input'" id="basic-addon1">
                            <i :class="this.validateEmail ? 'bi bi-envelope' : 'bi bi-envelope invalid__i'"></i>
                        </span>
                        <input type="text" :class="this.validateEmail ? 'form-control' : 'form-control invalid__input'" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" v-model="email">
                    </div>
                    <div class="box__p mb-3" v-if="!this.validateEmail">
                        <p class="password--invalid__p"> {{ this.messageInvalidEmail }} </p>
                    </div>
                    <div :class="this.validatePassword ? 'input-group mb-3' : 'input-group mb-1'">
                        <span :class="this.validatePassword ? 'input-group-text' : 'input-group-text invalid__input'" id="basic-addon1">
                            <i :class="this.validatePassword ? 'bi bi-key' : 'bi bi-key invalid__i'"></i>
                        </span>
                        <input type="password" :class="this.validatePassword ? 'form-control' : 'form-control invalid__input'" placeholder="Senha" aria-label="Username" aria-describedby="basic-addon1" v-model="password">
                    </div>
                    <div class="box__p mb-3" v-if="!this.validatePassword">
                        <p class="password--invalid__p"> {{ this.messageInvalidPassword }} </p>
                    </div>
                    <div class="box__p mb-3" v-if="this.password.toString().trim() != ''">
                        <p :class="!passwordGreatherThan ? 'password--invalid__p' : 'password--valid__p'">* Sua senha deve ser maior que 8 caracteres <i class="bi bi-check-lg" v-if="passwordGreatherThan"></i><i class="bi bi-x" v-if="!passwordGreatherThan"></i></p>
                        <p :class="!passwordHaveAUpperLetter ? 'password--invalid__p' : 'password--valid__p'">* Sua senha deve ter pelo menos uma letra maiuscula <i class="bi bi-check-lg" v-if="passwordHaveAUpperLetter"></i><i class="bi bi-x" v-if="!passwordHaveAUpperLetter"></i></p>
                        <p :class="!passwordHaveNumbers ? 'password--invalid__p' : 'password--valid__p'">* Sua senha deve ter numeros <i class="bi bi-check-lg" v-if="passwordHaveNumbers"></i><i class="bi bi-x" v-if="!passwordHaveNumbers"></i></p>
                        <p :class="!passwordHaveSpecialCharacters ? 'password--invalid__p' : 'password--valid__p'">* Sua senha deve ter caracteres especiais <i class="bi bi-check-lg" v-if="passwordHaveSpecialCharacters"></i><i class="bi bi-x" v-if="!passwordHaveSpecialCharacters"></i></p>
                    </div>
                    <div :class="this.validateConfirmPassword ? 'input-group mb-3' : 'input-group mb-1'">
                        <span :class="this.validateConfirmPassword ? 'input-group-text' : 'input-group-text invalid__input'" id="basic-addon1">
                            <i :class="this.validateConfirmPassword ? 'bi bi-key' : 'bi bi-key invalid__i'"></i>
                        </span>
                        <input type="password" :class="this.validateConfirmPassword ? 'form-control' : 'form-control invalid__input'" placeholder="Confirme sua senha" aria-label="Username" aria-describedby="basic-addon1" v-model="confirmPassword">
                    </div>
                    <div class="box__p mb-3" v-if="!this.validateConfirmPassword && this.confirmPassword.toString().trim() === ''">
                        <p class="password--invalid__p"> {{ this.messageInvalidConfirmPassword }} </p>
                    </div>
                    <div class="box__p mb-3" v-if="this.confirmPassword.toString().trim() != ''">
                        <p :class="!passwordMatch ? 'password--invalid__p' : 'password--valid__p'">* As senhas sao iguais <i class="bi bi-check-lg" v-if="passwordMatch"></i><i class="bi bi-x" v-if="!passwordMatch"></i></p>
                    </div>
                    <div :class="this.validateCep ? 'input-group mb-3' : 'input-group mb-1'">
                        <input type="text" :class="this.validateCep ? 'form-control' : 'form-control invalid__input'" placeholder="CEP" aria-label="Username" aria-describedby="basic-addon1" v-model="cep">
                    </div>
                    <div class="box__p mb-3" v-if="!this.checkingValidateCep">
                        <p class="password--invalid__p"> {{ this.messageInvalidCep }} </p>
                    </div>
                    <div :class="this.validateAddress ? 'input-group mb-3' : 'input-group mb-1'">
                        <input type="text" :class="this.validateAddress ? 'form-control' : 'form-control invalid__input'" placeholder="Endereco" aria-label="Username" aria-describedby="basic-addon1" v-model="address">
                    </div>
                    <div class="box__p mb-3" v-if="!this.validateAddress">
                        <p class="password--invalid__p"> {{ this.messageInvalidAddress }} </p>
                    </div>
                    <div :class="(this.validateState && this.validateCity) ? 'input-group mb-3' : 'input-group mb-1'">
                        <button :class="this.validateState ? 'btn btn-outline-secondary dropdown-toggle' : 'btn btn-outline-secondary dropdown-toggle invalid__input'" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {{ this.state === '' ? 'Estado' : this.state }}
                        </button>
                        <ul class="dropdown-menu">
                            <li v-for="(state, index) in statesList" :key="index"><a class="dropdown-item" href="#" v-on:click="this.state = state"> {{ state }} </a></li>
                        </ul>
                        <input type="text" :class="this.validateCity ? 'form-control' : 'form-control invalid__input'" placeholder="Cidade" aria-label="Username" aria-describedby="basic-addon1" v-model="city">
                    </div>
                    <div class="box__p mb-3" v-if="!this.validateState || !this.validateCity">
                        <p class="password--invalid__p"> {{ this.messageInvalidStateCity }} </p>
                    </div>
                    <div :class="this.validatePhoneNumber ? 'input-group mb-3' : 'input-group mb-1'">
                        <span :class="this.validatePhoneNumber ? 'input-group-text' : 'input-group-text invalid__input'" id="basic-addon1">
                            <i :class="this.validatePhoneNumber ? 'bi bi-telephone' : 'bi bi-telephone invalid__i'"></i>
                        </span>
                        <input type="text" :class="this.validatePhoneNumber ? 'form-control' : 'form-control invalid__input'" placeholder="Numero de telefone" aria-label="Username" aria-describedby="basic-addon1" v-model="phoneNumber">
                    </div>
                    <div class="box__p mb-3" v-if="!this.validatePhoneNumber">
                        <p class="password--invalid__p"> {{ this.messageInvalidPhoneNumber }} </p>
                    </div>
                    <button type="button" class="btn btn-outline-success" v-on:click="validateForms">Criar Conta</button>
                </div>
            </div>
        </div>
        <br>
        <div>
            <p>Já possui uma conta? <span class="span-link" v-on:click="() => this.$router.replace('/')">Faça seu login aqui.</span></p>
        </div>
        <div id="register__alert" class="container d-flex justify-content-center"></div>
    </div>
</template>

<script>
import axios from 'axios';
import { registerClient } from '../requestAuthApi.js';
import { showAuthAlert } from '../bootstrapElements.js';

export default {
    name: 'RegisterPage',
    data() {
        return {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            state: '',
            city: '',
            cep: '',
            address: '',
            phoneNumber: '',
            validateName: true,
            validateEmail: true,
            validatePassword: true,
            validateConfirmPassword: true,
            validateState: true,
            validateCity: true,
            validateCep: true,
            validateAddress: true,
            validatePhoneNumber: true,
            messageInvalidName: '',
            messageInvalidEmail: '',
            messageInvalidPassword: '',
            messageInvalidConfirmPassword: '',
            messageInvalidCep: '',
            messageInvalidAddress: '',
            messageInvalidStateCity: '',
            messageInvalidPhoneNumber: '',
            statesList: [
                'MT', 'MS', 'GO'
            ]
        }
    },
    computed: {
        passwordGreatherThan() {
            return this.password.toString().length >= 8
        },
        passwordHaveAUpperLetter() {
            return this.password.toString().toLocaleLowerCase() != this.password.toString()
        },
        passwordHaveNumbers() {

            let haveNumber = false
            let password = this.password

            for (var i = 0; i < password.length; i++) {

                if (!isNaN(password[i])) {
                    haveNumber = true
                    break
                }

            }

            return haveNumber
        },
        passwordHaveSpecialCharacters() {
            
            let haveSpecialCharacter = false
            let password = this.password

            for (var i = 0; i < password.length; i++) {

                if (this.verifySpecialCharacter(password.charCodeAt(i))) {
                    haveSpecialCharacter = true
                    break
                }

            }

            return haveSpecialCharacter

        },
        passwordMatch() {
            return this.password === this.confirmPassword
        }
    },
    watch: {
        cep: {
            handler(value) {
                console.log('New value ' + value)
                axios.get('https://viacep.com.br/ws/' + this.cep + '/json/')
                .then((response) => {
                    console.log(response)
                    console.log(response.data)
                    this.validateCep = true
                    this.messageInvalidCep = ''
                    this.city = response.data.localidade
                    this.address = response.data.logradouro + ', ' + response.data.bairro
                })
                .catch((error) => {
                    console.log(error)
                })
            },
            deep: false
        }
    },
    methods: {
        verifySpecialCharacter(code) {

            if (isNaN(code)) {
                return false
            }

            if (!(code >= 65 && code <= 90) &&
                !(code >= 97 && code <= 122) &&
                !(code >= 48 && code <= 57 )) {
                return true
            } else {
                return false
            }
        },
        validatePhoneNumberLenght(phoneNumber) {

            let validate = false

            console.log('(00) 00000-0000'.trim().length)
            console.log('00000000000'.trim().length)
            console.log(phoneNumber.trim().length)

            if (phoneNumber.trim().length == '(00)00000-0000'.trim().length) {
                validate = true
            } else if (phoneNumber.trim().length == '00000000000'.trim().length) {
                validate = true
            }

            return validate

        },
        async validateForms() {

            this.validateName = this.name === '' ? false : true
            this.validateEmail = this.email === '' ? false : true
            this.validatePassword = this.password === '' ? false : true
            this.validateConfirmPassword = this.confirmPassword === '' ? false : true
            this.validateCep = this.cep === '' ? false : true
            this.validateAddress = this.address === '' ? false : true
            this.validateState = this.state === '' ? false : true
            this.validateCity = this.city === '' ? false : true
            this.validatePhoneNumber = this.phoneNumber === '' ? false : true

            this.messageInvalidName = this.validateName ? '' : '* Insira um nome'
            this.messageInvalidEmail = this.validateEmail ? '' : '* Insira um email'
            this.messageInvalidPassword = this.validatePassword ? '' : '* Insira uma senha'
            this.messageInvalidConfirmPassword = this.validateConfirmPassword ? '' : '* Insira uma senha'
            this.messageInvalidCep = this.validateCep ? '' : '* Insira um CEP'
            this.messageInvalidAddress = this.validateAddress ? '' : '* Insira um endereco'
            
            if (this.validateState && !this.validateCity) {
                this.messageInvalidStateCity = '* Insira uma cidade'
            } else if (!this.validateState && this.validateCity) {
                this.messageInvalidStateCity = '* Selecione um estado'
            } else {
                this.messageInvalidStateCity = '* Selecione um estado e insira uma cidade'
            }

            this.messageInvalidPhoneNumber = this.validatePhoneNumber ? '' : '* Insira um numero de telefone'

            let emailSplit = this.email.toString().trim().split('@')

            let codeFirstCharacterOfFirstPartOfEmail = ''
            let codeFinalCharacterOfFirstPartOfEmail = ''
            let codeFirstCharacterOfSecondPartOfEmail = ''
            let codeFinalCharacterOfSecondPartOfEmail = ''

            if (this.email.toString().trim() != '') {
                codeFirstCharacterOfFirstPartOfEmail = emailSplit[0].charCodeAt(0)
                codeFinalCharacterOfFirstPartOfEmail = emailSplit[0].charCodeAt(emailSplit.length)
                codeFirstCharacterOfSecondPartOfEmail = emailSplit[1].charCodeAt(0)
                codeFinalCharacterOfSecondPartOfEmail = emailSplit[1].charCodeAt(emailSplit.length)
            }

            let firstCharacterOfFirstPartOfEmailSpecial = this.verifySpecialCharacter(codeFirstCharacterOfFirstPartOfEmail)
            let finalCharacterOfFirstPartOfEmailSpecial = this.verifySpecialCharacter(codeFinalCharacterOfFirstPartOfEmail)
            let firstCharacterOfSecondPartOfEmailSpecial = this.verifySpecialCharacter(codeFirstCharacterOfSecondPartOfEmail)
            let finalCharacterOfSecondPartOfEmailSpecial = this.verifySpecialCharacter(codeFinalCharacterOfSecondPartOfEmail)

            console.log(emailSplit[0][emailSplit[0].length - 1])

            if (emailSplit.length != 2 || emailSplit[0].trim() == '' || emailSplit[1].trim() == '' || firstCharacterOfFirstPartOfEmailSpecial 
            || finalCharacterOfFirstPartOfEmailSpecial || firstCharacterOfSecondPartOfEmailSpecial || finalCharacterOfSecondPartOfEmailSpecial 
            || !emailSplit[1].includes('.')) {
                this.validateEmail = false
                this.messageInvalidEmail = '* Insira um email valido'
            }

            if (this.cep != '') {
                axios.get('https://viacep.com.br/ws/' + this.cep + '/json/')
                .then((response) => {
                    console.log(response)
                    console.log(response.data)
                    this.validateCep = true
                    this.messageInvalidCep = ''
                    this.address = response.data.logradouro + ', ' + response.data.bairro
                    this.city = response.data.localidade
                    this.state = response.data.uf
                })
                .catch((error) => {
                    console.log(error)
                    this.validateCep = false
                    this.messageInvalidCep = '* Insira um cep valido'
                })
            }

            if (this.phoneNumber != '' && !this.validatePhoneNumberLenght(this.phoneNumber)) {
                this.validatePhoneNumber = false
                this.messageInvalidPhoneNumber = '* Insira um numero de telefone valido'
            }

            if (this.validateName && this.validateEmail && this.validatePassword 
                && this.validateConfirmPassword && this.cep && this.validateAddress
                && this.validateState && this.validateCity && this.validatePhoneNumber
            ) {
                try {
                    const client = {
                        name: this.name,
                        email: this.email,
                        password: this.password,
                        phoneNumber: this.phoneNumber,
                        cep: this.cep,
                        state: this.state,
                        city: this.city,
                        address: this.address,
                    }

                    const response = await registerClient(client)

                    console.log('Response code ' + response.status)
                    
                    switch(response.status) {
                        case 201:
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

                    
                } catch(error) {
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