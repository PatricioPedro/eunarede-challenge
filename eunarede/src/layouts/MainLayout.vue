<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="constrain bg-secondary text-bold text-white-8" bordered>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="add"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title class="text-subtitle1">
          Eu na Rede Desafio
        </q-toolbar-title>

        <div>By Patricio Wilder Barros Pedro</div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  data () {
    return {
    }
  }
}
</script>
