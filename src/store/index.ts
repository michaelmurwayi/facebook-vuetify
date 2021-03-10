import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from '../firebase'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        userProfile:{}
    },
    mutations:{
        setUserProfile(state, val){
            state.userProfile=val
        }
    },
    actions:{
        async login({dispatch}, form){
            // sign in user
            const { user } = await firebase.auth.signInWithEmailAndPassword(form.email, form.password)
            // fetch user profile and ser in state
            dispatch('fetchUserProfile', user)
        },
        async  fetchUserProfile({ commit }, user){
            // fetch user profile
            const userProfile = await firebase.usersCollection.doc(user.uid).get()

            commit('setUserProfile', userProfile.data())

            router.push({path:'dashboard'})
        },

    },
    
})