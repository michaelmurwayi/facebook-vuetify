<template>
  <v-app style="background-color: #E8E8E8">
    <Navbar/>
    <v-layout row>
      <v-flex md3>
        <v-app style="background-color: #E8E8E8">
          <v-container>
            <v-flex>
              <v-card class="ma-5 text-center mt-12" shaped elevation="10">
                <v-avatar class="mt-n7" size="80" elevation="0">
                  <img :src="previewImage" />
                </v-avatar>
                <v-btn class="mx-2"
                fab
                dark
                small
                color="red"
                style="position:relative; left:80px; top:80px;"
                @click="deleteUser(email)">
                <small> <v-icon dark>
                  mdi-minus
                </v-icon></small>
                </v-btn>
                <v-card-title class="layout justify-center"> {{ firstname }} {{ surname }} </v-card-title>
                <v-card-subtitle class="layout justify-center">{{ email }} </v-card-subtitle>
                
              </v-card>
            </v-flex>
            <v-flex>
              <v-list color="transparent" class="text-center">
                <v-list-item>
                  <v-list-item-title class="cyan--text text--darken-1">Notifications</v-list-item-title>

                  <v-list-item-subtitle> {{ date }} </v-list-item-subtitle>
                </v-list-item>
              </v-list>
            </v-flex>
            <v-flex>
              <v-card class="ma-5" shaped elevation="10">
                <v-list>
                  <v-list-item>
                    <v-list-item-avatar size="10" color="cyan darken-1"></v-list-item-avatar>
                    <v-list-item-title class="ml-n2">Edit user Details</v-list-item-title>
                  </v-list-item>
                  <v-divider></v-divider>
                  <v-divider></v-divider>
                </v-list>
                <form @submit.prevent="EditUser">

                <v-list-item class="mt-n2">
                    <v-text-field label="Firstname"  :placeholder= firstname min="10" ></v-text-field>
                  </v-list-item>
                <v-list-item class="mt-n5">
                    <v-text-field label="Surname" :placeholder= surname></v-text-field>
                  </v-list-item>
                <v-list-item class="mt-n5">
                    <v-text-field label="Email" :placeholder= email></v-text-field> 
                  </v-list-item>
                <v-list-item class="mt-n5">
                    <p class=" mt-4 mr-2 cyan--text text--darken-1">UserId:</p>
                    <v-list-item-subtitle>2 times in a day before food</v-list-item-subtitle>
                  </v-list-item>
                <v-btn
                  class="mx-2 mr-n10"
                  fab
                  dark
                  large
                  color="cyan"
                  style="position:relative; left:220px; bottom:10px;"
                >
                  <v-icon dark>
                    mdi-pencil
                  </v-icon>
                  Edit
                </v-btn> 
                </form>
                  
              </v-card>
            </v-flex>
            
          </v-container>
        </v-app>
      </v-flex>
      <v-flex md9 style="margin-top:0px;">
        <v-app style="background-color:;  border-radius: 40px 40px 40px 40px; margin-top:10px;" shaped elevation="10" >
          <v-container>
            <v-flex>
              <v-list class="mt-5">
                <v-list-item>
                  <v-list-item-title class="cyan--text text--darken-1">Administration Page</v-list-item-title>
                  <v-list-item-action>
                    <v-btn class="ma-2" tile outlined color="cyan darken-1" @click= overview()>
                      <v-icon left>fas fa-eye</v-icon>OverView
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
                      <v-list-item-subtitle>See all System Users</v-list-item-subtitle>
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
                      <v-list-item-subtitle>See all User Posts</v-list-item-subtitle>
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
                      <v-list-item-subtitle>See all uploaded Files</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
                     </v-col>
                   </v-row>
                  </v-col>
              </v-row>
            </v-flex>
             <v-flex>
            <div id="commentsList">
              <div class="row " style=" margin:40px; box-shadow: 10px 0px 10px 0px grey;">
                <div class="col-md-4">
                  <p>Number Of Users</p>
                 <h2>{{ this.usersCount }}</h2>
                </div>
                <div class="col-md-4">
                  <p>Number Of Posts</p>
                  <h2>{{ this.postsCount }}</h2>
                </div>
                <div class="col-md-4">
                  <p>Number Of Uploads</p>
                  <h2> -- </h2>
                </div>
                </div>
                <div v-if= "view  === 'Users'" style="text-align:center;">
                  <v-divider></v-divider>
                  <h2> Users </h2>
                  <v-divider></v-divider>
                  <v-simple-table >
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th class="text-left">
                            FirstName
                          </th>
                          <th class="text-left">
                            Surname
                          </th>
                          <th class="text-left">
                            Email
                          </th>
                          <th class="">
                            TimeStamp
                          </th>
                          
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="item in users"
                          :key="item"
                        >
                          <td>{{ item.user.firstname }}</td>
                          <td>{{ item.user.surname }}</td>
                          <td>{{ item.user.email }}</td>
                          <td>{{ item.user.ProfilePic }}</td>
                          <td> <v-btn color="warning" @click="viewUser(item.user.email)"> View User</v-btn>  </td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                  </div>
                  
                  <div v-else-if= "view === 'Posts'" style="text-align:center;">
                    <v-divider></v-divider>
                    <h2> Posts </h2>
                    <v-divider></v-divider>
                    <v-simple-table>
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th class="text-left">
                            Username
                          </th>
                          <th class="text-left">
                            Post
                          </th>
                          <th class="text-left">
                            Email
                          </th>
                          <th class="">
                            Profile Pic
                          </th>
                          
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="post in userPosts"
                          :key="post"
                          style="text-align:left;"
                        > 
                          <!-- <td> {{ userPosts }} </td> -->
                          <td>{{ post.user }}</td>
                          <td>{{ post.message }}</td>
                          <td>{{ post.email }}</td>
                          <td>{{ post.timestamp }}</td>
                          <td><button style="border:none; background-color:red" class=" col-md-12   mr-0"><small><i class="fas fa-share fa-lg" @click="viewFullPost(post.posts.email)"> Delete </i></small></button></td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
            
                    </div>
                    <div v-else-if= "view === 'Post'" style="text-align:center;">
                    <v-divider></v-divider>
                    <h2> Posts </h2>
                    <v-divider></v-divider>
                    <v-simple-table>
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th class="text-left">
                            Username
                          </th>
                          <th class="text-left">
                            Post
                          </th>
                          <th class="text-left">
                            Email
                          </th>
                          <th class="">
                            Profile Pic
                          </th>
                          
                        </tr>
                      </thead>
                      <tbody v-if= "userPosts.length > 0 ">
                          
                        <tr
                          v-for="post in userPosts"
                          :key="post"
                          style="text-align:left;"
                          > 
                          <td>{{ post.user| }}</td>
                          <td>{{ post.message }}</td>
                          <td>{{ post.email }}</td>
                          <td>{{ post.timestamp }}</td>
                          <td><button style="border:none; background-color:red" class=" col-md-12   mr-0"><small><i class="fas fa-share fa-lg" @click="viewFullPost(post.posts.email)"> Delete </i></small></button></td>
                        </tr>
                        
                      </tbody>
                    </template>
                  </v-simple-table>
            
                    </div>
                  </div>
                      
                        
                </div> 
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
import Navbar from '@/components/Navbar.vue'
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
    usersCount: '',
    postsCount:'',
    arrayEvents: null,
    date2: new Date().toISOString().substr(0, 10),
    firstname: '',
    surname: '',
    previewImage: '',
    email:'',
    date: Date.now(),
    view: '',
    headers: [
          {
            text: 'Firstname',
            align: 'start',
            sortable: false,
            value: 'Firstname',
          },
          { text: 'Surname', value: 'surname' },
          { text: 'Email', value: 'email' },
          { text: 'ProfilePic', value: 'profilePic' },
          { text: 'CoverPic', value: 'coverPic' },
          // { text: 'Iron (%)', value: 'iron' },
        ],
    postHeaders: [
          {
            text: 'Username',
            align: 'start',
            sortable: false,
            value: 'username',
          },
          { text: 'Surname', value: 'surname' },
          { text: 'Email', value: 'email' },
          { text: 'ProfilePic', value: 'profilePic' },
          { text: 'CoverPic', value: 'coverPic' },
          // { text: 'Iron (%)', value: 'iron' },
        ]
  }),
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    }
  
  },
  components: {
    Navbar,
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
        this.getUsersCount()
        this.getPostsCount()
        this.getUser()
        console.log(this.view)
    },
      
      methods:{
        
        functionEvents (date) {
          const [,, day] = date.split('-')
          if ([12, 17, 28].includes(parseInt(day, 10))) return true
          if ([1, 19, 22].includes(parseInt(day, 10))) return ['red', '#00f']
          return false
        },
          async getUsers(){
            this.users = []
            this.view = 'Users'
            const usersRef = await db.collection("users").get().then(snapshot => {
                snapshot.forEach(doc => {
                    const user = doc.data()
                    console.log(user)
                    // user.id = doc.id
                    this.users.push({ user })
                    
                })
                
            })
            .catch(error => {
                console.error(error)
            })
        console.debug('fetchUser return: ', this.users);
            
    },

        async getPosts(){
          // location.reload()
          console.log(this.view)
          this.userPosts = []
          const usersRef = await db.collection("posts").get().then(snapshot => {
            snapshot.forEach(doc => {
              this.view = "Posts"
              const user = doc.data()
                  // user.id = doc.id
                  this.userPosts.push(user)                    
                })
              console.log(this.userPosts)
                          
    })
      },
    async deleteUser(key){
        console.log("thiss is user", key)
        if (confirm("This user will be deleted", key)){
          console.log(key)
          db.collection("users").doc(key).delete()
          db.collection("posts").doc(key).delete()
        }else{
          console.log("we are here")
        }
        },

    // async deleteUser(key){
    //         db.collection("users").doc(key).delete()
    //     },
    getUsersCount(){
      db.collection('users').get()
        .then(snapshot => this.usersCount = snapshot.size);
    },
    getPostsCount(){
      db.collection('posts').get()
        .then(snapshot => this.postsCount = snapshot.size);
    },
    overview(){
      location.reload()
    },
  
  viewUser(email){
      alert(email)
      db.collection("users").doc(email).get().then(snapshot => {
            this.firstname = snapshot.data().firstname
            this.surname = snapshot.data().surname
            this.email = snapshot.data().email
            this.previewImage = snapshot.data().profilePic    
            })
      this.viewUserPosts(email)
    },
    async viewUserPosts(email){
      alert("user posts")
      console.log(this.view)
          this.userPosts = []
          const usersRef = await db.collection("posts").doc(email).get().then(snapshot => {
              this.view = "Post"
              const post = snapshot.data()
              console.log(post)
              if (post !=  undefined ){
                this.userPosts.push(post)                    
                console.log(this.userPosts)

              }else{
                this.userPosts = []
              }
          })
    },
     
  getUser(){
    this.users = []
    console.log("we are here")
    Firebase.auth().onAuthStateChanged(function(user){
        if (user){
          this.email = user.email
            console.log(this.email)
            db.collection("users").doc(this.email).get().then(snapshot => {
              console.log(snapshot)
                this.firstname = snapshot.data().firstname
                this.surname = snapshot.data().surname
                this.previewImage = snapshot.data().profilePic
                    
                })
        } else {
          // No user is signed in.
        }
        }.bind(this)
        )
    
    },

  },
   
}
</script>
<style scoped>
.rounded {
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
}
</style>