import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// getters
export const GET_PREVIEW_URL = 'GET_PREVIEW_URL'

// mutations
export const SET_TOKEN = 'SET_TOKEN'
export const SET_PROJECT = 'SET_PROJECT'

// actions
export const LOGIN = 'LOGIN'
export const CREATE_PROJECT = 'CREATE_PROJECT'
export const SAVE_PROJECT = 'SAVE_PROJECT'
export const UPLOAD_FILE = 'UPLOAD_FILE'

const baseUrl = process.env.VUE_APP_BASE_URL || 'https://agora.reality-x.space/api'

export default new Vuex.Store({
  state: {
    token: '',
    id: 0
  },
  getters: {
    [GET_PREVIEW_URL]: (state) => {
      return baseUrl + '/app/preview?page_id=' + state.id
    }
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
    [CREATE_PROJECT]: async ({ commit }, { jsonData, template }) => {
      const fd = new FormData()

      const id = Math.floor(Math.random() * 1001).toString()
      fd.append('project_id', id)
      fd.append('json', JSON.stringify(jsonData))
      fd.append('template', JSON.stringify({ template, models: {} }))

      const headers = new Headers()
      headers.append('Authorization', 'Bearer ' + sessionStorage.getItem('access_token'))

      try {
        const result = await fetch(baseUrl + '/app/pages', {
          method: 'POST',
          body: fd,
          headers: headers
        })

        if (result.status === 200) {
          const data = await result.json()
          commit(SET_PROJECT, data.page.id)
          return data.page.id
        }
      } catch (e) {
        console.log(e)
      }

      return false
    },
    [SAVE_PROJECT]: async ({ commit }, { jsonData, template }) => {
      const fd = new FormData()
      fd.append('page_id', sessionStorage.getItem('project_id')!)
      fd.append('json', JSON.stringify(jsonData))
      fd.append('template', JSON.stringify({ template, models: {} }))

      const headers = new Headers()
      headers.append('Authorization', 'Bearer ' + sessionStorage.getItem('access_token'))

      try {
        const result = await fetch(baseUrl + '/app/pages/update', {
          method: 'POST',
          body: fd,
          headers: headers
        })

        if (result.status === 200) {
          return true
        }
      } catch (e) {
        console.log(e)
      }

      return false
    },
    [UPLOAD_FILE]: async ({ commit }, file: File) => {
      const fd = new FormData()
      fd.append('name', file.name)
      fd.append('image', file, file.name)

      const headers = new Headers()
      headers.append('Authorization', 'Bearer ' + sessionStorage.getItem('access_token'))

      try {
        const result = await fetch(baseUrl + '/app/products', {
          method: 'POST',
          body: fd,
          headers: headers
        })

        if (result.status === 200) {
          const data = await result.json()
          return data.product.image
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
