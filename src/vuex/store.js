import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({

    state () {          //хранятся переменные, массивы и тд
        return {
            basketItem: [], //в нем товары в корзине
            products: [],   //массив, который нужно заполнить из серва
            products_temp: [], //в нем товары что сортируются из products
            products_temp_arr: [],//в нем товары что отображаются по несколько штук из products_temp (конечная)

            products_temp_pred: 0,    //для "загрузить еще"
            products_temp_str: 0,     //для "загрузить еще"

            but_show_str: true,       //показать кнопку загрузить еще
            main_show: true,          //показать главный экран или нет

            filt: [
                {
                  image: "ссылка на картинку",
                  name: "Жижа",
                  id: "A_Zhizha",
                  status: false,
                  parrent: null,
                  child: [
                      {
                        image: "ссылка на картинку",
                        name: "Cолевые",
                        id: "A_Colevye",
                        status: false,
                        parrent: "A_Zhizha",
                        child: [
                            {
                              image: "ссылка на картинку",
                              name: "Да",
                              id: "A_Da",
                              status: false,
                              parrent: "A_Colevye",
                              child: null
                            },
                            {
                              image: "ссылка на картинку",
                              name: "Нет",
                              id: "A_Net",
                              status: false,
                              parrent: "A_Colevye",
                              child: null
                            },
                        ]
                      },
                      {
                        image: "ссылка на картинку",
                        name: "Вкус",
                        id: "A_Vkus",
                        status: false,
                        parrent: "A_Zhizha",
                        child: [
                            {
                                image: "ссылка на картинку",
                                name: "Банан",
                                id: "A_Banan",
                                status: false,
                                parrent: "A_Vkus",
                                child: null
                            },
                            {
                                image: "ссылка на картинку",
                                name: "Малина",
                                id: "A_Malina",
                                status: false,
                                parrent: "A_Vkus",
                                child: null
                            },
                            {
                                image: "ссылка на картинку",
                                name: "Клубника",
                                id: "A_Klubnika",
                                status: false,
                                parrent: "A_Vkus",
                                child: null
                            },
                        ]
                      },
                      {
                        image: "ссылка на картинку",
                        name: "Бренд",
                        id: "A_Brend",
                        status: false,
                        parrent: "A_Zhizha",
                        child: [
                            {
                              image: "ссылка на картинку",
                              name: "№1",
                              id: "A_Brend№1",
                              status: false,
                              parrent: "A_Brend",
                              child: null
                            },
                            {
                              image: "ссылка на картинку",
                              name: "№2",
                              id: "A_Brend№2",
                              status: false,
                              parrent: "A_Brend",
                              child: null
                            },
                            {
                              image: "ссылка на картинку",
                              name: "№3",
                              id: "A_Brend№3",
                              status: false,
                              parrent: "A_Brend",
                              child: null
                            },
                        ]
                      },
                      {
                        image: "ссылка на картинку",
                        name: "Объем",
                        id: "A_Obem",
                        status: false,
                        parrent: "A_Zhizha",
                        child: [
                            {
                              image: "ссылка на картинку",
                              name: "200мл",
                              id: "A_200ml",
                              status: false,
                              parrent: "A_Obem",
                              child: null
                            },
                            {
                              image: "ссылка на картинку",
                              name: "400мл",
                              id: "A_400ml",
                              status: false,
                              parrent: "A_Obem",
                              child: null
                            },
                            {
                              image: "ссылка на картинку",
                              name: "600мл",
                              id: "A_600ml",
                              status: false,
                              parrent: "A_Obem",
                              child: null
                            },
                        ]
                      },
                      {
                        image: "ссылка на картинку",
                        name: "Крепость",
                        id: "A_Krepost",
                        status: false,
                        parrent: "A_Zhizha",
                        child: [
                            {
                              image: "ссылка на картинку",
                              name: "2мг",
                              id: "A_2mg",
                              status: false,
                              parrent: "A_Krepost",
                              child: null
                            },
                            {
                              image: "ссылка на картинку",
                              name: "4мг",
                              id: "A_4mg",
                              status: false,
                              parrent: "A_Krepost",
                              child: null
                            },
                            {
                              image: "ссылка на картинку",
                              name: "6мг",
                              id: "A_6mg",
                              status: false,
                              parrent: "A_Krepost",
                              child: null
                            },
                        ]
                      },
                      {
                        image: "ссылка на картинку",
                        name: "Страна",
                        id: "A_Strana",
                        status: false,
                        parrent: "A_Zhizha",
                        child: [
                            {
                              image: "ссылка на картинку",
                              name: "Россия",
                              id: "A_Rossiya",
                              status: false,
                              parrent: "A_Strana",
                              child: null
                            },
                            {
                              image: "ссылка на картинку",
                              name: "США",
                              id: "A_SSHA",
                              status: false,
                              parrent: "A_Strana",
                              child: null
                            },
                            {
                              image: "ссылка на картинку",
                              name: "Китай",
                              id: "A_Kitaj",
                              status: false,
                              parrent: "A_Strana",
                              child: null
                            },
                        ]
                      },
                  ]
                },
                {
                  image: "ссылка на картинку",
                  name: "Железо",
                  id: "B_Zelezo",
                  status: false,
                  parrent: null,
                  child: [
                      {
                        image: "ссылка на картинку",
                        name: "Cолевые",
                        id: "B_Colevye",
                        status: false,
                        parrent: "B_Zelezo",
                        child: [
                            {
                              image: "ссылка на картинку",
                              name: "Да",
                              id: "B_Da",
                              status: false,
                              parrent: "B_Colevye",
                              child: null
                            },
                            {
                              image: "ссылка на картинку",
                              name: "Нет",
                              id: "B_Net",
                              status: false,
                              parrent: "B_Colevye",
                              child: null
                            },
                        ]
                      },
                      {
                        image: "ссылка на картинку",
                        name: "Вкус",
                        id: "B_Vkus",
                        status: false,
                        parrent: "B_Zelezo",
                        child: [
                            {
                                image: "ссылка на картинку",
                                name: "Банан",
                                id: "B_Banan",
                                status: false,
                                parrent: "B_Vkus",
                                child: null
                            },
                            {
                                image: "ссылка на картинку",
                                name: "Малина",
                                id: "B_Malina",
                                status: false,
                                parrent: "B_Vkus",
                                child: null
                            },
                            {
                                image: "ссылка на картинку",
                                name: "Клубника",
                                id: "B_Klubnika",
                                status: false,
                                parrent: "B_Vkus",
                                child: null
                            },
                        ]
                      },
                      {
                        image: "ссылка на картинку",
                        name: "Бренд",
                        id: "B_Brend",
                        status: false,
                        parrent: "B_Zelezo",
                        child: [
                            {
                              image: "ссылка на картинку",
                              name: "№1",
                              id: "B_Brend№1",
                              status: false,
                              parrent: "B_Brend",
                              child: null
                            },
                            {
                              image: "ссылка на картинку",
                              name: "№2",
                              id: "B_Brend№2",
                              status: false,
                              parrent: "B_Brend",
                              child: null
                            },
                            {
                              image: "ссылка на картинку",
                              name: "№3",
                              id: "B_Brend№3",
                              status: false,
                              parrent: "B_Brend",
                              child: null
                            },
                        ]
                      },
                      {
                        image: "ссылка на картинку",
                        name: "Объем",
                        id: "B_Obem",
                        status: false,
                        parrent: "B_Zelezo",
                        child: [
                            {
                              image: "ссылка на картинку",
                              name: "200мл",
                              id: "B_200ml",
                              status: false,
                              parrent: "B_Obem",
                              child: null
                            },
                            {
                              image: "ссылка на картинку",
                              name: "400мл",
                              id: "B_400ml",
                              status: false,
                              parrent: "B_Obem",
                              child: null
                            },
                            {
                              image: "ссылка на картинку",
                              name: "600мл",
                              id: "B_600ml",
                              status: false,
                              parrent: "B_Obem",
                              child: null
                            },
                        ]
                      },
                      {
                        image: "ссылка на картинку",
                        name: "Крепость",
                        id: "B_Krepost",
                        status: false,
                        parrent: "B_Zelezo",
                        child: [
                            {
                              image: "ссылка на картинку",
                              name: "2мг",
                              id: "B_2mg",
                              status: false,
                              parrent: "B_Krepost",
                              child: null
                            },
                            {
                              image: "ссылка на картинку",
                              name: "4мг",
                              id: "B_4mg",
                              status: false,
                              parrent: "B_Krepost",
                              child: null
                            },
                            {
                              image: "ссылка на картинку",
                              name: "6мг",
                              id: "B_6mg",
                              status: false,
                              parrent: "B_Krepost",
                              child: null
                            },
                        ]
                      },
                      {
                        image: "ссылка на картинку",
                        name: "Страна",
                        id: "B_Strana",
                        status: false,
                        parrent: "B_Zelezo",
                        child: [
                            {
                              image: "ссылка на картинку",
                              name: "Россия",
                              id: "B_Rossiya",
                              status: false,
                              parrent: "B_Strana",
                              child: null
                            },
                            {
                              image: "ссылка на картинку",
                              name: "США",
                              id: "B_SSHA",
                              status: false,
                              parrent: "B_Strana",
                              child: null
                            },
                            {
                              image: "ссылка на картинку",
                              name: "Китай",
                              id: "B_Kitaj",
                              status: false,
                              parrent: "B_Strana",
                              child: null
                            },
                        ]
                      },
                  ]
                },
                {
                  image: "ссылка на картинку",
                  name: "Поды",
                  id: "C_Podi",
                  status: false,
                  parrent: null,
                  child: [
                      {
                        image: "ссылка на картинку",
                        name: "Cолевые",
                        id: "C_Colevye",
                        status: false,
                        parrent: "C_Podi",
                        child: [
                            {
                              image: "ссылка на картинку",
                              name: "Да",
                              id: "C_Da",
                              status: false,
                              parrent: "C_Colevye",
                              child: null
                            },
                            {
                              image: "ссылка на картинку",
                              name: "Нет",
                              id: "C_Net",
                              status: false,
                              parrent: "C_Colevye",
                              child: null
                            },
                        ]
                      },
                      {
                        image: "ссылка на картинку",
                        name: "Вкус",
                        id: "C_Vkus",
                        status: false,
                        parrent: "C_Podi",
                        child: [
                            {
                                image: "ссылка на картинку",
                                name: "Банан",
                                id: "C_Banan",
                                status: false,
                                parrent: "C_Vkus",
                                child: null
                            },
                            {
                                image: "ссылка на картинку",
                                name: "Малина",
                                id: "C_Malina",
                                status: false,
                                parrent: "C_Vkus",
                                child: null
                            },
                            {
                                image: "ссылка на картинку",
                                name: "Клубника",
                                id: "C_Klubnika",
                                status: false,
                                parrent: "C_Vkus",
                                child: null
                            },
                        ]
                      },
                      {
                        image: "ссылка на картинку",
                        name: "Бренд",
                        id: "C_Brend",
                        status: false,
                        parrent: "C_Podi",
                        child: [
                            {
                              image: "ссылка на картинку",
                              name: "№1",
                              id: "C_Brend№1",
                              status: false,
                              parrent: "C_Brend",
                              child: null
                            },
                            {
                              image: "ссылка на картинку",
                              name: "№2",
                              id: "C_Brend№2",
                              status: false,
                              parrent: "C_Brend",
                              child: null
                            },
                            {
                              image: "ссылка на картинку",
                              name: "№3",
                              id: "C_Brend№3",
                              status: false,
                              parrent: "C_Brend",
                              child: null
                            },
                        ]
                      },
                      {
                        image: "ссылка на картинку",
                        name: "Объем",
                        id: "C_Obem",
                        status: false,
                        parrent: "C_Podi",
                        child: [
                            {
                              image: "ссылка на картинку",
                              name: "200мл",
                              id: "C_200ml",
                              status: false,
                              parrent: "C_Obem",
                              child: null
                            },
                            {
                              image: "ссылка на картинку",
                              name: "400мл",
                              id: "C_400ml",
                              status: false,
                              parrent: "C_Obem",
                              child: null
                            },
                            {
                              image: "ссылка на картинку",
                              name: "600мл",
                              id: "C_600ml",
                              status: false,
                              parrent: "C_Obem",
                              child: null
                            },
                        ]
                      },
                      {
                        image: "ссылка на картинку",
                        name: "Крепость",
                        id: "C_Krepost",
                        status: false,
                        parrent: "C_Podi",
                        child: [
                            {
                              image: "ссылка на картинку",
                              name: "2мг",
                              id: "C_2mg",
                              status: false,
                              parrent: "C_Krepost",
                              child: null
                            },
                            {
                              image: "ссылка на картинку",
                              name: "4мг",
                              id: "C_4mg",
                              status: false,
                              parrent: "C_Krepost",
                              child: null
                            },
                            {
                              image: "ссылка на картинку",
                              name: "6мг",
                              id: "C_6mg",
                              status: false,
                              parrent: "C_Krepost",
                              child: null
                            },
                        ]
                      },
                      {
                        image: "ссылка на картинку",
                        name: "Страна",
                        id: "C_Strana",
                        status: false,
                        parrent: "C_Podi",
                        child: [
                            {
                              image: "ссылка на картинку",
                              name: "Россия",
                              id: "C_Rossiya",
                              status: false,
                              parrent: "C_Strana",
                              child: null
                            },
                            {
                              image: "ссылка на картинку",
                              name: "США",
                              id: "C_SSHA",
                              status: false,
                              parrent: "C_Strana",
                              child: null
                            },
                            {
                              image: "ссылка на картинку",
                              name: "Китай",
                              id: "C_Kitaj",
                              status: false,
                              parrent: "C_Strana",
                              child: null
                            },
                        ]
                      },
                  ]
                },
                {
                  image: "ссылка на картинку",
                  name: "Испарители",
                  id: "D_Ispariteli",
                  status: false,
                  parrent: null,
                  child: [
                      {
                        image: "ссылка на картинку",
                        name: "Cолевые",
                        id: "D_Colevye",
                        status: false,
                        parrent: "D_Ispariteli",
                        child: [
                            {
                              image: "ссылка на картинку",
                              name: "Да",
                              id: "D_Da",
                              status: false,
                              parrent: "D_Colevye",
                              child: null
                            },
                            {
                              image: "ссылка на картинку",
                              name: "Нет",
                              id: "D_Net",
                              status: false,
                              parrent: "D_Colevye",
                              child: null
                            },
                        ]
                      },
                      {
                        image: "ссылка на картинку",
                        name: "Вкус",
                        id: "D_Vkus",
                        status: false,
                        parrent: "D_Ispariteli",
                        child: [
                            {
                                image: "ссылка на картинку",
                                name: "Банан",
                                id: "D_Banan",
                                status: false,
                                parrent: "D_Vkus",
                                child: null
                            },
                            {
                                image: "ссылка на картинку",
                                name: "Малина",
                                id: "D_Malina",
                                status: false,
                                parrent: "D_Vkus",
                                child: null
                            },
                            {
                                image: "ссылка на картинку",
                                name: "Клубника",
                                id: "D_Klubnika",
                                status: false,
                                parrent: "D_Vkus",
                                child: null
                            },
                        ]
                      },
                      {
                        image: "ссылка на картинку",
                        name: "Бренд",
                        id: "D_Brend",
                        status: false,
                        parrent: "D_Ispariteli",
                        child: [
                            {
                              image: "ссылка на картинку",
                              name: "№1",
                              id: "D_Brend№1",
                              status: false,
                              parrent: "D_Brend",
                              child: null
                            },
                            {
                              image: "ссылка на картинку",
                              name: "№2",
                              id: "D_Brend№2",
                              status: false,
                              parrent: "D_Brend",
                              child: null
                            },
                            {
                              image: "ссылка на картинку",
                              name: "№3",
                              id: "D_Brend№3",
                              status: false,
                              parrent: "D_Brend",
                              child: null
                            },
                        ]
                      },
                      {
                        image: "ссылка на картинку",
                        name: "Объем",
                        id: "D_Obem",
                        status: false,
                        parrent: "D_Ispariteli",
                        child: [
                            {
                              image: "ссылка на картинку",
                              name: "200мл",
                              id: "D_200ml",
                              status: false,
                              parrent: "D_Obem",
                              child: null
                            },
                            {
                              image: "ссылка на картинку",
                              name: "400мл",
                              id: "D_400ml",
                              status: false,
                              parrent: "D_Obem",
                              child: null
                            },
                            {
                              image: "ссылка на картинку",
                              name: "600мл",
                              id: "D_600ml",
                              status: false,
                              parrent: "D_Obem",
                              child: null
                            },
                        ]
                      },
                      {
                        image: "ссылка на картинку",
                        name: "Крепость",
                        id: "D_Krepost",
                        status: false,
                        parrent: "D_Ispariteli",
                        child: [
                            {
                              image: "ссылка на картинку",
                              name: "2мг",
                              id: "D_2mg",
                              status: false,
                              parrent: "D_Krepost",
                              child: null
                            },
                            {
                              image: "ссылка на картинку",
                              name: "4мг",
                              id: "D_4mg",
                              status: false,
                              parrent: "D_Krepost",
                              child: null
                            },
                            {
                              image: "ссылка на картинку",
                              name: "6мг",
                              id: "D_6mg",
                              status: false,
                              parrent: "D_Krepost",
                              child: null
                            },
                        ]
                      },
                      {
                        image: "ссылка на картинку",
                        name: "Страна",
                        id: "D_Strana",
                        status: false,
                        parrent: "D_Ispariteli",
                        child: [
                            {
                              image: "ссылка на картинку",
                              name: "Россия",
                              id: "D_Rossiya",
                              status: false,
                              parrent: "D_Strana",
                              child: null
                            },
                            {
                              image: "ссылка на картинку",
                              name: "США",
                              id: "D_SSHA",
                              status: false,
                              parrent: "D_Strana",
                              child: null
                            },
                            {
                              image: "ссылка на картинку",
                              name: "Китай",
                              id: "D_Kitaj",
                              status: false,
                              parrent: "D_Strana",
                              child: null
                            },
                        ]
                      },
                  ]
                },
                {
                  image: "ссылка на картинку",
                  name: "Табак",
                  id: "I_Tabak",
                  status: false,
                  parrent: null,
                  child: [
                          {
                            image: "ссылка на картинку",
                            name: "Cолевые",
                            id: "I_Colevye",
                            status: false,
                            parrent: "I_Tabak",
                            child: [
                                {
                                  image: "ссылка на картинку",
                                  name: "Да",
                                  id: "I_Da",
                                  status: false,
                                  parrent: "I_Colevye",
                                  child: null
                                },
                                {
                                  image: "ссылка на картинку",
                                  name: "Нет",
                                  id: "I_Net",
                                  status: false,
                                  parrent: "I_Colevye",
                                  child: null
                                },
                            ]
                          },
                          {
                            image: "ссылка на картинку",
                            name: "Вкус",
                            id: "I_Vkus",
                            status: false,
                            parrent: "I_Tabak",
                            child: [
                                {
                                    image: "ссылка на картинку",
                                    name: "Банан",
                                    id: "I_Banan",
                                    status: false,
                                    parrent: "I_Vkus",
                                    child: null
                                },
                                {
                                    image: "ссылка на картинку",
                                    name: "Малина",
                                    id: "I_Malina",
                                    status: false,
                                    parrent: "I_Vkus",
                                    child: null
                                },
                                {
                                    image: "ссылка на картинку",
                                    name: "Клубника",
                                    id: "I_Klubnika",
                                    status: false,
                                    parrent: "I_Vkus",
                                    child: null
                                },
                            ]
                          },
                          {
                            image: "ссылка на картинку",
                            name: "Бренд",
                            id: "I_Brend",
                            status: false,
                            parrent: "I_Tabak",
                            child: [
                                {
                                  image: "ссылка на картинку",
                                  name: "№1",
                                  id: "I_Brend№1",
                                  status: false,
                                  parrent: "I_Brend",
                                  child: null
                                },
                                {
                                  image: "ссылка на картинку",
                                  name: "№2",
                                  id: "I_Brend№2",
                                  status: false,
                                  parrent: "I_Brend",
                                  child: null
                                },
                                {
                                  image: "ссылка на картинку",
                                  name: "№3",
                                  id: "I_Brend№3",
                                  status: false,
                                  parrent: "I_Brend",
                                  child: null
                                },
                            ]
                          },
                          {
                            image: "ссылка на картинку",
                            name: "Объем",
                            id: "I_Obem",
                            status: false,
                            parrent: "I_Tabak",
                            child: [
                                {
                                  image: "ссылка на картинку",
                                  name: "200мл",
                                  id: "I_200ml",
                                  status: false,
                                  parrent: "I_Obem",
                                  child: null
                                },
                                {
                                  image: "ссылка на картинку",
                                  name: "400мл",
                                  id: "I_400ml",
                                  status: false,
                                  parrent: "I_Obem",
                                  child: null
                                },
                                {
                                  image: "ссылка на картинку",
                                  name: "600мл",
                                  id: "I_600ml",
                                  status: false,
                                  parrent: "I_Obem",
                                  child: null
                                },
                            ]
                          },
                          {
                            image: "ссылка на картинку",
                            name: "Крепость",
                            id: "I_Krepost",
                            status: false,
                            parrent: "I_Tabak",
                            child: [
                                {
                                  image: "ссылка на картинку",
                                  name: "2мг",
                                  id: "I_2mg",
                                  status: false,
                                  parrent: "I_Krepost",
                                  child: null
                                },
                                {
                                  image: "ссылка на картинку",
                                  name: "4мг",
                                  id: "I_4mg",
                                  status: false,
                                  parrent: "I_Krepost",
                                  child: null
                                },
                                {
                                  image: "ссылка на картинку",
                                  name: "6мг",
                                  id: "I_6mg",
                                  status: false,
                                  parrent: "I_Krepost",
                                  child: null
                                },
                            ]
                          },
                          {
                            image: "ссылка на картинку",
                            name: "Страна",
                            id: "I_Strana",
                            status: false,
                            parrent: "I_Tabak",
                            child: [
                                {
                                  image: "ссылка на картинку",
                                  name: "Россия",
                                  id: "I_Rossiya",
                                  status: false,
                                  parrent: "I_Strana",
                                  child: null
                                },
                                {
                                  image: "ссылка на картинку",
                                  name: "США",
                                  id: "I_SSHA",
                                  status: false,
                                  parrent: "I_Strana",
                                  child: null
                                },
                                {
                                  image: "ссылка на картинку",
                                  name: "Китай",
                                  id: "I_Kitaj",
                                  status: false,
                                  parrent: "I_Strana",
                                  child: null
                                },
                            ]
                          },
                      ]
                },
                {
                  image: "ссылка на картинку",
                  name: "Кальяны",
                  id: "F_Kalyany",
                  status: false,
                  parrent: null,
                  child: [
                          {
                            image: "ссылка на картинку",
                            name: "Cолевые",
                            id: "F_Colevye",
                            status: false,
                            parrent: "F_Kalyany",
                            child: [
                                {
                                  image: "ссылка на картинку",
                                  name: "Да",
                                  id: "F_Da",
                                  status: false,
                                  parrent: "F_Colevye",
                                  child: null
                                },
                                {
                                  image: "ссылка на картинку",
                                  name: "Нет",
                                  id: "F_Net",
                                  status: false,
                                  parrent: "F_Colevye",
                                  child: null
                                },
                            ]
                          },
                          {
                            image: "ссылка на картинку",
                            name: "Вкус",
                            id: "F_Vkus",
                            status: false,
                            parrent: "F_Kalyany",
                            child: [
                                {
                                    image: "ссылка на картинку",
                                    name: "Банан",
                                    id: "F_Banan",
                                    status: false,
                                    parrent: "F_Vkus",
                                    child: null
                                },
                                {
                                    image: "ссылка на картинку",
                                    name: "Малина",
                                    id: "F_Malina",
                                    status: false,
                                    parrent: "F_Vkus",
                                    child: null
                                },
                                {
                                    image: "ссылка на картинку",
                                    name: "Клубника",
                                    id: "F_Klubnika",
                                    status: false,
                                    parrent: "F_Vkus",
                                    child: null
                                },
                            ]
                          },
                          {
                            image: "ссылка на картинку",
                            name: "Бренд",
                            id: "F_Brend",
                            status: false,
                            parrent: "F_Kalyany",
                            child: [
                                {
                                  image: "ссылка на картинку",
                                  name: "№1",
                                  id: "F_Brend№1",
                                  status: false,
                                  parrent: "F_Brend",
                                  child: null
                                },
                                {
                                  image: "ссылка на картинку",
                                  name: "№2",
                                  id: "F_Brend№2",
                                  status: false,
                                  parrent: "F_Brend",
                                  child: null
                                },
                                {
                                  image: "ссылка на картинку",
                                  name: "№3",
                                  id: "F_Brend№3",
                                  status: false,
                                  parrent: "F_Brend",
                                  child: null
                                },
                            ]
                          },
                          {
                            image: "ссылка на картинку",
                            name: "Объем",
                            id: "F_Obem",
                            status: false,
                            parrent: "F_Kalyany",
                            child: [
                                {
                                  image: "ссылка на картинку",
                                  name: "200мл",
                                  id: "F_200ml",
                                  status: false,
                                  parrent: "F_Obem",
                                  child: null
                                },
                                {
                                  image: "ссылка на картинку",
                                  name: "400мл",
                                  id: "F_400ml",
                                  status: false,
                                  parrent: "F_Obem",
                                  child: null
                                },
                                {
                                  image: "ссылка на картинку",
                                  name: "600мл",
                                  id: "F_600ml",
                                  status: false,
                                  parrent: "F_Obem",
                                  child: null
                                },
                            ]
                          },
                          {
                            image: "ссылка на картинку",
                            name: "Крепость",
                            id: "F_Krepost",
                            status: false,
                            parrent: "F_Kalyany",
                            child: [
                                {
                                  image: "ссылка на картинку",
                                  name: "2мг",
                                  id: "F_2mg",
                                  status: false,
                                  parrent: "F_Krepost",
                                  child: null
                                },
                                {
                                  image: "ссылка на картинку",
                                  name: "4мг",
                                  id: "F_4mg",
                                  status: false,
                                  parrent: "F_Krepost",
                                  child: null
                                },
                                {
                                  image: "ссылка на картинку",
                                  name: "6мг",
                                  id: "F_6mg",
                                  status: false,
                                  parrent: "F_Krepost",
                                  child: null
                                },
                            ]
                          },
                          {
                            image: "ссылка на картинку",
                            name: "Страна",
                            id: "F_Strana",
                            status: false,
                            parrent: "F_Kalyany",
                            child: [
                                {
                                  image: "ссылка на картинку",
                                  name: "Россия",
                                  id: "F_Rossiya",
                                  status: false,
                                  parrent: "F_Strana",
                                  child: null
                                },
                                {
                                  image: "ссылка на картинку",
                                  name: "США",
                                  id: "F_SSHA",
                                  status: false,
                                  parrent: "F_Strana",
                                  child: null
                                },
                                {
                                  image: "ссылка на картинку",
                                  name: "Китай",
                                  id: "F_Kitaj",
                                  status: false,
                                  parrent: "F_Strana",
                                  child: null
                                },
                            ]
                          },
                      ]

                },
            ],

        }
    },


    mutations:{         //для изменения данных в state
      products_search(state, n){
            this.state.products_temp_arr = []
            this.state.but_show_str = true

            for(let i = 0; i < this.state.products_temp.length; i++){
                  if(this.state.products_temp[i].name.includes(n, 0)){continue}
                  else{this.state.products_temp.splice(i, 1); i--}
            }

            if(this.state.products_temp.length >= this.state.products_temp_str+12){
                  this.state.products_temp_str += 11
            }
            else{
                  this.state.products_temp_str += this.state.products_temp.length - this.state.products_temp_str;
                   this.state.but_show_str = false
             }
            for(this.state.products_temp_pred; this.state.products_temp_pred < this.state.products_temp_str; this.state.products_temp_pred++){
              this.state.products_temp_arr.push(this.state.products_temp[this.state.products_temp_pred])
            }
      },

      products_temp_str_up(){   // нужно было переменные добавить для этого всего...
            this.state.products_temp_pred = this.state.products_temp_str
            if(this.state.products_temp.length >= this.state.products_temp_str+12){
                  this.state.products_temp_str += 11
            }
            else{
                  this.state.products_temp_str += this.state.products_temp.length - this.state.products_temp_str;
                   this.state.but_show_str = false
             }
            for(this.state.products_temp_pred; this.state.products_temp_pred < this.state.products_temp_str; this.state.products_temp_pred++){
              this.state.products_temp_arr.push(this.state.products_temp[this.state.products_temp_pred])
            }
      },

      addToCart(state, n){
                  state.basketItem.push(n)
                  let cookie = ''
                  for (let i of this.state.basketItem){
                      cookie += i.article + '.'
                  }
                  document.cookie = `basket=${cookie}; max-age=3600`;
              },
      refresh_DOM_List(){
            this.state.but_show_str = true
            this.state.products_temp = []
            this.state.products_temp_arr = []
            this.state.products_temp_pred = 0
            this.state.products_temp_str = 0

                this.state.products_temp.splice(0, this.state.products_temp.length)

                for (let i in this.state.products){
                  this.state.products_temp.push(this.state.products[i])
                }
              },
      deleteFromBasket(state, n){
            for  (let i of this.state.basketItem){
                if (i.article === n){
                    this.state.basketItem.splice(i, 1)
                    break;
                }
            }
            let cookie = ''
            for (let i of this.state.basketItem){
                cookie += i.article + '.'
            }
            document.cookie = `basket=${cookie}; max-age=3600`;
        },
      SET_PRODUCTS_TO_STATE: (state, products) => {       //после вызыва
            state.products = products                           //наш products = products из серва

                  if(document.cookie.includes('basket=')) {

                      let run = document.cookie.indexOf('basket=', 0) + 7
                      let stop = document.cookie.indexOf(';', run)

                      for (let i of document.cookie.slice(run, stop).split('.')){
                          for (let a of state.products){
                              if (a.article == i){
                                  if(!state.basketItem.includes(a, 0)){
                                      state.basketItem.push(a)
                                  }
                              }
                          }
                      }
                  }

              for (let i in state.products){
                state.products_temp.push(state.products[i])
              }

              if(state.products_temp.length >= state.products_temp_str+12){
                    state.products_temp_str += 11;
              }
              else{
                    state.products_temp_str += state.products_temp.length - state.products_temp_str;
                    this.state.but_show_str = false;
              }

              for(state.products_temp_pred; state.products_temp_pred < state.products_temp_str; state.products_temp_pred++){
                state.products_temp_arr.push(state.products_temp[state.products_temp_pred])
              }
        }
    },


    actions:{              //асинхронные действия
        GET_PRODUCTS_API({commit}){                             //создаем действие
            return axios('http://localhost:3000/products', {    //вызываем axios запрос с методом GET
                method: "GET"                                   //тип зайди туда и получи что-то
            })
            .then((products) => {                               //так как axios - промис, нужен then
                commit('SET_PRODUCTS_TO_STATE', products.data)       //этой фиговиной вызываем мутацию (SET_PRODUCTS_TO_STATE)
                return products
            })
            .catch((error)=>{
                console.log(error)
                return error
            })
        }
    },


    getters:{           //получение данных из state
        PRODUCTS(state){
            return state.products_temp
        },

        BASKETITEM(state){
            return state.basketItem
        },

        FILT(state){
            return state.filt
        }
    },


})


export default store;













/*

*/
