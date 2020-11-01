<template>
<div id='see_menu'>
  <div id='see_menu_search'>
    <form>
      <input type='search' id='see_menu_search_site_search' name='search' placeholder='Поиск по магазину'/>
      <input type='button' id='see_menu_search_enter' name='enter'/>
    </form>
  </div>
  <div id='see_menu_basket'>
    <a href='index.html'>
      <div id='see_menu_basket_button'>
        <div>
        </div>
      </div>
    </a>
  </div>
  <div id='see_menu_login'>
    <input type='checkbox' id='see_menu_login_text'/><label for="see_menu_login_text">Вход/регестрация</label>
    <div id='see_menu_login_form'>
      <form>
        <p>Номер телефона</p>
        <input type='password' id='see_menu_login_site_login' name='login' className='log_pass' placeholder='+71234567890'/>
        <p>Пароль</p>
        <input type='password' id='see_menu_login_site_pass' name='pass' className='log_pass' placeholder='Пароль'/>
        <input type='button' id='see_menu_login_site_button_click' name='button' value='вход'/>
        <p><a href='index.html'>Регестрация</a>\<a href='index.html'>забыли пароль</a></p>
        <p>Вы сможете увидеть ваши заказы в личном кабинете</p>
      </form>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'See_html',
  components: {

  }
}
</script>

<style>
#see_menu {
	display: flex;
	height: 50px;
	margin-left: 250px;
	border-bottom: 1px dotted gray;
}

	#see_menu_search {
		flex: none;
	}

		#see_menu_search form {
			flex: none;
			position: relative;
		}

		#see_menu_search_site_search {
			border-radius: 15px;
			margin: 10px 20px 10px 20px;
			width: 40vw;
			height: 30px;
			border: 1px inset black;
			background-color: RGBa(0, 0, 0, 0.2);
			box-shadow: 0 0 0 0vw rgba(0,0,0,0);
			transition: .35s ease-in-out;
			padding:3px 30px 3px 10px;
		}

		#see_menu_search_enter {
			height: 21px;
			width: 21px;
			position: absolute;
			top: 14px;
			right: 28px;
			background: no-repeat url("../main_img/search.svg");
			background-size: cover;
			cursor: pointer;
			border: none;
			outline: none;
			transition: .18s ease-in-out;
		}

		#see_menu_search_enter:hover {
			outline: none;
			transform: scale(1.2, 1.2);
		}

		#see_menu_search_enter {
			margin-left: -10px;
		}

		#see_menu_search_site_search:focus {
			box-shadow: 0 0 0 99999px rgba(0,0,0,0.4);
			background-color: RGBa(0, 0, 0, 0);
			outline: none;
		}

	#see_menu_login {
		flex: none;
		width: 173px;
		margin: 14px 10px;
	}

		#see_menu_login_text {
			visibility: hidden;
		}

			#see_menu_login_text ~ label {
				cursor: pointer;
			}

			#see_menu_login_text ~ label::before {
				font-size: 9pt;
				content: '\25B2' ;
			}

			#see_menu_login_text:checked ~ label::before {
				content: '\25BC' ;
			}

		#see_menu_login_form {
			position: absolute;
			right: 5px;
			top: 90px;
			width: 180px;
			height: 230px;
			visibility: hidden;
			transition: .25s ease-in-out;
			opacity: 0;
			background: rgb(250,250,250);
			background: -moz-linear-gradient(180deg, rgba(250,250,250,1) 0%, rgba(218,218,218,1) 100%);
			background: -webkit-linear-gradient(180deg, rgba(250,250,250,1) 0%, rgba(218,218,218,1) 100%);
			background: linear-gradient(180deg, rgba(250,250,250,1) 0%, rgba(218,218,218,1) 100%);
			filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#fafafa",endColorstr="#dadada",GradientType=1);
			border: 1px ridge;
			border-radius: 5px;
			box-shadow: -2px 2px 10px;
		}

			#see_menu_login_form form {
				margin: 5px;
			}

			#see_menu_login_text:checked ~ #see_menu_login_form {
				visibility: visible;
				opacity: 1;
			}

			.log_pass {
				background-color: RGB(230, 230, 230);
				width: 158px;
				border: none;
				border-radius: 3px;
				height: 20px;
				padding:3px 6px 3px 6px ;
			}

			#see_menu_login_site_button_click{
				margin: 15px 0px 0px;
				width: 170px;
				height: 25px;
				border-radius: 20px 0;
				outline: none;
			}

			#see_menu_login_form p {
				font-size: 10pt;
				text-align: center;
				margin: 5px 0px;
			}

			#see_menu_login_form a {
				color: black;
			}

	#see_menu_basket {
		flex: 1;
		display: flex;
		justify-content: flex-end;
	}

		#see_menu_basket_button {
			flex: none;
			border-radius: 50%;
			width: 40px;
			height: 40px;
			background: rgb(210,210,210);
			box-shadow: -1px 1px 1px;
			margin: 5px 0;
			transition: .18s ease-in-out;
		}

		#see_menu_basket_button:hover {
			background: rgb(255,129,129);
			color: black;
		}

            #see_menu_basket_button div {
                background: url(../main_img/shop_page.svg)
            }
</style>
