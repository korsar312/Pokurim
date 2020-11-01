<template>
    <main id='main'>
          <invent v-for='product in PRODUCTS'
          :key='product.article'
          :invent_data='product'
          @send-artic='showCh'/>
    </main>
</template>

<script>
import Invent from './Main_html/Invent.vue'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'Main_html',

  components: {
      Invent,
  },

  methods: {
      test(){alert('test')},

      showCh(artic){
          console.log(artic)
      },

      ...mapActions([        //для this
          'GET_PRODUCTS_API'
      ]),
  },

  computed: {
      ...mapGetters([       //чтоб не писать this.$store.state.product
          'PRODUCTS'
      ])
  },

  mounted(){
      this.GET_PRODUCTS_API()
  },
  data(){
      return{

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
