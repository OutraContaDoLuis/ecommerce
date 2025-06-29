<template>
    <div class="grid text-center">
        <h2 class="h2">Novo por aqui? Crie a sua conta!</h2>
        <div class="justify-content-md-center">
            <div class="card card-center" style="width: 30rem;">
                <div class="card-body">
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">
                            <i class="bi bi-person"></i>
                        </span>
                        <input type="text" class="form-control" placeholder="Nome" aria-label="Username" aria-describedby="basic-addon1" v-model="name">
                    </div>
                    <div class="box__p" v-if="this.messageInvalidName.toString().trim() != ''">
                        <p class="password--invalid__p"> {{ this.messageInvalidName }} </p>
                    </div>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="CPF/CNPJ" aria-label="Username" aria-describedby="basic-addon1" v-model="cpfOrCnpj">
                    </div>
                    <div class="box__p" v-if="this.messageInvalidCpfOrCnpj.toString().trim() != ''">
                        <p class="password--invalid__p"> {{ this.messageInvalidCpfOrCnpj }} </p>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">
                            <i class="bi bi-envelope"></i>
                        </span>
                        <input type="text" class="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" v-model="email">
                    </div>
                    <div class="box__p" v-if="this.email.toString().trim() != ''">
                        <p :class="!checkEmailIsValid ? 'password--invalid__p' : 'password--valid__p'">* Insira um email valido <i class="bi bi-check-lg" v-if="checkEmailIsValid"></i><i class="bi bi-x" v-if="!checkEmailIsValid"></i></p>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">
                            <i class="bi bi-key"></i>
                        </span>
                        <input type="password" class="form-control" placeholder="Senha" aria-label="Username" aria-describedby="basic-addon1" v-model="password">
                    </div>
                    <div class="box__p" v-if="this.password.toString().trim() != ''">
                        <p :class="!passwordGreatherThan ? 'password--invalid__p' : 'password--valid__p'">* Sua senha deve ser maior que 8 caracteres <i class="bi bi-check-lg" v-if="passwordGreatherThan"></i><i class="bi bi-x" v-if="!passwordGreatherThan"></i></p>
                        <p :class="!passwordHaveAUpperLetter ? 'password--invalid__p' : 'password--valid__p'">* Sua senha deve ter pelo menos uma letra maiuscula <i class="bi bi-check-lg" v-if="passwordHaveAUpperLetter"></i><i class="bi bi-x" v-if="!passwordHaveAUpperLetter"></i></p>
                        <p :class="!passwordHaveNumbers ? 'password--invalid__p' : 'password--valid__p'">* Sua senha deve ter numeros <i class="bi bi-check-lg" v-if="passwordHaveNumbers"></i><i class="bi bi-x" v-if="!passwordHaveNumbers"></i></p>
                        <p :class="!passwordHaveSpecialCharacters ? 'password--invalid__p' : 'password--valid__p'">* Sua senha deve ter caracteres especiais <i class="bi bi-check-lg" v-if="passwordHaveSpecialCharacters"></i><i class="bi bi-x" v-if="!passwordHaveSpecialCharacters"></i></p>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">
                            <i class="bi bi-key"></i>
                        </span>
                        <input type="password" class="form-control" placeholder="Confirme sua senha" aria-label="Username" aria-describedby="basic-addon1" v-model="confirmPassword">
                    </div>
                    <div class="box__p" v-if="this.confirmPassword.toString().trim() != ''">
                        <p :class="!passwordMatch ? 'password--invalid__p' : 'password--valid__p'">* As senhas sao iguais <i class="bi bi-check-lg" v-if="passwordMatch"></i><i class="bi bi-x" v-if="!passwordMatch"></i></p>
                    </div>
                    <div class="input-group mb-3">
                        <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Estado</button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="#">Separated link</a></li>
                        </ul>
                        <input type="text" class="form-control" placeholder="Cidade" aria-label="Username" aria-describedby="basic-addon1" v-model="city">
                    </div>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="CEP" aria-label="Username" aria-describedby="basic-addon1" v-model="cep">
                        <input type="text" class="form-control" placeholder="Endereco" aria-label="Username" aria-describedby="basic-addon1" v-model="address">
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">
                            <i class="bi bi-telephone"></i>
                        </span>
                        <input type="text" class="form-control" placeholder="Numero de telefone" aria-label="Username" aria-describedby="basic-addon1" v-model="phoneNumber">
                    </div>
                    <button type="button" class="btn btn-outline-success" v-on:click="validateForms">Criar Conta</button>
                </div>
            </div>
        </div>
        <br>
        <div>
            <p>Já possui uma conta? <span class="span-link">Faça seu login aqui.</span></p>
        </div>
    </div>
</template>

<script>

export default {
    name: 'RegisterPage',
    data() {
        return {
            name: '',
            cpfOrCnpj: '',
            email: '',
            password: '',
            confirmPassword: '',
            state: '',
            city: '',
            cep: '',
            address: '',
            phoneNumber: '',
            validateName: true,
            validateCpfOrCnpj: true,
            validateEmail: true,
            validatePassword: true,
            validateConfirmPassword: true,
            validateState: true,
            validateCity: true,
            validateCep: true,
            validateAddress: true,
            validatePhoneNumber: true,
            messageInvalidName: '',
            messageInvalidCpfOrCnpj: '',
            messageInvalidEmail: '',
            messageInvalidPassword: '',
        }
    },
    computed: {
        passwordGreatherThan() {
            return this.password.toString().length >= 8 ? true : false
        },
        passwordHaveAUpperLetter() {
            return this.password.toString().toLocaleLowerCase() != this.password.toString() ? true : false
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
            return this.password === this.confirmPassword ? true : false
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
        validateForms() {

            this.validateName = this.name === '' ? false : true
            this.validateCpfOrCnpj = this.cpfOrCnpj === '' ? false : true
            this.validateEmail = this.email === '' ? false : true
            this.validatePassword = this.password === '' ? false : true
            this.validateConfirmPassword = this.confirmPassword === '' ? false : true
            this.validateState = this.state === '' ? false : true
            this.validateCity = this.city === '' ? false : true
            this.validateCep = this.cep === '' ? false : true
            this.validateAddress = this.address === '' ? false : true
            this.validatePhoneNumber = this.phoneNumber === '' ? false : true

            this.messageInvalidName = this.validateName ? '' : '* Insira um nome'
            this.messageInvalidCpfOrCnpj = this.validateCpfOrCnpj ? '' : '* Insira um cpf/cnpj'
            this.messageInvalidEmail = this.validateEmail ? '' : '* Insira um email'
            this.messageInvalidPassword = this.validatePassword ? '' : '* Insira uma senha'

            //||

            if (this.validateCpfOrCnpj.toString().trim().length != 11 && this.validateCpfOrCnpj.toString().trim().length != 14) {
                this.validateCpfOrCnpj = false
                this.messageInvalidCpfOrCnpj = '* Insira um cpf/cnpj valido'
            }

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

        }
    }
}

</script>

<style scoped>

.box__p {
    padding: 0 auto;
    margin-top: 0px;
    margin-bottom: 16px;
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

</style>