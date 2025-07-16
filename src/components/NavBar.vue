<template>
    <nav class="navbar navbar-dark bg-dark justify-content-between">
        <a class="navbar-brand" href="#">Ecommerce</a>
        <div class="flex flex--row content--center">
            <a class="nav-link" :onclick="() => navigateToOtherPage('/products')">Produtos</a>
            <a class="nav-link" :onclick="() => navigateToOtherPage('/cart')">Carrinho</a>
            <a class="nav-link" :onclick="() => navigateToOtherPage('/shops')">Lojas</a>
            <a class="nav-link" :onclick="() => navigateToOtherPage('/contact')">Contato</a>
            <i class="nav-link bi bi-person-circle" :onclick="() => navigateToOtherPage('/profile')"></i>
        </div>
    </nav>
</template>

<script>

export default {
    name: 'NavBar',
    methods: {
        navigateToOtherPage(route) {
            this.$router.replace(route)
        }
    }
}

</script>

<style scoped>

.flex {
    display: flex;
}

.flex--row {
    flex-direction: row;
}

.content--center {
    align-items: center;
}

.cl--white {
    color: white;
}

.nav-link {
    color: white;
    margin-right: 16px;
    transition: 0.3s;
}

.nav-link:hover {
    cursor: pointer;
    color: rgb(226, 226, 226);
}

.bi-person-circle {
    font-size: 24px;
}

</style>