<script setup>
import { ref , onMounted} from "vue";
import { RouterLink , RouterView} from "vue-router";
import axios from "axios";
const data = ref([])
const isLoading = ref(false)
const getItemList = () => {
    isLoading.value = true
    const url = "https://reanweb.com/api/teaching/get-news.php?mid=9"
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
                <div class="row">
                    <div class="col-md-3 mt-2" v-for="(item, i) in data" :key="i">
                        <router-link to="">
                            <div class="card">
                                <div class="card-header">
                                    <h6>{{item.title}} <b></b></h6>
                                </div>
                                <div class="card-body">
                                    <div class="img_box">
                                        <img :src="item.img" alt="">
                                    </div>
                                    <div class="card-title">
                                        <div class="" v-html="item.des.substring(0,140)+ '...' "></div>
                                    </div>
                                    <p class="post_date">{{item.post_date}}</p>
                                </div>
                            </div>
                        </router-link>
                    </div>
                    <span class="mt-2"></span>
                </div>
            </div>
        </div>
    </div>
</template>