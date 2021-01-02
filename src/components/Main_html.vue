<template>
      <div id='Showing'>Showing 1–{{$store.state.products_temp_str}} of {{$store.state.products_temp.length}} results
      </div>

      <div v-show="$store.state.main_show">
            <main id='main'>
                  <invent v-for='product in $store.state.products_temp_arr'
                  :key='product.article'
                  :invent_data='product'/>
            </main>

            <div id='loadMore' v-show="$store.state.but_show_str" @click='$store.commit(`products_temp_str_up`)'>
                  <div id='loadMoreBut'>Загрузить ещё...
                  </div>
            </div>
      </div>
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
            handleScroll (e) {
                  this.scroll=e.target.scrollTop
            },

            ...mapActions([        //для this
                  'GET_PRODUCTS_API',
                  'refresh_DOM_List'
                  ]),
            },

            computed: {
                  ...mapGetters([       //чтоб не писать this.$store.state.product
                        'PRODUCTS'
            ]),
      },

      mounted(){
            this.GET_PRODUCTS_API()
      },

      data(){
            return{

            }
      },
}

</script>


<style>
#main{
  position:relative;
}

#Showing{
    margin: 20px 0px 20px 290px;
}

#loadMore{
    position:absolute;
    margin-left: 20px;
    height: 40px;
    width: 200px;
    border-bottom: 1px dotted gray;
    background: rgb(255, 235, 205);
    cursor: pointer;
    border-radius: 10px;
    text-align: center;
    left: 50%;
}
#loadMoreBut{
    margin-top: 10px;
}

#main {
	margin-left: 270px;
	display: flex;
	flex-wrap: wrap;
}

</style>
