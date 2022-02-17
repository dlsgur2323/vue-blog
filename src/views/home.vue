<template>
    <section>
        <article>
            <Post v-bind:propsdata="'hi'"></Post>
        </article>
        <article>
            <Post v-bind:propsdata="'hi'"></Post>
        </article>
        <article>
            <Post v-bind:propsdata="''"></Post>
        </article>
        <article>
            <Post v-bind:propsdata="'hi'"></Post>
        </article>
        <article>
            <Post v-bind:propsdata="'hi'"></Post>
        </article>
        <article>
            <Post v-bind:propsdata="'hi'"></Post>
        </article>
    </section>
</template>

<script>
    import Post from '@/components/post.vue';
    export default {
        components : {
            Post : Post,
        }
    }
</script>

<style scoped>
    section{
        display: flex;
        flex-wrap: wrap;
    }
    
    @media screen and (min-width : 1440px) {
        section article{
            width: calc(25% - 15px);
            margin-right : 20px;
        }
        section article:nth-of-type(4n){
            margin-right : 0px;
        }
    }

    @media screen and (min-width : 1140px) and (max-width : 1439px) {
        section article{
            width: calc(33.33% - 13.3px);
            margin-right : 20px;
        }
        section article:nth-of-type(3n){
            margin-right : 0px;
        }
    }

    @media screen and (min-width : 681px) and (max-width : 1140px) {
        section article{
            width: calc(50% - 10px);
            margin-right : 20px;
        }
        section article:nth-of-type(2n){
            margin-right : 0px;
        }
    }
    @media screen and (max-width : 680px) {
        section article{
            width: 100%;
            margin-right : 0px;
        }
    }
    section article{
        margin-bottom : 20px;
        box-sizing: border-box;
    }
</style>