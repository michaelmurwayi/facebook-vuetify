<template>
  <div class="intro col-md-9" style="positon:relative;">
    <div class="header mb-4">

    <h4 class= "h4-responsive font-weight-bolder"><b>facebook</b></h4>
    <p class="font-weight-bolder">Facebook helps you connect and share with the people in your life</p>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Introduction'
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
  /* background-color: blue; */
  position:relative ;
  top: 150px;
  left: 200px;
  font-size: 25px;
  font-family:Impact;
  width: 55%;
  text-align: justify;
  padding: 0%;
  font-family: Helvetica, Arial, sans-serif;
  /* font-size: 12px; */
}

h4 {
  color: 	#3b5998;
  padding-top: 0;
  font-weight: bold;
  font-size: 65px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
p {
  color: black;
}

</style>
