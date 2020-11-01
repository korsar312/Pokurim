<template>
<header id='top'>
  <div id='top_left'>
    <div id='top_left_number' className='top_garbage'>
      <p><a href="tel:+71111111111">+7(111)111-11-11 </a></p>
    </div>
    <div id='top_left_location' className='top_garbage'>
      <p><a href="index.html">Киров</a></p>
    </div>
  </div>
  <div id='top_right'>
    <div id='top_right_sail' className='top_garbage'>
      <p><a href="index.html">Скидки</a></p>
    </div>
    <div id='top_right_info'  className='top_garbage'>
      <p><a href="index.html">Инфрмация</a></p>
    </div>
    <div id='top_right_deliv'  className='top_garbage'>
      <p><a href="index.html">Доставка</a></p>
    </div>
    <div id='top_right_feedback'  className='top_garbage'>
      <p><a href="index.html">Обратная связь</a></p>
    </div>
  </div>
</header>
</template>

<script>
export default {
  name: 'Header_html',
  components: {

  }
}
</script>

<style>
header {
	display:flex;
	height: 50px;
	margin-left: 250px;
	border-bottom: 1px dotted gray;
}

	#top_left {
		display:flex;
		justify-content: flex-start;
		flex: 1;
		padding: 0px 4px 0px 4px;
	}

	#top_right {
		display:flex;
		justify-content: flex-end;
		flex: 1;
		padding: 0px 4px 0px 4px;
	}

		.top_garbage {
			width: 140px;
			text-align: center;
		}
</style>
