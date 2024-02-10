<script setup>
    import {ref, onMounted, watchEffect} from 'vue'
    import { RouterLink, RouterView } from 'vue-router'
    import axios from 'axios'
    // import { menuItem } from '../store';
    const data = ref([])
    const props = defineProps(['menuId'])
    const menu = ref()
    const isLoading = ref(false)
    watchEffect( () => {
        console.log(props.menuId)
        menu.value = props.menuId
        
    })
    // const menu = menuItem.menuList
    const getMenu = () => {
        menu.value = props.menuId
        isLoading.value = true
        const url = "https://reanweb.com/api/teaching/get-menu.php"
        axios.get(url)
        .then( 
            (rp) => {
                // console.log(menu.value)
                data.value = rp.data
                
                isLoading.value = false
            }
        )
    }
    onMounted( () => {
        getMenu();
    })
</script>
<template>
    <div class="container-fluid">
        <div class="container">
            <div class="row">
                <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                    <div class="menu">
                        <ul >
                            <li>
                                <RouterLink to="/"><i class="fa-solid fa-house"></i></RouterLink>
                            </li>
                            <li v-for="(menu,i) in data" :key="i">
                                <RouterLink :to="{name:'menu', params:{menuId:menu.id}}"> {{ menu.name }} </RouterLink>
                            </li>
                        </ul>
                    </div>
                    <!-- <div class="row">
                        <div class="col-md-3 mt-2" v-for="(item, i) in data" :key="i">
                            <RouterLink :to="{name:'3'}">
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
                            </RouterLink>
                        </div>
                        <span class="mt-2"></span>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>