
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/SplashPage.vue') },
      {
        path: 'Home',
        component: () => import('pages/HomePage.vue')
        // beforeEnter(to, from, next) {
        //   if (!AccessControlUtils.menusVisible('Pacientes')) {
        //     next('/:catchAll(.*)*');
        //   } else {
        //     next();
        //   }
        // },
      },
    ]
  },
  {
    path: '/Login',
    component: () => import('layouts/EmptyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/LoginPage.vue'),}
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
