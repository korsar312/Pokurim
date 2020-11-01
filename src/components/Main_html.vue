<template>
    <main id='main'>
          <invent v-for='product in products' :key='product.article' v-bind:invent_data='product'/>
    </main>
</template>

<script>
import Invent from './Main_html/Invent.vue'

export default {
  name: 'Main_html',
  components: {
      Invent,
  },
  data(){
      return{

          products: [
                {
                  image: '1.jpg',
                  name: 'T-shirt 1',
                  price: 2100,
                  article: 'T1',
                  available: true,
                  category: 'Мужские'
                },
                {
                  image: '2.jpg',
                  name: 'T-shirt 2',
                  price: 3150,
                  article: 'T2',
                  available: true,
                  category: 'Женские'
                },
                {
                  image: '3.jpg',
                  name: 'T-shirt 3',
                  price: 4200,
                  article: 'T3',
                  available: false,
                  category: 'Женские'
                },
                {
                  image: '4.jpg',
                  name: 'T-shirt 4',
                  price: 5300,
                  article: 'T4',
                  available: true,
                  category: 'Мужские'
                },
              ]



      }
  }
}
</script>


<style>

main {
	margin-left: 250px;
	display: flex;
	flex-wrap: wrap;
}

</style>
