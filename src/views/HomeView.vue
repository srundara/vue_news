<script setup>
  import {ref, onMounted} from 'vue'
  import { RouterLink, RouterView } from 'vue-router'
  import axios from 'axios'
  // import { menuItem } from '../store';
  const data = ref([])
  const isLoading = ref(false)
  // const menu = menuItem.menuList
  const getItemList = () => {
      isLoading.value = true
      const url = "https://reanweb.com/api/teaching/get-news.php?"
      axios.get(url)
      .then( 
          (rp) => {
              console.log(rp.data)
              data.value = rp.data
              isLoading.value = false
          }
      )
  }
  onMounted( () => {
    getItemList();
  })
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
        <!-- Start Get New API -->
        <div class="row">
          <div class=" col-md-3 mt-2" v-for="(item,i) in data" :key="i">
            <div class="card">
                <div class="card-header">
                    <h6 class="">{{item.title}}</h6>
                </div>
                <div class="card-body">
                  <div class="img_box">
                    <img :src="item.img" alt="">
                  </div>
                  <h5 class="card-title"></h5>
                  {{item.des}}
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
          </div>
        </div>
        <!-- End Get News API -->

      </div>
    </div>
  </div>
</template>
