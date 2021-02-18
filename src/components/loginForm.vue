<template>
  <v-card round class="mx-auto"  max-width="400" style="position:; top:-50px; left: 350px;"> 
        <v-form style="margin-left: 20px; margin-right: 20px; position:relative; top:10px;">
        <v-text-field  v-model="email" placeholder="Email/PhoneNumber" solo></v-text-field>
        <v-text-field  v-model="password" placeholder="Password" type="password" solo></v-text-field>
        </v-form>
        <v-card-actions>
          <v-btn color="info" large block @click="pressed"><b>Login</b></v-btn>
        </v-card-actions>
        <p style="margin-left: 130px; top:100px;"> Forgotten Password?</p>
        <hr style="width:80%; margin-left:40px; opacity:0.8;">
        <v-card-action class="mx-auto" style="margin-top:200px; !important; border-radius; 10px 10px 10px 10px;">
          <v-btn color="success" success style="margin-left: 120px; margin-top:20px; margin-bottom:10px;"><b>Create Account</b></v-btn>
        </v-card-action>
  </v-card>   
</template>

<script>
/* import logintab from './components/Apptab'; */
import firebase from 'firebase/app'
require('firebase/auth')
export default {
    
    data (){
      return{
        email:'',
        password:''
      }
    },
    methods:{
      pressed(){
        firebase.auth().signInWithEmailAndPassword(this.email,this.password).then(()=>{
          this.$router.replace({path:"/dashboard"})
        })
      }
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
