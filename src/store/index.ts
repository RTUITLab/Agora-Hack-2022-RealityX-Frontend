import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// mutations
export const SET_TOKEN = 'SET_TOKEN'
export const SET_PROJECT = 'SET_PROJECT'

// actions
export const LOGIN = 'LOGIN'
export const CREATE_PROJECT = 'CREATE_PROJECT'

const baseUrl = process.env.baseUrl || 'https://agora.reality-x.space/api'

export default new Vuex.Store({
  state: {
    token: '',
    id: 0
  },
  getters: {
  },
  mutations: {
    [SET_TOKEN]: (state, token) => {
      sessionStorage.setItem('access_token', token)
      state.token = token
    },
    [SET_PROJECT]: (state, id) => {
      sessionStorage.setItem('project_id', id)
      state.id = id
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
    },
    [CREATE_PROJECT]: async (context, { jsonData, template }) => {
      const fd = new FormData()

      const id = Math.floor(Math.random() * 1001).toString()
      fd.append('project_id', id)
      fd.append('json', JSON.stringify(jsonData))
      fd.append('template', template)

      const headers = new Headers()
      headers.append('Authorization', 'Bearer ' + sessionStorage.getItem('access_token'))

      try {
        const result = await fetch(baseUrl + '/app/pages', {
          method: 'POST',
          body: fd,
          headers: headers
        })

        if (result.status === 200) {

          return id
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
