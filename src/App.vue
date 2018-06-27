<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
</script>
<style lang="sass">
@import url('https://fonts.googleapis.com/css?family=Cabin:400,700')
@import url("https://use.typekit.net/vqa3zmx.css")

$primary-color: #304FFE

body
  margin: 0
  padding: 0

#app
  font-family: 'Cabin', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50
  line-height: 1.333
  font-size: 24px

h1,h2,h3,h4,h5,h6,h7,h8
  font-family: 'museo-slab', Helvetica, Arial, sans-serif
  font-weight: bold
  line-height: 1
  color: $primary-color
  padding: 0
  margin: 0

input[type="text"], input[type="email"], input[type="password"], input[type="search"]
  padding: 12px
  box-sizing: border-box

#nav
  padding: 30px
  a
    font-weight: bold
    color: #2c3e50
    &.router-link-exact-active
      color: #42b983

</style>
