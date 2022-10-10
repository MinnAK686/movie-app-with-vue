<template>
    <nav class="navbar navbar-expand-md fixed-top" id="header">
        <div class="container">
            <a href="/" class="navbar-brand">Movies</a>
            <button @click="cross" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
                <div></div>
                <div></div>
                <div></div>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="menu">
                <ul class="navbar-nav align-items-center">
                    <li class="nav-item">
                        <a href="/" class="nav-link">Home</a>
                    </li>
                    <li class="nav-item">
                        <a href="#popular" class="nav-link">Popular</a>
                    </li>
                    <li class="nav-item">
                        <a href="#movies" class="nav-link">Movies</a>
                    </li>
                    <li class="nav-item">
                        <a href="#about" class="nav-link">About</a>
                    </li>
                    <li class="nav-item">
                        <a href="#privacy" class="nav-link">Privacy</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    methods: {
        cross() {
            document.querySelector(".navbar-toggler").classList.toggle("cross");
        },
        // navbarBG() {
        //     // document.querySelector(".navbar").classList.toggle("navbar-bg");
        // }
    }
}
</script>

<style>

</style>