<script setup>
    import {ref, onMounted, watchEffect} from 'vue'
    import axios  from 'axios';
    import { useRoute } from 'vue-router';
    const route = useRoute()
    const newsData = ref([])
    const getNews = () => {
        let url = `https://reanweb.com/api/teaching/get-news.php?mid=${route.params.mid}`
        axios.get(url)
            .then(
                (rp) => {
                    newsData.value = rp.data
                   console.log(rp.data)
                }
            )
    }
    watchEffect ( () => {
    getNews()
})
</script>
<template>
    <div class="container">
        <div class="row">
      <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
        <!-- Start Get New API -->
        <div class="row">
          <div class=" col-md-3 mt-2" v-for="(item,i) in newsData" :key="i">
            <RouterLink to="">
              <div class="card">
                <div class="card-header">
                    <h6 class="">{{item.title}}</h6>
                </div>
                <div class="card-body">
                  <div class="img_box">
                    <img :src="item.img" alt="">
                  </div>
                  <div class="card-title"  >
                    <div v-html="item.des.substring(0,140)+ '...' " ></div>
                  </div>
                  <p class="post_date ">{{ item.post_date }}</p>
                </div>
              </div>
            </RouterLink>
          </div>
          <span class="mt-2"></span>
        </div>
        <!-- End Get News API -->
      </div>
    </div>
    </div>
</template>