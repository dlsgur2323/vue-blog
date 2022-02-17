<template>
    <div class="post">
        <div v-if="header" class="header" @click="goPost">
            header
        </div>
        <div class="body">
            body
        </div>
        <div class="footer">
            footer
        </div>
    </div>
</template>

<script>
    export default {
        props : ['propsdata'],
        data : function() {
            return {
                header : this.propsdata
            }
        },
        methods : {
            goPost : function(){
                this.$router.push('/@abcde/post/1234');
            }
        }
    }
</script>

<style scoped>
    .post {
        background: rgb(39, 39, 39);
        width: 100%;
        height: 400px;
        border-radius: 10px;
    }
    .post .header{
        height: 50%;
        cursor: pointer;
    }
    .post .body:nth-of-type(1){
        height: 90%;
        border-top: none;
    }
    .post .body{
        height: 40%;
        border-top: 1px solid rgba(73, 73, 73,0.5);
        border-bottom: 1px solid rgba(73, 73, 73,0.5);
    }
    .post .footer{
        height: 10%;
    }
</style>