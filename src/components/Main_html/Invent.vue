<template>
    <div className='square'>
      <div className='square_img' >
          <img :src= "require( '../../inv/' + invent_data.name + '/' + 'img.jpg')" >
      </div>
      <div className='square_price'>{{invent_data.price+'р'}}
      </div>
      <div className='square_desctiption_and_buy'>
        <div className='square_desctiption'>
          <div className='square_name'>{{invent_data.name}}
          </div>
          <div className='square_desctiptionText'>assassss sssssasdas
          </div>
        </div>
        <div className='square_buy'>12
        </div>
    </div>каретка тут будет
    <div>
    </div>
    <button @click='sendToPerrent'>Купить
    </button>
    <div>
      </div>
    </div>
</template>



<script>
export default {
  name: 'Invent',
  props: {
      'invent_data': {      //название передал родитель
          type: Object,     //правило хорошего тона
          default(){        //изначально он пустой должен быть
              return{}
          }
      }
  },
  components: {

  },
  methods:{
      sendToPerrent(){   //1.вызываем где-то этот метод
          this.$emit('send-artic', this.invent_data.article) //2.прописываем переменную получения(стиль: кебаб-кейс) и что отправляем из ребенка
      }    //3.прописываем в родителе метод что делать с инфой(showCh()) и откуда получать(@send-artic) (@send-artic='showCh'/>)
  }
}
</script>


<style>
.square {
    height: 300px;
    width:250px;
    border: 1px dotted gray;
    position: relative;
    border: 3px ridge gray;
    margin: 5px;
    overflow: hidden;
}

    .square_img{
        height: 250px;
        width:250px;
        transition: .40s ease-in-out;
        border-bottom: 1px solid gray;
        overflow: hidden;
    }

    .square_price{
        position: absolute;
        top: -1px;
        right: -1px;
        border: 1px solid gray;
        width: 70px;
        font-size: 15pt;
        text-align: center;
        background: yellow;
        transition: .40s ease-in-out;
    }

    .square_desctiption_and_buy{
        display: flex;

    }

        .square_desctiption{
            width: 200px;
            height: 50px;
        }

            .square_name{
                padding: 2px 0 0 2px;
                font-size: 13pt;
                text-decoration:underline;
            }

            .square_desctiptionText{
                margin-top: -2px;
                padding: 0 5px 0 10px;
                font-size: 10pt;
                line-height: 13px;
            }

        .square_buy{
            border-left: 1px solid gray;
            border-bottom: 1px solid gray;
            width: 50px;
            padding: 15px 0;
            text-align: center;
        }

    .square:hover .square_img{
        height: 0px;
    }

    .square:hover .square_price{
        opacity: 0;
        visibility: hidden;
    }
</style>
