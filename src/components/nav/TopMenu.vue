<script setup>
    import {ref, onMounted} from 'vue'
    import { RouterLink, RouterView } from 'vue-router'
    import axios from 'axios'
    // import { menuItem } from '../store';
    const data = ref([])
    const isLoading = ref(false)
    // const menu = menuItem.menuList
    const getMenu = () => {
        isLoading.value = true
        const url = "https://reanweb.com/api/teaching/get-menu.php"
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
                                <!-- {{ menu.id }} -->
                                <!-- <RouterLink :to="{name:' ', params:{pid:i}}"> {{ menu.name }}</RouterLink> -->
                                <!-- <RouterLink :to="'/'+menu.id"> {{ menu.name }} {{  }}</RouterLink> -->
                                <RouterLink :to="{name : menu.id}"> {{ menu.name }} </RouterLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>