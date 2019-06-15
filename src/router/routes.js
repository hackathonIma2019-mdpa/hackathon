
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/car-damage', component: () => import('pages/CarDamage.vue') },
      { path: '/mobility', component: () => import('pages/Mobility.vue') },
      { path: '/economiser', component: () => import('pages/economiser/Econimiser.vue') },
      { path: '/economiser-list', component: () => import('pages/economiser/PageDetail.vue') },
      { path: '/search-car', component: () => import('pages/SearchNewCar.vue') },
      { path: '/cassebrique', component: () => import('pages/games/Cassebrique.vue') },
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
