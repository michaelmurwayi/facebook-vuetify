<template>
  <div class="main">
    <v-toolbar
      color="primary"
    >
      
      <v-toolbar-title style="color:white">facebook</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-form style="display:flex; positon:absolute; top:150;">
        <v-text-field  v-model="email" placeholder="Email/PhoneNumber" solo dense style="position:relative; top:20px; right:20px; width:80%; height:80px"></v-text-field>
        <v-text-field  v-model="password" placeholder="Password" type="password" dense solo  style="position:relative; top:20px; right:10px; width:80%;"></v-text-field>
      </v-form>
      <v-btn color="info" small dense @click="pressed"><b>Login</b></v-btn>
    </v-toolbar>
    <v-form max-width="400px" style="width:400px; position:absolute; top: 140px; left:35%;">

      <v-card-title><h2>Create A New Account</h2></v-card-title>
      <v-card-subtitle><p>It's Simple and Quick</p></v-card-subtitle>
       <v-row>
      <v-col
          cols="12"
          md="6"
      >
        <v-text-field
            v-model="firstname"
            placeholder="First name"
            required
            solo
            class="mt-0"
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="surname"
            placeholder="Surname"
            solo
            required
          ></v-text-field>
        </v-col>
       </v-row>
        <v-col
          cols="12"
          md="12"
        >
          <v-text-field
            v-model="email"
            placeholder="Email or Phonenumber"
            solo
            required
            style="position:relative; top: -5px; right: 5px;"
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="12"
        >
          <v-text-field
            v-model="password"
            placeholder="Password"
            type="password"
            solo
            required
            style="position:relative; top: -5px; right: 5px;"
          ></v-text-field>
          <v-card-subtitle><p>By clicking Sign Up, you agree to our Terms, Data Policy and Cookie Policy.You may recieve SMS notifications from us and can opt out at any time</p></v-card-subtitle>
        </v-col>
      <v-card-action class="mx-auto" style="border-radius; 10px 10px 10px 10px;">
          <v-btn color="success" success style="margin-left: 20px; margin-top:0px; margin-bottom:10px;" @click="pressed"><b>Sign Up</b></v-btn>
        </v-card-action>
    </v-form>
    <div style="position:absolute; top:720px">
    <Footer/>
    </div>
    </div>
</template>
<style scoped>
.main{
  background-color: #F7F7F7;
  height: 700px;
}
</style>
<script>
import "firebase/firestore";
import "firebase/auth";
import {firebase} from '@firebase/app'
import userCollection from '../firebase'
import Firebase from '../firebase'
import { db } from '../firebase'
import Footer from '../components/footer'

export default {
  components:{
    Footer
  },
  data() {
    return {
      firstname:"",
      surname:"",
      email: "",
      password: "",
      error: "",
      // userId: firebase.auth().currentUser.uid
    };
  },
  methods: {
    pressed() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          console.log(firebase.auth().currentUser.uid)
          const users = db.collection("users").doc(this.email).set({
            firstname: this.firstname,
            surname: this.surname,
            email: this.email,
            status: 'False'  
                })
          this.$router.replace({path:"/profile"})
        })
        .catch(error => (this.error = error));
    }
    
  }
};
</script>
