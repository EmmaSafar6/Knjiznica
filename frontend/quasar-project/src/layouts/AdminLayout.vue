<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title class="text-h2 text-weight-bold">
          {{ title }}
        </q-toolbar-title>

        <div>{{ $q.lang.isoName }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-dark text-white text-h5"
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { computed, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

defineOptions({
  name: 'AdminLayout'
})

let title = computed(() => {
  return "Knjižnica (admin)"
})

const linksList = [
  {
    title: 'Početna',
    caption: 'Početna stranica',
    icon: 'home',
    link: '#/admin'
  },
  {
    title: 'Popis knjiga',
    caption: 'Popis svih knjiga',
    icon: 'local_library',
    link: '#/admin/popis_knjiga'
  },
  {
    title: 'Pretraživanje',
    caption: 'Traži knjigu',
    icon: 'local_library',
    link: '#/admin/pretrazivanje'
  },
  {
    title: 'Popis korisnika',
    caption: 'Popis korisnika',
    icon: 'local_library',
    link: '#/admin/korisnici'
  },
  {
    title: 'Unos knjiga',
    caption: 'Unos nove knjige',
    icon: 'local_library',
    link: '#/admin/unos'
  },
  {
    title: 'Logout',
    caption: 'Logout',
    icon: 'local_library',
    link: '#/admin/logout'
  },
]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

</script>
