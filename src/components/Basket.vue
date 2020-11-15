<template>
    <div v-if="show" class="modal-shadow" @click.self="closeModal">
        <div class="modal">
            <div class="modal-close" @click="closeModal">&#10006;</div>
                <slot name="title">
                    <h3 class="modal-title">Корзина</h3>
                </slot>
            <slot name="body">

                <div class="modal-content" v-for='prod in BASKETITEM' :key='prod'>

                    <div class="basket_img_box">
                        <img class="basket_img" :src="require( '../inv/' + prod.name + '/' + 'img' + 1 + '.jpg')">
                    </div>
                    <div class="basket_name_box">
                        <h3>{{prod.name}}</h3>
                    </div>
                    <div class="basket_price_box">
                        {{prod.price}}р.
                    </div>
                    <div class="basket_amount_box">
                        <div class="basket_amount_min" @click="prod.amound-1 ? prod.amound-- : prod.amound ">-</div>
                        <div class="basket_amount">{{prod.amound}}</div>
                        <div class="basket_amount_max" @click="prod.amound++">+</div>
                    </div>
                    <div class="basket_priceSum_box">
                        {{prod.price*prod.amound}}р.
                    </div>
                    <div class="basket_close_box" @click='deleteFromBasket(prod.article)'>
                        Удалить
                    </div>

                </div>

            </slot>
            <slot name="footer">
                <div class="modal-footer">

                    <button class="modal-footer__button">
                        Оформить заказ
                    </button>

                </div>
            </slot>
        </div>
    </div>
</template>

<script>
import {mapGetters,mapMutations} from 'vuex'

    export default {
        name: "ModalWindow",
        computed: {
            ...mapGetters([       //чтоб не писать this.$store.state.product
                'BASKETITEM'
            ]),
            ...mapMutations([

            ])
        },
        data: function () {
            return {
                show: false,
            }
        },
        methods: {
            closeModal: function () {
                this.show = false
            },
            deleteFromBasket(el){
            for  (let i of this.$store.state.basketItem){
                if (i.article === el){
                    this.$store.state.basketItem.splice(i, 1)
                    break;
                }
            }
        }
    }
}
</script>

<style scoped
       lang="scss">

       .basket_close_box{
           position: absolute;
           top:0px;
           right:20px;
           font-size: 25px;
           border: solid 1px;
       }
       .basket_priceSum_box{
           position: absolute;
           top:120px;
           right:20px;
           font-size: 25px;
       }
       .basket_price_box{
           position: absolute;
           top:120px;
           left:290px;
           font-size: 25px;
       }
       .basket_amount_box{
           position: absolute;
           display: flex;
           top:120px;
           left:170px;
           height:25px;
           border: solid 2px;
           text-align: center;
       }
            .basket_amount_max{
                width:25px;
                border: solid 1px;
                padding: 3px 0 0 0;
            }
            .basket_amount_min{
                width:25px;
                border: solid 1px;
                padding: 1px 0 0 0;
            }
            .basket_amount{
                width:35px;
                border: solid 1px;
                padding: 3px 0 0 0;
            }

      .basket_name_box{
          position: absolute;
          top:0px;
          left:170px;
      }
          .basket_name_box h3{
              font-size: 14pt;
              margin: 0;
          }

      .basket_img_box{
          position: relative;
          overflow:hidden;
          width:150px;
          height:150px;
      }
          .basket_img{
              position: absolute;
              top:50%;
              left:50%;
              transform: translate(-50%,-50%);
              width:180px;
              height:270px;
          }





    .modal-shadow {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, 0.39);
        z-index: 2  ;
    }

    .modal {
        background: #fff;
        border-radius: 8px;
        padding: 15px;
        min-width: 820px;
        max-width: 1480px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        &-close {
            border-radius: 50%;
            color: #fff;
            background: #2a4cc7;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: 7px;
            right: 7px;
            width: 30px;
            height: 30px;
            cursor: pointer;
        }

        &-title {
            color: #0971c7;
        }

        &-content {
            margin-bottom: 20px;
            position: relative;
        }

        &-footer {
            &__button {
                background-color: #0971c7;
                color: #fff;
                border: none;
                text-align: center;
                padding: 8px;
                font-size: 17px;
                font-weight: 500;
                border-radius: 8px;
                min-width: 150px;
            }
        }
    }
</style>
