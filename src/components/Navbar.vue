<template>
   <nav>
      <v-navigation-drawer  v-model="drawer" dark app mini-variant mini-variant-width="105" class="cyan darken-1">
          <v-list>
               <v-list-item class="mb-12">
                  <v-list-item-action>
                  </v-list-item-action>
              </v-list-item >
          </v-list>
              <v-list flat>
               <v-list-item  router to="admin">
                  <v-list-item-content>
                      <v-icon class="mb-2">Admin</v-icon>
                      <v-list-item-subtitle align="center">Admin</v-list-item-subtitle>
                  </v-list-item-content>  
              </v-list-item>
             </v-list>
             <v-list flat>
               <v-list-item  router to="/profile">
                  <v-list-item-content>
                      <v-icon class="mb-2">fas fa-signature</v-icon>
                      <v-list-item-subtitle align="center">back to site</v-list-item-subtitle>
                  </v-list-item-content>  
              </v-list-item>
             </v-list>
          <v-list  style="position: absolute; bottom:0" class="ml-3" flat>
            <v-list-item  router to="/">
                  <v-list-item-action>
                      Logout
                     <v-icon right>fas fa-sign-out-alt</v-icon>
                  </v-list-item-action>
              </v-list-item>
          </v-list>
      </v-navigation-drawer>
   </nav>
</template>
<script>
export default {
   data: () => ({
      drawer: true,

     
    }),
    components: {

  },

   
}
</script>
<style scoped>
.border {
  border-left: 4px solid #0ba518;
}
/*.v-list-item--link::before { background-color: green; }*/

</style>
