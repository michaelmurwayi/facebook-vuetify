<template>
  <!-- Footer -->
<footer class="page-footer font-small" style="position:relative; top:10px;">

  <!-- Footer Links -->
<div class=" links text-left col-md-8 container-fluid" style="bottom:10px;">
        <ul  style="margin-right:100px;" class="text" >
        <li class="">English (UK)</li>
        <li class="">Kiswahili</li>
        <li class=""> Français (France)</li>
        <li class="">Esliañol</li>
        <li class="">liortuguês (Brasil)</li>
        <li class="">Italiano</li>
        <li class="">Deutsch</li>
        <li class="">العربية</li>
        <li class="">Türkçe</li>
        <li class="">हिन्दी</li>
        <li class="">中文(简体)</li>
        </ul>
        <hr>
        <ul  v-for="link in Links" :key= link  class="text-left" style="margin-right: 10px; top:10px; position:relative;">
          <li>{{ link }} </li>
        </ul>
    </div>


</footer>
<!-- Footer -->
</template>
<script lang="ts">
export default {
  name: 'Footer',
    data(){
      return{
        Links: ['SignUp','LogIn','Messenger', 'FacebookLite','Watch','People','Pages','Page   categories','Places','Games','Locations','Marketplace','FacebookPay','Groups','Jobs','Oculus','Portal','Instagram','Local','Fundraisers','Services','Voting Information Centre','About','Create ad' ,'Create Page','Developers','Careers','Privacy','Cookies','AdChoices','Terms','Help'],
      };
    }
};
</script>

<style scoped>
.page-footer {
  position: relative;
  /* height: 100px; */
  margin-top: -50px;
  left: 0;
  width: 100%;
  padding-top: 12%;
  /* background-color: red; */
  color: white;
  text-align: center;
  display: inline;
  padding-left:  ; 
}

li{
    display: inline;
    color: black;
    font-size: 0.8rem;
    padding: 0px;
    width: 80%;
}
ul {
    display: inline;
    color: black;
    font-size: 0.8rem;
    padding: 0px;
    width: 80%;
}

.links{
    position: relative;
    left: 250px;
    opacity: 0.6;
    /* background-color: red; */
    margin-left: 0;
    text-align: left;
    padding: 10px;

}
.row{
    position: relative;
    left: 0px;
}

</style>
