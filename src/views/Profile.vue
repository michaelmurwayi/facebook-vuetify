<template>
    <v-app  style="background-color:#f0f2f5;">
    <v-col style="width:2000px; position:relative; top:-11px; right:-20px; left:-10px;" md="12">
    <v-app-bar
      app
      color="white"
      flat
      elevation="1"
    > 

      <v-avatar style="position:absolute; margin-right:150px;"
        :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
        size="32"
      >
      <v-img
      
      :width="width"
      src="https://mpng.subpng.com/20180622/uz/kisspng-facebook-inc-social-media-computer-icons-social-share-facebook-5b2d58d7da0246.193322341529698519893.jpg"
    ></v-img>
      </v-avatar> 
      <v-responsive max-width="260" max-height="60" class="ml-12 " > 
          <v-text-field
            
            dense
            style="color:black;"
            flat
            hide-details
            rounded
            append-icon="mdi-magnify left"
            background-color="#f0f2f5"
            solo
           
            color="#000"
            placeholder="Search Facebook"
          > </v-text-field>
          
        </v-responsive>

      
       
       <div class="menu-item"><a href=""></a></div>
       <div class="menu-item"><a href=""></a></div>
      
           <v-spacer></v-spacer>
       <v-spacer></v-spacer>
       <v-spacer></v-spacer>
       <v-spacer></v-spacer>
       <v-spacer></v-spacer>
      <v-icon color="grey " size="30" class="ml-2">
        mdi-home-outline
      </v-icon>
      <v-icon color="grey lighten-1" size="30" class="ml-4">
       mdi-account-multiple-outline
      </v-icon>
      <v-icon color="grey lighten-1" size="30" class="ml-6">
        mdi-television
      </v-icon>
      
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
     <v-spacer></v-spacer>
        
       
          

        
        
     <div class="menu-button"><a rounded pill color="grey lighten-1 shrink" 
     style="color:black; 
            background:#f0f2f5; 
            padding:8px; 
            border-radius:20px; 
            text-decoration:none;">Find Friends</a></div>
     
       <v-avatar
        class="hidden-sm-and-down float-right ml-4"
        color="#f0f2f5"
        size="32"
      >
      <v-icon color="black">
        mdi-plus
      </v-icon>
      </v-avatar>
       <v-avatar
        class="hidden-sm-and-down float-right ml-4"
        color="#f0f2f5"
        size="32"
      >
      <v-icon color="black">
        mdi-facebook-messenger
      </v-icon>
      </v-avatar>
      <div class="dropdown" style="margin:10px;">
        <div class="dropdown-list">
        <div class="dropdown-list__item"><a  @click.prevent="logOut">
            <button>
            <small>logout</small>
            </button>
            </a>
            </div>
      </div>
       
        </div>
    
      <div v-if="this.status == 'True'" style="margin:10px;">
        <router-link to="/admin">
        <button>
          <small> Admin</small>
        </button>
        </router-link>
      </div>
      
      <div v-else>
        <v-avatar
        class="hidden-sm-and-down float-right ml-4"
        color="#f0f2f5"
        size="32"
      >
      </v-avatar>
      <v-icon color="black">
        mdi-bell
      </v-icon>
      </div>
        </v-app-bar>
        <v-card col="12" round style="height:500px; background-color:;">
              <v-col cols="12" sm="8">
              <v-sheet class="mt-0"
              min-height="350"
              color="grey"
              style=" left:25%; 
                      position:relative; 
                      background:linear-gradient(white, grey); 
                      border-radius:0 0 10px 10px;"
              top="0">
              <v-img :src= coverPic width="1100px" height="380px" alt=""></v-img>
            <div class="dpupload"><a href="#" style="right:42%; z-index:1;  bottom:0px; margin-bottom:20px; position:absolute;">
                <v-avatar
                class="hidden-sm-and-down float-right ml-4"
                color="#f0f2f5"
                size="38"
                back
            > 
        <label style="background:#f0f2f5; 
                            right:0px; 
                            border:none;
                            content: 'Add cover image'
                            display: block;
                            width: 200px;
                            height: 50px;
                            border-radius:8px; 
                            margin-bottom:20px; 
                            margin-right:20px; 
                            padding:5px; bottom:0; 
                            position:absolute; 
                            text-decoration:none; 
                            color:black; 
                            font-weight:bold;  
                            absolute">
        <input type="file" value="upload" title="Add Cover Image" class="btn btn-xs" placeholder="upload" @change="uploadProfileImage($event)" accept="image/*"  style="background:red;">
        </label>       
        </v-avatar>
        </a></div>
            <label upload image placeholder="Add cover image" style="background:#f0f2f5; 
                            right:0px; 
                            border:none;
                            content: 'Add cover image'
                            display: block;
                            width: 200px;
                            height: 50px;
                            border-radius:8px; 
                            margin-bottom:20px; 
                            margin-right:20px; 
                            padding:5px; bottom:0; 
                            position:absolute; 
                            text-decoration:none; 
                            color:black; 
                            font-weight:bold;  
                            absolute">
            <input type="file" color="black"  id="myFile"  @change="uploadCoverImage($event)" accept="image/*" hidden/>              
            </label>
            </v-sheet>
        
            <v-avatar
                class="mt-n20 ml-6"
                size="158"
                color="white"
                style="border:5px solid #000; bottom:175px; z-index:-0; position:absolute; left:42%; top:250px; "
                >
                <v-img
                :width="width"
                :src= previewImage
                ></v-img>
        
        
                
            </v-avatar>
            <div style="position:relative; left:65%;">

            <v-card-title> {{ firstname}} {{ surname }} </v-card-title>
            <v-card-subtitle> Add Bio </v-card-subtitle>
            </div>
              </v-col>
        <v-divider style="postion:absolute;" inset md="6" cols="12"></v-divider>
        </v-card>
    </v-col>
    <v-card round max-width="500px" style="position:relative; left:150px;">
        <v-card-title>Intro</v-card-title>
        <v-btn
        block
        dark
        elevation="2"
        height="20"
        md3
        style="position:relative; left:0px;"
        >Edit Details</v-btn>
        <v-btn
        block
        elevation="2"
        height="20"
        style="position:relative; left:0px;"
        >Edit Details</v-btn>
        <v-btn
        block
        elevation="2"
        height="20"
        style="position:relative; left:0px;"
        >Edit Details</v-btn>
    </v-card>
    <v-card round max-width="500px" style="position:relative; left:800px; top:-120px">
        <v-text-field placeholder="What's on your Mind" solo style="width:80%; position:relative; left:90px; top:10px;" v-model="newMessage" @keyup.enter= "postMessage()" ></v-text-field>
        <v-divider style="position:relative; top:0px;"></v-divider>
        <div>
             <div class="postnav" style=" padding:10px; position:relative; bottom:0px; width:20vw: background:black; left:0%; top:0px; ">
               <div class="postnavicon"><a style="position:absolute; left:10%; text-decoration:none;" href="">
                 <v-icon color="pink">
                 mdi-video
               </v-icon>
               </a>
               </div>
               <div class="postnavicon" style="position:relative; right:0;"><a style="position:relative; left:30%;" href="">
                    <v-icon color="blue">
                 mdi-flag
               </v-icon>
                 </a>
                 </div>
               <div class="postnavicon"><a href="">
                 <v-icon color="green">
                 mdi-image-video
               </v-icon>
               </a>
               </div>
            
             </div>
        </div>
    </v-card>
    <v-col v-for="post in posts" :key= "post" @change="getPost()">
    <v-card round max-width="500px" style="position:relative; left:800px; top:-80px;">
        <v-card-title> Posted by: {{ post.posts.user }} </v-card-title>
        <v-card-subtitle>posted at: {{ post.posts.timestamp }}</v-card-subtitle>
        <p style="margin-left:120px;"> {{ post.posts.message }} </p>
        <v-divider></v-divider>
        <div class="row mb-0 mt-0">
            <button style="border:none; background-color:Transparent" class=" col-md-4  ml-0 mr-0"><small><i class="far fa-thumbs-up fa-lg" @click="addLike(post.posts.email).disable=true" >Like ({{ post.posts.Likes }}) </i></small></button>
            <button style="border:none; background-color:Transparent" class=" col-md-4  mr-0"><small><i class="far fa-comment fa-lg">Comment</i></small></button>
            <button style="border:none; background-color:Transparent" class=" col-md-4 mr-0"><small><i class="fas fa-share fa-lg" @click="viewFullPost(post.posts.email)" >View Full Post</i></small></button>
        </div>
    </v-card>
    </v-col>
    </v-app>
