<template>
    <v-container fluid>
        <v-layout justify-center>
            <v-flex lg6>
                <h1 class="main-header">Search Wiki</h1>
                <input type="text" class="search-bar" placeholder="Search here" autofocus v-model="searchQuery" @keyup="search" />
                <p class="text-center">
                    <span class="random" @click="randomArticle">Get Random Article</span>
                </p>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            searchQuery: '',
            results: [],
            timerArr: []
        }
    },
    methods: {
        randomArticle() {
            console.log('random')
            let win = window.open('https://en.wikipedia.org/wiki/Special:Random', '_blank')
            win.focus()
        },
        search() {
            console.log('search')
            this.results = []
            for(var i = 0; i < this.timerArr.length; i++) {
                clearTimeout(this.timerArr[i])
            }
            this.timerArr.push(setTimeout(() => {
                axios.get('https://en.wikipedia.org/w/api.php?origin=*&action=query&format=json&generator=search&prop=extracts&exintro=1&explaintext=1&exsentences=2&gsrsearch=' + encodeURIComponent(this.searchQuery))
                    .then((res) => {
                        for(let key in res.data.query.pages) {
                            this.results.push(res.data.query.pages[key])
                        }
                    })
                    .catch((res) => {
                        console.log(res)
                    })
            }, 700))
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

.text-center {
    text-align: center;
}

.random {
    opacity: 0.6;
    font-size: 15px;
}

.random:hover {
    text-decoration: underline;
    color: rgba(66,139,202,1.0);
    cursor: pointer;
}

.search-bar {
    padding-left: 1em;
    margin: 2em 0em;
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
