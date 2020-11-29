<template>
 <div>
<h1 class="1sd">Моя корзина</h1>
<!-- <Cart /> -->
<h1>Список товаров:</h1>

<item  v-for="index in items" :key="index.name"
:name="index.name"
:price="index.price" />


</div>
</template>

<script>

import item from "./item.vue"

export default {
    components:{
        item,
    },
data(){

return {
    items:[
        {name:"Чай", price:10},
        {name:"Кофе", price:12},
        {name:"Сок", price:15},
    ]
}
}

  
}
</script>

<style>
.sd{
    color: aquamarine;
}

</style>