<template>
    <body>
       <router-view></router-view>
    </body>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Athiti');
:root {
  --blue: #808AFF;
  --white: #ffffff;
  --lightblue: #626CDB;
  --hoverblue: #626CDB;
  --greytext: #444444;
  --lightyellow: #feffb8;
  --verylightyellow: #ffffe2;
  --lightgrey: #d9dde0;
  --mediumgrey: #c4c5c5;
  --green: #2eb800;
  --red: #bd1c00;
}


body {
  background:#fdfbfd;
  font-family: Athiti, sans-serif;
}
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: auto;
  overflow: auto;
  min-height: 300px;
  /*border: 1px solid steelblue;*/
  padding: 20px;
  border-radius: 5px;
  text-align: center;
}


ion-icon {
  margin-right: 6px;
  margin-left: 6px;
}

select {
  margin: 2px 2px 2px 2px;
}
div {
  margin: 6px 6px 6px 6px;
}

.btn {
  display: inline-block;
  background: #8E97FD;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 38px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
  width: 500px;
  height: 63px;
  border: 1px solid #EBEAEC;
}

img {
  border-radius: 35% 61% 38% 62% / 34% 34% 65% 66% ;
  height: 200px;
  width: 100%;
}

@media all and (max-width: 800px){
  .btn {
    width: 350px;
  }
}

.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  width: 100%;
}
</style>
