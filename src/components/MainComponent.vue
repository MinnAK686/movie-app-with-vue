<template>
  <main id="popular">
    <div class="text-center px-4">
        <h1>All The TV You Love</h1>
        <p>Stream full seasons of exclusive series, current-season episodes, hit movies, Hulu Originals, kids shows, and more.</p>
    </div>
    <div class="container">
        <div class="row justify-content-center justify-content-sm-start">
            <div class="col-10 col-sm-6 col-md-4 col-lg-3">
                <div class="cards">
                    <div class="cards-img">
                        <img src="../assets/img/posters/the-witch-part-one.jpeg" alt="">
                    </div>
                    <div class="cards-info">
                        <p>Movie Name</p>
                        <p>5.0</p>
                    </div>
                    <div class="cards-overview">
                        <h5>Movie Name</h5>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus obcaecati fuga dolorem atque aliquam quaerat doloribus aliquid explicabo nobis cupiditate eligendi a quibusdam ipsa cum eius, consectetur dolor provident beatae.</p>
                        
                        <p>Released Date: 27 December 2018</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </main>
</template>

<script>
export default {
    methods: {
        async fetchMovies(path) {
            let response = await fetch(path);
            let datas = await response.json();
            return datas;
        },
        showMovie(datas) {
            let data = datas.resluts;
            data.forEach(movie => {
                console.log(movie.title)
            });
        }
    }
}
</script>

<style>

</style>