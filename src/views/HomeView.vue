<script setup>
  import {ref, onMounted} from 'vue'
  import { RouterLink, RouterView } from 'vue-router'
  import axios from 'axios'
  const data = ref([])
  const description =  ref('')
  const isLoading = ref(false)
  const getItemList = () => {
      isLoading.value = true
      const url = "https://reanweb.com/api/teaching/get-news.php? "
      axios.get(url)
      .then( 
          (rp) => {
              console.log(rp.data)
              data.value = rp.data
              description.value = rp.data
              // subDescription();
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
    <!-- <button @click="getDetail">Click</button> -->
    <!-- <div v-for="(item,i) in detail" :key="i">
          <h1> {{ item.id }}</h1> 
          </div> -->
    <div class="row">
      <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
        <!-- Start Get New API -->
        <div class="row">
         
          <div class=" col-md-3 mt-2" v-for="(item,i) in data" :key="i">
            
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
                    <!-- {{item.des.substring(0,150) + '...'}} -->
                    <div v-html="item.des.substring(0,140)+ '...' " >
                      
                    </div>
                  </div>
                  <p class="post_date ">{{ item.post_date }}</p>
                  <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
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
