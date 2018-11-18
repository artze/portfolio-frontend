<template>
    <div>
        <v-layout justify-center>
            <v-flex xs8 sm8 md8 lg8>
                <h1 class="about-header">
                    Hi. I deliver full-fledged Web Applications.
                </h1>
                <p class="about-text">
                    Always looking to automate. Passionate about new technologies. Experience in a wide spectrum of delivery:
                </p>
            </v-flex>
        </v-layout>
        <v-layout justify-center>
            <v-flex xs8 sm8 md8 lg8>
                <v-layout>
                    <v-flex xs4 sm4 md4 lg4>
                        <v-layout justify-center>
                            <div>
                                <img class="about-img" src="../../../assets/images/db.png">
                                <p class="bullet-point">SQL</p>
                                <p class="bullet-point">Sequelize</p>
                                <p class="bullet-point">Elasticsearch</p>
                            </div>
                        </v-layout>
                    </v-flex>
                    <v-flex xs4 sm4 md4 lg4>
                        <v-layout justify-center>
                            <div>
                                <img class="about-img" src="../../../assets/images/server.png">
                                <p class="bullet-point">Linux</p>
                                <p class="bullet-point">nginx</p>
                                <p class="bullet-point">Docker</p>
                                <p class="bullet-point">Nodejs</p>
                                <p class="bullet-point">Spring</p>
                                <p class="bullet-point">DigitalOcean</p>
                            </div>
                        </v-layout>
                    </v-flex>
                    <v-flex xs4 sm4 md4 lg4>
                        <v-layout justify-center>
                            <div>
                                <img class="about-img" src="../../../assets/images/website.png">
                                <p class="bullet-point">Vuejs</p>
                                <p class="bullet-point">Vuetify</p>
                                <p class="bullet-point">HTML</p>
                                <p class="bullet-point">Javascript</p>
                                <p class="bullet-point">CSS</p>
                            </div>
                        </v-layout>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=VT323');

.about-header {
    font-family: 'VT323', monospace;
    font-weight: 200;
    font-size: 3em;
}

.about-text {
    font-family: 'Roboto';
    font-weight: 100;
    font-size: 1.4em;
    color: #757575;
    margin-bottom: 2.5em;
}

.about-img {
    margin-left: auto;
    margin-right: auto;
    display: block;
    height: 70px;
    width: 70px;
    margin-bottom: 2.5em;
}

.bullet-point {
    font-family: 'Roboto';
    font-weight: 100;
    text-align: center;
}

@media only screen and (max-width : 600px) {
    .about-header {
        font-size: 2em;
    }

    .about-text {
        font-size: 0.9em;
    }

    .about-img {
        height: 40px;
        width: 40px;
        margin-bottom: 2em;
    }

    .bullet-point {
        font-size: 0.8em;
    }
}

@media only screen and (min-width : 600px) and (max-width : 960px) {
    .about-header {
        font-size: 2.8em;
    }

    .about-text {
        font-size: 1.2em;
    }

    .about-img {
        height: 50px;
        width: 50px;
        margin-bottom: 2em;
    }
}

@media only screen and (min-width : 1904px) {
    .about-header {
        font-family: 'VT323', monospace;
        font-weight: 200;
        font-size: 5em;
    }

    .about-text {
        font-family: 'Roboto';
        font-weight: 100;
        font-size: 1.4em;
        color: #757575;
        margin-bottom: 3.7em;
    }
}
</style>
