<script setup>
  import {ref, onMounted} from 'vue'
  import { RouterLink, RouterView } from 'vue-router'
  import axios from 'axios'
  const data = ref([])
  const description =  ref('')
  const isLoading = ref(false)
  const getDetail = () => {
      isLoading.value = true
      const url = "https://reanweb.com/api/teaching/get-news-detail.php?id=1"
      axios.get(url)
      .then( 
          (rp) => {
              console.log(rp.data)
              data.value = rp.data
              description.value = rp.data
              isLoading.value = false
          }
      )
  }
  onMounted( () => {
    getDetail();
  })
</script>

<template>

    <div class="container">
        <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
            <div class="card mt-2">
                <div class="header">
                    <h3>{{ data.title }}</h3>
                </div>
                <div class="card-body">
                    <div class="col-md-7 m-auto">
                        <div class="body" v-html="data.des"></div>
                    </div>
                </div>
            </div>
            <div class="mt-2"></div>
        </div>
    </div>
</template>
