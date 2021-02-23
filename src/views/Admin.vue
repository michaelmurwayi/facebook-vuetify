<template>
  <v-app :style="{background: $vuetify.theme.themes.light.background}">
    <v-layout row>
      <v-flex md3>
        <v-app :style="{background: $vuetify.theme.themes.light.background}">
          <v-container>
            <v-flex>
              <v-card class="ma-5 text-center mt-12" shaped elevation="10">
                <v-avatar class="mt-n7" size="60" elevation="10">
                  <img src="img8.jpg" />
                </v-avatar>
                <v-card-title class="layout justify-center"> Mike Will </v-card-title>
                <v-card-subtitle class="layout justify-center">21 year, Los Angeles </v-card-subtitle>
                <v-list>
                  <v-list-item>
                    <v-list-item-title class="cyan--text text--darken-1">Blood</v-list-item-title>
                    <v-list-item-title class="cyan--text text--darken-1">height</v-list-item-title>
                    <v-list-item-title class="cyan--text text--darken-1">Weight</v-list-item-title>
                  </v-list-item>
                  <v-list-item class="mt-n5">
                    <v-list-item-subtitle>-A</v-list-item-subtitle>
                    <v-list-item-subtitle>250 cm</v-list-item-subtitle>
                    <v-list-item-subtitle>120 Kg</v-list-item-subtitle>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-flex>
            <v-flex>
              <v-list color="transparent" class="text-center">
                <v-list-item>
                  <v-list-item-title class="cyan--text text--darken-1">Notifications</v-list-item-title>
                  <v-list-item-subtitle>26 Aug 2019</v-list-item-subtitle>
                </v-list-item>
              </v-list>
            </v-flex>
            <v-flex>
              <v-card class="ma-5" shaped elevation="10">
                <v-list>
                  <v-list-item>
                    <v-list-item-avatar size="10" color="cyan darken-1"></v-list-item-avatar>
                    <v-list-item-title class="ml-n2">Kognum</v-list-item-title>
                    <v-list-item-subtitle>10 mg</v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title class="cyan--text text--darken-1">MON</v-list-item-title>
                    <v-list-item-title class="cyan--text text--darken-1">WED</v-list-item-title>
                    <v-list-item-title class="cyan--text text--darken-1">FRI</v-list-item-title>
                    <v-list-item-title class="cyan--text text--darken-1">SUN</v-list-item-title>
                  </v-list-item>
                  <v-list-item class="mt-n5">
                    <v-list-item-subtitle>2 times in a day before food</v-list-item-subtitle>
                  </v-list-item>
                  <v-divider></v-divider>
                </v-list>
                <v-list two-line subheader>
                  <v-list-item>
                    <v-list-item-avatar size="35">
                      <img src="img4.png" />
                    </v-list-item-avatar>
                    <v-list-item-content class="ml-n5">
                      <v-list-item-title>Dr.Isabella Bowers</v-list-item-title>
                      <v-list-item-subtitle>California Hospital Medical</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
                <v-list two-line subheader class="mt-n5">
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>Surgeon</v-list-item-title>
                      <v-list-item-subtitle>spinal pain</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
                <v-list two-line subheader class="mt-n8">
                  <v-list-item>
                    <v-list-item-title class="cyan--text text--darken-1">Date</v-list-item-title>
                    <v-list-item-title class="cyan--text text--darken-1">Time</v-list-item-title>
                  </v-list-item>
                  <v-list-item class="mt-n10">
                    <v-list-item-title>26 Aug 2019</v-list-item-title>
                    <v-list-item-title>12:45 AM</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-flex>
            <v-flex>
              <v-card class="ma-5 text-center mt-12" shaped elevation="10">
                <v-list-item three-line>
                  <v-list-item-content>
                    <v-list-item-title class="headline mb-1">
                      <v-icon>fab fa-cc-visa</v-icon>
                    </v-list-item-title>
                    <v-list-item-subtitle>2345 4645 7865 5432</v-list-item-subtitle>
                  </v-list-item-content>

                  <v-list-item-avatar size="60" color="cyan darken-1">
                    <v-icon color="white">fas fa-plus</v-icon>
                  </v-list-item-avatar>
                </v-list-item>
              </v-card>
            </v-flex>
          </v-container>
        </v-app>
      </v-flex>
      <v-flex md9>
        <v-app :style="{background: $vuetify.theme.themes.dark.background}" class="rounded">
          <v-container>
            <v-flex>
              <v-list class="mt-5">
                <v-list-item>
                  <v-list-item-title class="cyan--text text--darken-1">Administration Page</v-list-item-title>
                  <v-list-item-action>
                    <v-btn class="ma-2" tile outlined color="cyan darken-1">
                      <v-icon left>fas fa-eye</v-icon>See All
                    </v-btn>
                  </v-list-item-action>
                  
                </v-list-item>
              </v-list>
            </v-flex>
            <v-flex>
              <v-row no-gutters>
                  <v-col cols="12" md="4" >
                   <v-row>
                     <v-col cols="12" md="2">
                        <v-card height="80px" width="10px" color="green"></v-card>
                     </v-col>
                     <v-col cols="12" md="10">
                       <v-list two-line subheader class="ml-n8">
                  <v-list-item>
                    <v-list-item-content>
                       <v-list-item-subtitle> Users</v-list-item-subtitle>
                      <v-list-item-title><v-btn color="success" @click= getUsers() >See All</v-btn></v-list-item-title>
                      <v-list-item-subtitle>Ongoing tratment</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
                     </v-col>
                   </v-row>
                  </v-col>
                  <v-col cols="12" md="4">
                     <v-row>
                     <v-col cols="12" md="2">
                        <v-card height="80px" width="10px" color="blue"></v-card>
                     </v-col>
                     <v-col cols="12" md="10">
                       <v-list two-line subheader class="ml-n8">
                  <v-list-item>
                    <v-list-item-content>
                       <v-list-item-subtitle>Posts</v-list-item-subtitle>
                      <v-list-item-title><v-btn color="primary" @click= getPosts() >See All</v-btn></v-list-item-title>
                      <v-list-item-subtitle>Incurable</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
                     </v-col>
                   </v-row>
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-row>
                     <v-col cols="12" md="2">
                        <v-card height="80px" width="10px" color="grey"></v-card>
                     </v-col>
                     <v-col cols="12" md="10">
                       <v-list two-line subheader class="ml-n8">
                  <v-list-item>
                    <v-list-item-content>
                       <v-list-item-subtitle>Uploads</v-list-item-subtitle>
                      <v-list-item-title><v-btn>See All</v-btn></v-list-item-title>
                      <v-list-item-subtitle>Examiniations</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
                     </v-col>
                   </v-row>
                  </v-col>
              </v-row>
            </v-flex>
             <v-flex>
            <hr>
            <div id="commentsList"> 
                
            </div>
              
            </v-flex>
          </v-container>
        </v-app>
      </v-flex>
    </v-layout>
  </v-app>
