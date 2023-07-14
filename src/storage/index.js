import {createStore} from "vuex"

const store = createStore({
  state() {
    return {
      favorites: []
    }
  },
  mutations: {
    addPhoto(state, photo) {
      state.favorites.push(photo)
    },
    removePhoto(state, photo) {
      state.favorites = state.favorites.filter((st) => st.id !== photo.id)
    }
  },
  actions: {
    addToFavs(context, photo){
      context.commit('addPhoto', photo)
    },
    removeFromFavs(context, photo){
      context.commit('removePhoto', photo)
    }
  },
  getters: {
    getFavs(state) {
      return state.favorites 
    }
  }
})

export default store;