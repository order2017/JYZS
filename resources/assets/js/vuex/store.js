import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({

    state: {

        new_list:[],

    },

    getters: {

    },

    mutations: {

    },

    actions: {
        getNews(store) {
            Vue.axios.get('/api/news').then((response) => {
                console.log(response.data);
                store.state.new_list = response.data;
            })
        },
    }

});