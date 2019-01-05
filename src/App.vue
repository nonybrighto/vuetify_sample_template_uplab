<template>
  <v-app dark>
    <v-toolbar class="white" light>
      <v-toolbar-title v-text="title" ></v-toolbar-title>
    </v-toolbar>

    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      //
      title:"UPLAB DESIGN"
    }
  }
}
</script>
