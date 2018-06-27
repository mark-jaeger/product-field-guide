<template>
  <div class="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Cabin:400,700');
@import url('https://use.typekit.net/vqa3zmx.css');

$primary-color: #304ffe;

body {
  margin: 0;
  padding: 0;
}

.app {
  font-family: 'Cabin', Helvetica, Arial, sans-serif;
  font-size: 24px;
  line-height: 1.333;
}

h1,
h2,
h3,
h4,
h5,
h6,
h7,
h8 {
  color: $primary-color;
  font-family: 'museo-slab', Helvetica, Arial, sans-serif;
  font-weight: bold;
  line-height: 1;
  margin: 0;
  padding: 0;
}

*[type='text'],
*[type='email'],
*[type='password'],
*[type='search'] {
  box-sizing: border-box;
  padding: 12px;
}
</style>
