<template>
    <header>
        <div class="logo">
            <router-link to="/">LOGO</router-link>
        </div>
        <ul class="btnList">
            <li>
                <router-link to="search" class="search">검색</router-link>
            </li>
            <li>
                <a href="" class="login">로그인</a>
            </li>
        </ul>
    </header>
    <main>
        <router-view></router-view>
    </main>
    <footer>

    </footer>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    header{
      display: flex;
      padding: 15px 0px;
    }
    header .logo{
        flex: 10%;
    }
    header .logo a{
        font-size: 25px;
        font-family: system-ui;
    }
    header .btnList{
        flex: 90%;
        display: flex;
        margin: 0px;
        padding: 0px;
        justify-content: end;
    }   
    header .btnList li{
        margin-left: 10px;
    }
    header .btnList li a{
        width: 80px;
        height: 30px;
        line-height: 30px;
    }
    header .btnList li .login{
        display: block;
        background: white;
        color: rgb(30, 30, 30);
        text-align: center;
        border-radius: 30px;
        font-weight: bold;
    }
</style>