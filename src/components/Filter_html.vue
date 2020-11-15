<template>
<div id='filter_menu'>
  <div id='filter_menu_logo'>
    <a href='index.html'></a>
  </div>

  <div id='filter_menu_name'>
    <h1>
      Фильтр
    </h1>
  </div>

  <div id='filter_menu_main'>
    <form id='filter_menu_main_render'>

          <div class='filter_menu_main_cl' :class="{ open_cl: productV1.status }" v-for='productV1 in FILT' :key='productV1.id'><p class='filter_menu_main_cl' @click='productV1.status = !productV1.status'>{{productV1.status ? "\u21d3":"\u21d1"}} {{productV1.name}}</p>
              <div class='filter_menu_main_co' :class="{ open_co: productV2.status }" v-for='productV2 in productV1.child' :key='productV2.id'><p class='filter_menu_main_co' @click='productV2.status = !productV2.status'>{{productV2.status ? "\u21d3":"\u21d1"}} {{productV2.name}}</p>
                  <div class='filter_menu_main_cm' @click='productV3.status = !productV3.status' :class="{ open_cm: productV3.status }" v-for='productV3 in productV2.child' :key='productV3.id'>{{productV3.name}}
                  </div>
              </div>
          </div>

    </form>
  </div>

</div>

</template>



<script>
import {mapGetters} from 'vuex'

export default {
    name: 'Filter_html',
    computed: { ...mapGetters(['FILT']) },
    methods: {
        heightUp(){
            this.isOpen = !this.isOpen
            return this.isOpen
        },


        restruct_mass(el) {
            let mass = [];
            function create_mass(el) {
                for(let i in el){
                    if (el[i].length == 1) {
                        mass.push(el);
                        break;
                    }
                    else{
                        let b = el[i];
                        create_mass(b);
                    }
                }
            }
            create_mass(el) ;
            return mass;
        },


        mass_plus_one(el){
            let i = 1
            let mass = []
            for(i; i<el.length; i++){
                mass.push(el[i]);
            }
            return mass
        },


    },

    data(){
        return{
        }
    },

    components: {}
    }
</script>


<style>
@import "../style/variables.scss";

#filter_menu {
	position: fixed;
	height: 100%;
	width: 250px;
	border-right: 1px dotted gray;
	overflow: auto;
	z-index: 2;
}

	#filter_menu_name {
		font:  20pt logo-Regular;
		color: rgba(100,100,100,1);
		margin-left:65px;
	}


	#filter_menu_main_vkus:checked #its_open_vkus {
		height: 10px;
	}

	#filter_menu_logo{
		height: 100px;
		margin:5px 10px;
		background: url(../main_img/logo_b_o.png) no-repeat;
		background-size: contain;
	}


    .filter_menu_main_cl{
        cursor: pointer;
        margin: 0px 0px 0px 10px;
        font: 30pt logo-Regular;
        overflow: hidden;
        max-height: 45px;
        transition: .28s ease-in-out;
    }

    .filter_menu_main_co{
        margin: 0px 0px 0px 10px;
        font: 25pt logo-Regular;
        overflow: hidden;
        max-height: 45px;
        transition: .28s ease-in-out;
    }

    .filter_menu_main_cm{
        margin-left: 40px;
        font: 20pt logo-Regular;
    }

    .open_cl{
        max-height: 800px;
    }
    .open_co{
        max-height: 220px;
    }

</style>