</template>
<style scoped>
.custom-file-input::before {
  display: inline-block;
  background: linear-gradient(top, #f9f9f9, #e3e3e3);
  border: 1px solid #999;
  border-radius: 3px;
  padding: 5px 8px;
  outline: none;
  white-space: nowrap;
  -webkit-user-select: none;
  cursor: pointer;
  text-shadow: 1px 1px #fff;
  font-weight: 700;
  font-size: 10pt;
}
input[type=file]{
    width:130px;
    color:transparent;
    
}
</style>
<script>
import Firebase  from 'firebase/app'
import 'firebase/storage'
import { db } from '../firebase'
require('firebase/auth')
require('firebase/database')


    export default {
        data(){
            return{
                width: '10',
                size: '',
                posts:[],
                user: 'Users',
                firstname:'',
                surname: '',
                previewImage:"",
                newMessage:'',
                time: '',
                email:'',
                post: '',
                // userId: Firebase.auth().currentUser.uid,
                Likes: 0,
                currentLikes: 0,
                Liked: 'false',
                comment: '',
                comment_user: '',
                comment_time: '',
                coverPic: '',
                status: ''
             }
                },

        mounted(){
            this.getPost()
            this.getUser()
            console.log(this.previewImage)
        // console.debug('fetchUser return: ', this.users);
            // const profilePic = db.collection('users').doc(this.email).get()

        },
        methods:{

        uploadProfileImage(event){
            console.log("we are here")
            console.log("we are here")
            const image = event.target.files[0];
            console.log(image)
            const reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = event =>{
                this.Image = event.target.result;
            };
            // Get a reference to the storage service, which is used to create references in your storage bucket
            var uploadRef = Firebase.storage().ref()
            console.log(uploadRef)
            uploadRef.child(this.email).put(image).then(snapshot =>{
                console.log(image)
            // Ge t a reference to storage holding the image
            uploadRef.child(this.email).getDownloadURL().then( url => {
                    
                console.log(url)
                var profilePic = url
                console.log(profilePic)
                const user = db.collection("users").doc(this.email).update({
                    profilePic : profilePic
                })
                })
            })
            // location.reload()
            
            },
        
        uploadCoverImage(event){
            console.log("cover image")
            const image = event.target.files[0];
            console.log(image)
            const reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = event =>{
                this.Image = event.target.result;
            };
            // const image = event.target.files[0];
            // console.log(image)
            // const reader = new FileReader();
            // reader.readAsDataURL(image);
            // reader.onload = event =>{
            //     this.previewImage = event.target.result;
            //     // console.log(this.previewImage);
            //     // console.log(image);

            // };
            // Get a reference to the storage service, which is used to create references in your storage bucket
            var uploadRef = Firebase.storage().ref()
            console.log(uploadRef)
            uploadRef.child('uploads').child(this.email).put(image).then(snapshot =>{
                console.log(image)
            // Ge t a reference to storage holding the image
            uploadRef.child('uploads').child(this.email).getDownloadURL().then( url => {
                    
                console.log(url)
                var coverPic = url
                const user = db.collection("users").doc(this.email).update({
                    coverPic : coverPic
                })
                })
            })
            
            
            },

        logOut() {
            Firebase.auth().signOut().then(() => {
                Firebase.auth().onAuthStateChanged(() => {
                    this.$router.push('/')
            })
        })
    },
        postMessage(){
            let timestamp = Date.now();
            let newDate = new Date(timestamp * 1000)
            let Hours = newDate.getHours()
            let Minutes = newDate.getMinutes()
            const HourComplete = Hours + ':' + Minutes
            let formatedTime = HourComplete
            const posts = db.collection("posts").doc(this.email).set({
                email: this.email,
                message: this.newMessage,
                timestamp: new Date().toJSON().slice(0,10).replace(/-/g,'/'),
                user: this.firstname + this.surname,
                Likes: this.Likes,

                // timestamp: firebase.firestore.timestamp 
            })
            this.getPost()
            
    },
    postComment(email){
        console.log(email)
        
        var comments = {
            email: this.email,
            comment: this.newComment,
            timestamp: new Date().toJSON().slice(0,10).replace(/-/g,'/'),
            user: this.firstname + this.surname,
            }

        db.collection("posts").doc(email).get().then(snapshot => {
            console.log(snapshot.data())
                var allComments = []
                allComments.push(snapshot.data().comments)
                allComments.push(comments)
                const Posts = db.collection("posts").doc(email).update({
                    comments : allComments
                })
        })
        
    },
    
    getPost(){
        this.posts = []
        console.log("we are getting posts")
        const Posts = db.collection("posts").get().then(snapshot => {
            snapshot.forEach(doc => {
                const posts = doc.data()
                // user.id = doc.id
                this.posts.push({ posts })
            })
        console.log(Posts)
        })
        .catch(error => {
            console.error(error)
        })
        console.debug('fetchUser return: ', this.posts);
        
},
    getUser(){
        this.users = []
        Firebase.auth().onAuthStateChanged(function(user){
            if (user){
                this.email = user.email
                console.log(this.email)
                db.collection("users").doc(this.email).get().then(snapshot => {
                    console.log(snapshot)
                    this.firstname = snapshot.data().firstname
                    this.surname = snapshot.data().surname
                    this.previewImage = snapshot.data().profilePic
                    this.coverPic = snapshot.data().coverPic
                    this.status = snapshot.data().status
                        
                    })
            } else {
                // No user is signed in.
            }
            console.log(this.email)
            console.log(this.firstname)
            console.log(this.previewImage)
            console.log(this.coverPic)
            }.bind(this)
            );
        
},
   addLike (email) {
    if( this.Liked == 'false'){
        console.log(this.Liked)
        db.collection("posts").doc(email).get().then(snapshot => {
                  this.Liked = 'true'
                  var currentLikes = snapshot.data().Likes
                  currentLikes += 1
                  const Posts = db.collection("posts").doc(email).update({
                      Likes : currentLikes
                  })

          })
        this.Liked = 'true'
        console.log(this.Liked)

    }else{
        console.log("already liked")
    }
},
    viewFullPost(email){
        console.log(email)
        const snapshot = db.collection('posts') 
        snapshot.doc(email).
            onSnapshot(function(doc){
                if(  document.getElementById("commentsList").innerHTML == '' ){

                    var data = doc.data().comments 
                    for( var i=0; i < data.length; i++ ){
                        this.comment = data[i].comment;
                        this.comment_user =  data[i].user;   
                        this.comment_time = data[i].email;
                        console.log(this.comment)
                        document.getElementById("commentsList").innerHTML += ` <div class="col-md-12 mb-3 m-2" id="" >
                                <div class="text-left row ">
                                <p> commented By </p>
                                </div>
                                <div class="text-left row ">
                                <p class="ml-4 mr-4"><b> ${this.comment_user} :</b></p>
                                <p> ${this.comment} </p>
                                </div>
                                <div class="row mb-0 mt-0">
                                <button style="border:none; background-color:Transparent" class=" col-md-4  ml-0 mr-0"><small><i class="far fa-thumbs-up fa-lg" >Like</i></small></button>
                                <button style="border:none; background-color:Transparent" class=" col-md-4 mr-0"><small><i class="fas fa-share fa-lg" @click="viewFullPost(post.posts.email)" >Share</i></small></button>
                                </div>
                                <hr>
                                `
                    }
                }else{
                    console.log("we are here")
                }
        
        });
    } 
        },

} // missing closure added

</script>