<template>
    <div id='Showing'>Showing 1–9 of 48 results
    </div>

    <main id='main'>
          <invent v-for='product in PRODUCTS'
          :key='product.article'
          :invent_data='product'/>
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
#Showing{
    margin: 20px 0px 20px 290px;
}

main {
	margin-left: 270px;
	display: flex;
	flex-wrap: wrap;
}

</style>
