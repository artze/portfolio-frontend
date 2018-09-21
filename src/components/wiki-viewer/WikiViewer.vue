<template>
    <v-container fluid>
        <v-layout justify-center>
            <v-flex lg6>
                <h1 class="main-header">Search Wiki</h1>
                <input type="text" class="search-bar" placeholder="Search here" autofocus v-model="searchQuery" @keyup="search" />
                <p class="random" @click="randomArticle">Get Random Article</p>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            searchQuery: ''
        }
    },
    methods: {
        randomArticle() {
            console.log('random')
        },
        search() {
            console.log('search')
        }
    }
}
</script>

<style scoped>
.main-header {
    text-align: center;
    font-weight: 200;
    margin-bottom: 1em;
}

.random {
    opacity: 0.6;
    margin-top: 1em;
    text-align: center;
    font-size: 15px;
}

.random:hover {
    text-decoration: underline;
    color: rgba(66,139,202,1.0);
    cursor: pointer;
}

.search-bar {
    padding-left: 1em;
    margin-top: 2em;
    border-radius: 0;
    height: 3em;
    border: 1px solid #c7c6c6;
    width: 100%;
}

.search-bar:focus {
    outline: none;
    border: 1px solid #aaacff;
}
</style>