</template>
<script>
import Firebase  from 'firebase/app'
import { auth } from '../firebase'
import 'firebase/storage'
import { db } from '../firebase'
require('firebase/auth')
require('firebase/database')
import postsCollection from '../firebase'
// const admin = require('firebase-admin')
const gradients = [
    ['#222'],
    ['#42b3f4'],
    ['red', 'orange', 'yellow'],
    ['purple', 'violet'],
    ['#00c6ff', '#F0F', '#FF0'],
    ['#f72047', '#ffd200', '#1feaea'],
  ]
export default {
  data: () => ({
     width: 2,
    radius: 10,
    padding: 8,
    lineCap: 'round',
    gradient: gradients[5],
    value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
    gradientDirection: 'top',
    gradients,
    fill: false,
    type: 'trend',
    autoLineWidth: false,
    users: [],
    userPosts: [],
    arrayEvents: null,
    date2: new Date().toISOString().substr(0, 10),
  }),
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    }
  },
  mounted () {
      this.arrayEvents = [...Array(6)].map(() => {
        const day = Math.floor(Math.random() * 30)
        const d = new Date()
        d.setDate(day)
        return d.toISOString().substr(0, 10)
      })
    },

    created(){
        // this.getUsers()
    },
    methods: {
      functionEvents (date) {
        const [,, day] = date.split('-')
        if ([12, 17, 28].includes(parseInt(day, 10))) return true
        if ([1, 19, 22].includes(parseInt(day, 10))) return ['red', '#00f']
        return false
      },
    },

    methods:{

        async getUsers(){
          // this.users = []
          document.getElementById("commentsList").innerHTML = ''
          if (document.getElementById("commentsList").innerHTML == ''){
            this.users = []
            const usersRef = await db.collection("users").get().then(snapshot => {
              snapshot.forEach(doc => {
                const user = doc.data()
                    // user.id = doc.id
                    this.users.push(user)

                    
                })
                for( var items = 0 ; items < this.users.length; items++ ){
                  console.log(this.users[0])
                  this.user_firstname = this.users[items].firstname,
                  this.user_Surname = this.users[items].surname,
                  this.user_email = this.users[items].email,
                  this.user_ProfilePic = this.users[items].profilePic,

                  document.getElementById("commentsList").innerHTML += ` <div class="col-md-12 mb-3 m-2 mt-5" id="">
                        <div class="text-left row ">
                        </div>
                        <div class="text-left row ">
                        <p class="ml-4 mr-4"> <b> Firstname:</b></p>
                        <p> ${ this.user_firstname } </p>
                        </div>
                        <div class="text-left row ">
                        <p class="ml-4 mr-4"> <b> Surname:</b></p>
                        <p> ${ this.user_surname } </p>
                        </div>
                        <div class="text-left row ">
                        <p class="ml-4 mr-4"> <b> Email:</b></p>
                        <p> ${ this.user_email } </p>
                        </div>
                        <div class="text-left row ">
                        <p class="ml-4 mr-4"> <b> profile Pic:</b></p>
                        <p> <small> ${ this.user_ProfilePic } </small></p>
                        </div>
                        <div class="row mb-0 mt-0">
                        <button style="border:none; background-color:gold" class=" col-md-1  ml-2 mr-2"><small><i class="far fa-thumbs-up fa-lg" >Update</i></small></button>
                        <button style="border:none; background-color:red" class=" col-md-1   mr-0"><small><i class="fas fa-share fa-lg" @click="viewFullPost(post.posts.email)"> Delete </i></small></button>
                        </div>
                        <hr>
                        `
                
                }
            })
            .catch(error => {
                console.error(error)
            })
        console.debug('fetchUser return: ', this.users);
            }else{
              console.log("tuko hapa")
            }
            
    },
        async getPosts(){
          // location.reload()
          document.getElementById("commentsList").innerHTML = ''
          if (document.getElementById("commentsList").innerHTML == ''){
            this.users = []
            const usersRef = await db.collection("posts").get().then(snapshot => {
              snapshot.forEach(doc => {
                const user = doc.data()
                    // user.id = doc.id
                    this.userPosts.push(user)

                    
                })
                for( var items = 0 ; items < this.userPosts.length; items++ ){
                  console.log(this.userPosts[0])
                  this.post_user = this.userPosts[items].user,
                  this.post_message = this.userPosts[items].message,
                  this.post_email = this.userPosts[items].email,
                  this.post_timestamp = this.userPosts[items].timestamp,

                  document.getElementById("commentsList").innerHTML += ` <div class="col-md-12 mb-3 m-2 mt-5" id="">
                        <div class="text-left row ">
                        </div>
                        <div class="text-left row ">
                        <p class="ml-4 mr-4"> <b> User:</b></p>
                        <p> ${ this.post_user } </p>
                        </div>
                        <div class="text-left row ">
                        <p class="ml-4 mr-4"> <b> Message:</b></p>
                        <p> ${ this.post_message } </p>
                        </div>
                        <div class="text-left row ">
                        <p class="ml-4 mr-4"> <b> Email:</b></p>
                        <p> ${ this.post_email } </p>
                        </div>
                        <div class="text-left row ">
                        <p class="ml-4 mr-4"> <b> TimeStamp:</b></p>
                        <p> <small> ${ this.post_timestamp } </small></p>
                        </div>
                        <div class="row mb-0 mt-0">
                        <button style="border:none; background-color:gold" class=" col-md-1  ml-2 mr-2"><small><i class="far fa-thumbs-up fa-lg" >Update</i></small></button>
                        <button style="border:none; background-color:red" class=" col-md-1   mr-0"><small><i class="fas fa-share fa-lg" @click="viewFullPost(post.posts.email)"> Delete </i></small></button>
                        </div>
                        <hr>
                        `
                
                }
            })
            .catch(error => {
                console.error(error)
            })
        console.debug('fetchUser return: ', this.users);
            }else{
              console.log("tuko hapa")
            }
          
    },
    
    async deleteUser(key){
            console.log(key)
            auth.deleteUser(key)
            console.log()
        },

    async deleteUser(key){
            db.collection("users").doc(key).delete()
        }
    }

};
</script>
<style scoped>
.rounded {
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
}
</style>