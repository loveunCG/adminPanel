import { HTTP } from './http-common'

export const Login = (certificate) => { return HTTP.post('login', certificate) }
export const UserInfoDetail = (userId) => { return HTTP.get('user/getUserInfo', {params: userId}) }
export const GetRole = (role) => { return HTTP.get('role/getRole', {params: role}) }
export const deleteUser = (user) => { return HTTP.post('user/delete', user) }
export const resetPassword = (user) => { return HTTP.post('user/resetPassword', user) }
export const changePass = (user) => { return HTTP.post('user/changePassword', user) }
export const SubmitUser = (user) => { return HTTP.post('user/save', user) }
export const deletePermission = (permission) => { return HTTP.post('permission/delete', permission) }
export const savePermission = (permission) => { return HTTP.post('permission/save', permission) }
export const saveRole = (role) => { return HTTP.post('role/save', role) }
export const deleteRole = (role) => { return HTTP.post('role/delete', role) }
export const getPermissionAll = (permission) => { return HTTP.get('permission/getPermission', {params: permission}) }
export const getSelfInfo = () => { return HTTP.get('user/profile') }
export const registerUser = (user) => { return HTTP.post('register', user) }
