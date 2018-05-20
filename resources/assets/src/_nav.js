let Permissions
try {
  Permissions = JSON.parse(localStorage.getItem('permission'))
} catch (error) {
  console.log(error)
  Permissions = []
}
let isPermission = (param) => {
  let isHide = true
  for (const key in Permissions) {
    console.log(Permissions[key]['name'])
    if (Permissions[key]['name'] === param) {
      isHide = false
    }
  }
  return isHide
}

export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      hide: false
    },
    {
      name: 'User Manage',
      url: '/user',
      icon: 'icon-user',
      hide: isPermission('user_manage')
    },
    {
      name: 'Role Manage',
      url: '/role',
      icon: 'fa fa-shield',
      hide: isPermission('role_manage'),
      children: [
        {
          name: 'Role',
          url: '/role',
          icon: 'fa fa-shield',
          hide: isPermission('role_manage')
        },
        {
          name: 'Permission',
          url: '/permission',
          icon: 'fa fa-share-alt',
          hide: isPermission('permission_manage')
        }
      ]
    }
  ]
}
