<template>

    <div class="container" :class="{ containerGallery: containerGalleryOpen }">


        <div class="left side">
            <div class='closeGallery' @click="containerGalleryOpen = !containerGalleryOpen" >
            </div>

            <div className='square_img_left' v-for='img in num_img' :key='img'>
                <agile :speed='600' :swipeDistance='0' :fade='true' :changeDelay='100'>
                    <div class="slide">
                        <img :src= "require( '../../inv/' + invent_data.name + '/' + 'img' + 1 + '.jpg')">
                    </div>
                    <div class="slide">
                        <img :src= "require( '../../inv/' + invent_data.name + '/' + 'img' + 2 + '.jpg')">
                    </div>
                    <div class="slide">
                        <img :src= "require( '../../inv/' + invent_data.name + '/' + 'img' + 3 + '.jpg')">
                    </div>
                </agile>

            </div>

        </div>

        <div class="front side">

            <div className='square'>
              <div className='back'>
              </div>

              <div className='button_img add_cart' @click="addToMassBasket">ADD TO CART
              </div>
              <div className='button_img view_gallery' @click="containerGalleryOpen = !containerGalleryOpen" :style="{ transform: computedWidth }">VIEW GALLERY
              </div>

              <div className='square_img'>
                  <img :src= "require( '../../inv/' + invent_data.name + '/' + 'img' + 1 + '.jpg')" >
              </div>
              <div className='square_desctiption_and_buy'>
                <div className='square_desctiption'>
                  <div className='square_name'>{{invent_data.name}}
                  </div>
                  <div className='square_desctiptionText'>
                  </div>
                </div>
                <div className='square_buy'>{{invent_data.price+'р'}}
                </div>
            </div>
            </div>

        </div>

    </div>

</template>


<script>
import { mapMutations } from 'vuex';

export default {
  name: 'Invent',
  computed: {

  },
  components: {
  },
  props: {
      'invent_data': {      //название передал родитель
          type: Object,     //правило хорошего тона
          default(){        //изначально он пустой должен быть
              return{}
          }
      }
  },
  data(){
      return{
          containerGalleryOpen: false,
          num_img: [1,2,3],
      }
  },
  methods:{
      addToMassBasket(){
          if(!this.$store.state.basketItem.includes(this.invent_data, 0)){
              this.addToCart(this.invent_data)
          }

      },
    ...mapMutations([
        'addToCart',
    ]),

    changeWidth() {
        return 'rotate(90deg)'
    },

      sendToPerrent(){   //1.вызываем где-то этот метод
          this.$emit('send-artic', this.invent_data.article) //2.прописываем переменную получения(стиль: кебаб-кейс) и что отправляем из ребенка
      }    //3.прописываем в родителе метод что делать с инфой(showCh()) и откуда получать(@send-artic) (@send-artic='showCh'/>)
  }
}

</script>


<style>
.agile__nav-button {
    position:absolute;
    width:30px;
    height:30px;
    top: 200px;
}
.agile__nav-button--prev{
    left: 5px;
}
.agile__nav-button--next{
    left: 265px;
}

.slide{
    width:300px;
    height:450px;
}
.splide_prev{
    position:absolute;
}
.splide_next{
    position:absolute;
    left: 260px;
}

.side, .container {
    width:300px;
    height:450px;
  }
.container {
  margin: 5px 15px 30px 15px;
  transform-style: preserve-3d;
  transition: .40s ease-in-out;
  }
  .containerGallery{
      transform: rotateY(180deg);
  }

.side {
  position: absolute;
  width:300px;
  height:450px;
  }

.left {
  transform:  rotateY(180deg);
  display: flex;
  }
.left, .front{
    box-shadow: 0 0 3px rgba(0,0,0,0.3);
    overflow: hidden;
    transition: .20s ease-in-out;
    border-radius: 10px;
    background-color: #ffffff;
}
.left:hover, .front:hover, .right:hover{
    box-shadow: 0 0 15px rgba(0,0,0,0.3);
}
.front {
  transform: translateZ(10px);
  }

.butt{
    font-size: 17px;
    color: #fff;
    font-weight: 700;
    background-color: #ffffff;
    text-align: center;
    padding-top: 12px;
    position:absolute;
    top: 200px;
    width:50px;
    height:50px;
    transition: .20s ease-in-out;
    border: 2px solid white;
    z-index: 3px;
    opacity: .5;
}

.closeGallery{
    position:absolute;
    cursor: pointer;
    top: 5px;
    left: 5px;
    width:20px;
    height:20px;
    background: url(../../main_img/close.svg) center ;
    background-size: contain;
    z-index:1;
}






.square {
    position: relative;
    transition: .20s ease-in-out;
    width:300px;
    height:450px;
}

    .button_img{
        font-size: 17px;
        color: #fff;
        font-weight: 700;
        background-color: rgba(4,4,4,0.2);
        cursor: pointer;
        text-align: center;
        padding-top: 12px;
        position:absolute;
        left: 80px;
        width:140px;
        height:30px;
        opacity: 0;
        transition: .20s ease-in-out;
        border: 2px solid white;
        z-index: 3px;
    }
    .view_gallery{
        top: 75px;
    }
    .add_cart{
        top: 135px;
    }

    .square_img{
        height: 370px;
        width:300px;
        transition: .20s ease-in-out;
        overflow: hidden;
    }

    .square_desctiption_and_buy{
        display: flex;
        z-index: 2;
    }

        .square_desctiption{
            width: 200px;
            height: 80px;
        }

            .square_name{
                font-size: 18px;
                color: #393c45;
                font-weight: 700;
                text-decoration:underline;
                margin: 20px 20px 8px 30px;
            }

            .square_desctiptionText{
                margin: 0px 20px 8px 30px;
                font-size: 10pt;
                line-height: 13px;
            }

        .square_buy{
            font-size: 22px;
            color: #5ff7d2;;
            font-weight: 600;

            padding: 25px 0;
            text-align: center;
        }

    .square:hover .square_img{
        height: 250px;
    }

    .back{
        display:block;
        content: '';
        position:absolute;
        width:400px;
        height:350px;
        opacity:0;
        transition: .20s ease-in-out;
    }

    .square:hover .back{
        background-color: #5ff7d2;
        opacity:0.6;
        height:250px;
    }
    .square:hover .button_img{
        opacity: 1;
    }


</style>
