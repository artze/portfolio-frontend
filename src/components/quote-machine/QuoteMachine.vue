<template>
    <v-container fluid fill-height :class="selectedTheme">
        <v-layout align-center justify-center>
            <v-flex lg4 class="quote-box">
                <p class="quote-text quote" :class="selectedTheme">
                    <span id="quotemarks">“</span>
                    {{ quoteObj.quote.body }}
                </p>
                <p class="text-right quote-text" v-bind:class="selectedTheme">
                    -{{quoteObj.quote.author}}
                </p>
                <div class="btn-area">
                    <button class="btn-custom btn-twitter pull-left"
                        @click="tweet"
                        :class="selectedTheme">
                        <i class="fab fa-twitter" aria-hidden="true" style="font-size: 22px"></i>
                    </button>
                    <button class="btn-custom pull-right"
                        @click="getQuote"
                        :class="selectedTheme">
                        New Quote
                    </button>
                </div>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css'
import axios from 'axios'

export default {
    data() {
        return {
            themeClasses: ['theme1', 'theme2', 'theme3', 'theme4', 'theme5', 'theme6', 'theme7'],
            selectedIndex: '',
            selectedTheme: '',
            quoteObj: {
                quote: {}
            }
        }
    },
    methods: {
        changeColor: function() {
            var randIndex
            do {
                randIndex = Math.floor(Math.random() * this.themeClasses.length)
            } while(this.selectedIndex === randIndex)
            this.selectedIndex = randIndex
            this.selectedTheme = this.themeClasses[this.selectedIndex]
        },
        getQuote() {
            this.changeColor()
            axios.get('https://favqs.com/api/qotd')
                .then((res) => {
                    this.quoteObj = res.data
                })
                .catch((res) => {
                    console.log(res)
                })
        },
        tweet() {
            window.open('https://twitter.com/intent/tweet' + '?' + 'hashtags=quote&' + 'text="' + encodeURI(this.quoteObj.quote.body) + '"' + encodeURI(' ' + this.quoteObj.quote.author))
        }
    },
    mounted() {
        this.getQuote()
    }
}
</script>

<style scoped>
.pull-left {
    float: left;
}

.pull-right {
    float: right;
}

.quote-box {
    background-color: #FFFFFF;
    border-radius: 3px;
    padding: 60px 80px 40px 80px;
}

#quotemarks {
    font-size: 80px;
    font-family: "Lucida Console";
}

.quote-text.quote {
    font-family: Georgia;
    font-size: 30px;
    line-height: 40px;
}

.text-right {
    text-align: right;
}

.btn-area .theme1, div.theme1 {
    background-color: #AA3323;
    -webkit-transition: background-color 1000ms linear;
    transition: background-color 1000ms linear;
}

.btn-area .theme2, div.theme2 {
    background-color: #F29A2E;
    -webkit-transition: background-color 1000ms linear;
    transition: background-color 1000ms linear;
}

.btn-area .theme3, div.theme3 {
    background-color: #385273;
    -webkit-transition: background-color 1000ms linear;
    transition: background-color 1000ms linear;
}

.btn-area .theme4, div.theme4 {
    background-color: #36B1BF;
    -webkit-transition: background-color 1000ms linear;
    transition: background-color 1000ms linear;
}

.btn-area .theme5, div.theme5 {
    background-color: #5A0011;
    -webkit-transition: background-color 1000ms linear;
    transition: background-color 1000ms linear;
}

.btn-area .theme6, div.theme6 {
    background-color: #261B2F;
    -webkit-transition: background-color 1000ms linear;
    transition: background-color 1000ms linear;
}

.btn-area .theme7, div.theme7 {
    background-color: #F2C84B;
    -webkit-transition: background-color 1000ms linear;
    transition: background-color 1000ms linear;
}

.quote-text.theme1 {
    color: #AA3323;
    -webkit-transition: color 1000ms linear;
    transition: color 1000ms linear;
}

.quote-text.theme2 {
    color: #F29A2E;
    -webkit-transition: color 1000ms linear;
    transition: color 1000ms linear;
}

.quote-text.theme3 {
    color: #385273;
    -webkit-transition: color 1000ms linear;
    transition: color 1000ms linear;
}

.quote-text.theme4 {
    color: #36B1BF;
    -webkit-transition: color 1000ms linear;
    transition: color 1000ms linear;
}

.quote-text.theme5 {
    color: #5A0011;
    -webkit-transition: color 1000ms linear;
    transition: color 1000ms linear;
}

.quote-text.theme6 {
    color: #261B2F;
    -webkit-transition: color 1000ms linear;
    transition: color 1000ms linear;
}

.quote-text.theme7 {
    color: #F2C84B;
    -webkit-transition: color 1000ms linear;
    transition: color 1000ms linear;
}

.btn-custom {
    color: #FFFFFF;
    padding: 10px 20px;
    border-radius: 3px;
}

.btn.btn-custom:hover {
    color: #FFFFFF;
    opacity: 0.9;
    outline: none;
}

.btn.btn-custom:focus {
    color: #FFFFFF;
    outline: none;
}

.btn.btn-custom:active {
    color: #FFFFFF;
    opacity: 0.9;
    outline: none;
}

.btn-twitter {
    padding: 8px 11px;
}
</style>
