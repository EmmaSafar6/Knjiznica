const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/login', component: () => import('pages/LoginPage.vue') },
      { path: '/logout', component: () => import('pages/LogoutPage.vue') },
      { path: '/lokacija', component: () => import('pages/LokacijaPage.vue') },
      { path: '/o_nama', component: () => import('pages/ONamaPage.vue') },
      { path: '/popis_knjiga_baza', component: () => import('pages/PopisKnjigaBazaPage.vue') },
      { path: '/popis_knjiga', component: () => import('pages/PopisKnjigaPage.vue') },
      { path: '/korisnici', component: () => import('pages/KorisniciPage.vue') },
      { path: '/registracija', component: () => import('pages/RegistracijaPage.vue') },
      { path: '/rezervirano', component: () => import('pages/RezerviranoPage.vue') },
      { path: '/unos', component: () => import('pages/UnosPage.vue') }
    ]
  },
  {
    path: '/admin',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      { path: '', component: () => import('pages/AdminPage.vue') },
      { path: '/admin/popis_knjiga', component: () => import('pages/PopisKnjigaPage.vue') },
      { path: '/admin/pretrazivanje', component: () => import('pages/PretrazivanjePage.vue') },
      { path: '/admin/korisnici', component: () => import('pages/KorisniciPage.vue') },
      { path: '/admin/unos', component: () => import('pages/UnosPage.vue') },
      { path: '/logout', component: () => import('pages/LogoutPage.vue') },
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
