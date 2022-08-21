import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const SET_TOKEN = 'SET_TOKEN'

export const LOGIN = 'LOGIN'

const baseUrl = process.env.baseUrl || 'https://agora.reality-x.space/api'

export default new Vuex.Store({
  state: {
    token: ''
  },
  getters: {
  },
  mutations: {
    [SET_TOKEN]: (state, token) => {
      sessionStorage.setItem('access_token', token)
      state.token = token
    }
  },
  actions: {
    [LOGIN]: async ({ commit }, { login, password }) => {
      const fd = new FormData()
      fd.append('email', login)
      fd.append('password', password)

      try {
        const result = await fetch(baseUrl + '/auth/jwt/create', {
          method: 'POST',
          body: fd
        })

        if (result.status === 200) {
          const data = await result.json()
          commit(SET_TOKEN, data.access)
          return data.access
        }
      } catch (e) {
        console.log(e)
      }

      return false
    }
  },
  modules: {
  }
})
