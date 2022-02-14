<template>
    <router-view></router-view>
</template>

<script>
    export default {

    }
</script>

<style>
    body{
        background: rgb(30, 30, 30);
        margin : auto;
        padding : 10px;
        font-family: Arial, Helvetica, sans-serif;
        color: white;
    }
    @media screen and (min-width : 1280px) {
        body {
            width : 1280px;
        }
    }

    @media screen and (min-width : 960px) and (max-width : 1279px) {
        body {
            width : 960px;
        }
    }

    a,a:visited{
        text-decoration: none;
        color: white;
    }
    li{
        list-style: none;
    }
</style>
