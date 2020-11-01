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
          <div class='filter_menu_main_cl' v-for="item1 in arr" :key="item1"> {{item1[0]}}
               <div class='filter_menu_main_cf'  v-for="item2 in mass_plus_one(item1)" :key="item2"> {{item2[0]}}
                    <div v-for="item3 in mass_plus_one(item2)" :key="item3">
                        <div class='filter_menu_main_cn' v-for="item4 in item3" :key="item4"> {{item4}}
                        </div>
                    </div>
                </div>
          </div>
    </form>
  </div>

</div>

</template>



<script>

export default {
  name: 'Filter_html',
  methods: {

                restruct_mass(el) {
                    let mass = [];
                    //let vloj = -2;

                    function create_mass(el) {
                        for(let i in el){
                            if (el[i].length == 1) {
                                mass.push(el);

                                break;
                            }
                            else{
                                let b = el[i];
                                //vloj++;
                                create_mass(b);
                            }
                            //vloj--;
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
        arr: [
            ['Жижа',[['Cолевые',['Да','Нет']],'Вкус',['Банан','Малина','Клубника']],['Бренд',['#1','#2','#3']],['Объем',['200мл','400мл','600мл']],['Крепость',['2мг','4мг','6мг']],['Страна',['Россия','США','Китай']]],
            ['Железо',['наименов',['веер','киир','лур']],['Бренд',['#1','#2','#3']],['Объем',['200л','400л','600л']],['Цена',['2000','4000','6000']],['Страна',['Россия','США','Китай']]],
            ['Поды',['Одноразовые',['Да','Нет']],['Бренд',['#1','#2','#3']],['Объем',['200л','400л','600л']],['Цена',['2000','4000','6000']],['Страна',['Россия','США','Китай']]],
            ['Испарители/картриджи',['Бренд',['#1','#2','#3']],['Объем',['200л','400л','600л']],['Цена',['2000','4000','6000']],['Страна',['Россия','США','Китай']]],
            ['Табак',['Бренд',['#1','#2','#3']],['Объем',['200л','400л','600л']],['Цена',['2000','4000','6000']],['Страна',['Россия','США','Китай']]],
            ['Кальяны',['Бренд',['#1','#2','#3']],['Объем',['200л','400л','600л']],['Цена',['2000','4000','6000']],['Страна',['Россия','США','Китай']]],
        ],
    }
  },
  components: {
  }
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
	background: white;
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

    #filter_menu_main_render{


    }

    .filter_menu_main_cl{
        position: relative;
        cursor: pointer;
        left: 40px;

        font: 30pt logo-Regular;

    }

    .filter_menu_main_cl::before{
        content:'\25B2';
        font-size: 10pt;
        position:absolute;
        top: 15px;
        left: -15px;
    }

    .filter_menu_main_cf{
        max-height: 0px;
        overflow: hidden;
        transition: .28s ease-in-out;
    }

    .filter_menu_main_cn{
        max-height: 0px;
        overflow: hidden;
        transition: .18s ease-in-out;
    }

    .open_cl::before{
        content:'\25BC';
    }

    .open_cf {
        max-height: 100px;
    }

    .open_cn {
        max-height: 100px;
    }

</style>
