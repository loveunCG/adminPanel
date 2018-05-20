import {Login, UserInfoDetail, getPermissionAll, GetRole} from '../../api'
import router from '../../router'

export default {
  state: {
    user: null,
    product: [],
    user_role: [],
    token: '',
    role_id: null,
    permission_id: null,
    userList: [],
    roleList: [],
    permissionList: [],
    field: [],
    current_id: null
  },
  mutations: {
    clearUser (state) {
      state.user = null
      localStorage.removeItem('user_token')
      localStorage.removeItem('user_role')
      localStorage.removeItem('permission')
    },
    setPermissionList (state, payload) {
      state.permissionList = payload
    },
    setPermission (state, payload) {
      localStorage.setItem('permission', JSON.stringify(payload))
    },
    setUserList (state, payload) {
      state.userList = payload
    },
    setRoleList (state, payload) {
      state.roleList = payload
    },
    setCurrentId (state, payload) {
      state.current_id = payload
    },
    clearCurrentId (state) {
      state.current_id = null
    },
    setCurretRoleId (state, payload) {
      state.role_id = payload
    },
    clearRoleId (state) {
      state.role_id = null
    },
    clearPermissionId (state) {
      state.permission_id = null
    },
    setCurrentPermission (state, payload) {
      state.permission_id = payload
    },
    setUser (state, payload) {
      state.user = payload
      localStorage.setItem('user', payload)
    },
    setToken (state, payload) {
      state.token = payload
      localStorage.setItem('user_token', payload)
    },
    setRole (state, payload) {
      state.role = payload
      localStorage.setItem('user_role', payload)
    }
  },
  actions: {
    login ({commit}, payload) {
      Login(payload).then(response => {
        let data = response.data
        if (data.response_code) {
          let token = data.token
          let user = data.data
          commit('setUser', user)
          commit('setToken', token)
          commit('setRole', user.role)
          commit('setPermission', user.permission)
          router.push('/dashboard')
          location.reload()
        } else {
          commit('setLoading', true)
          commit('setError', data.message)
        }
      }).catch(error => {
        commit('setLoading', true)
        commit('setError', 'Server has error!')
        console.log(error)
      })
    },
    errorProc ({commit}, payload) {
      if (payload.response === 400 || payload.response === 401) {
        commit('clearUser')
        location.reload()
      } else {
        location.reload()
      }
    },
    logout ({commit}) {
      commit('clearUser')
      router.push('/login')
      location.reload()
    },
    getUserAll ({commit}) {
      UserInfoDetail().then(data => {
        if (data.data.response_code) {
          commit('setUserList', data.data.data)
        } else {

        }
      }).catch(error => {
        router.push('/error')
        commit('clearUser')
        location.reload()
        console.log(error.response)
      })
    },
    getRoleAll ({commit}) {
      GetRole().then(data => {
        if (data.data.response_code) {
          commit('setRoleList', data.data.data)
        } else {
        }
      }).catch(error => {
        router.push('/error')
        commit('clearUser')
        location.reload()
        console.log(error.response)
      })
    },
    getPermission ({commit}) {
      getPermissionAll().then(data => {
        console.log(data.data)
        if (data.data.response_code) {
          commit('setPermissionList', data.data.data)
        } else {
        }
      }).catch(error => {
        router.push('/error')
        commit('clearUser')
        location.reload()
        console.log(error.response)
      })
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    field (state) {
      return state.field
    },
    userList (state) {
      return state.userList
    },
    role (state) {
      return state.user_role
    },
    currentId (state) {
      return state.current_id
    },
    roleId (state) {
      return state.role_id
    },
    permissionId (state) {
      return state.permission_id
    },
    roleList (state) {
      return state.roleList
    },
    permissionList (state) {
      return state.permissionList
    }
  }
}
