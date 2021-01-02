<template>
<footer>
  <a href='#antibug' className='scroll-to'>
    <div id='to_the_moon'>
      <p>Наверх страницы</p>
    </div>
  </a>
</footer>
</template>

<script>
export default {
  name: 'Footer_html',
  components: {

  }
}
</script>

<style>
footer {
  margin-top:65px;
	margin-left: 250px;
	height: 500px;
border-top: 1px dotted gray;
}

	footer a {
		text-decoration: none;
	}

	footer a:hover {
		color: black;
	}

		#to_the_moon {
			height: 40px;
			border-bottom: 1px dotted gray;
			background: rgb(255, 235, 205);
			cursor: pointer;
		}

		#to_the_moon p {
			margin: 0;
			padding: 10px 0;
			text-align: center;
		}


		#to_the_moon:hover {
			background: rgb(255, 228, 181);
		}
</style>
