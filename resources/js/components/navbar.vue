<template>

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <a class="navbar-brand" href="#">Brand</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <!--                <li class="nav-item active">-->
                <!--                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>-->
                <!--                </li>-->
                <li class="nav-item" v-for="link in links">
                    <router-link class="nav-link" :to="link.href">{{ link.title }}</router-link>
                </li>
            </ul>
        </div>
    </nav>

</template>

<script>
export default {
    data() {
        return {
            links: [{
                title: 'Home',
                href: '/'
            },
                {
                    title: 'Blog',
                    href: '/blog'
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>
