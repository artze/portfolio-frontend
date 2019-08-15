<template>
    <v-layout justify-center>
        <v-flex xs10 sm10 md10 lg10>
            <v-layout class="project-card-layout-section" justify-space-between>
                <v-flex xs12 sm12 md4 lg4 xl4>
                    <v-layout fill-height align-center>
                        <div class="project-card">
                            <h3 class="project-card-title-text">Productivity Tools</h3>
                            <p class="project-card-text">
                                A suite of Web Applications designed to streamline operational processes in my company.
                            </p>
                            <hr>
                            <p class="project-card-text points">
                                <span class="bold">Tech Stack:</span>
                                MySql, Nodejs, Vuejs
                            </p>
                            <v-layout justify-center>
                                <div @click="goToProductivityToolsPage" class="project-card-link-btn">
                                    Read More
                                </div>
                            </v-layout>
                        </div>
                    </v-layout>
                </v-flex>
                <v-flex md8 lg8 xl7 hidden-sm-and-down>
                    <img class="project-img" src="../../../assets/images/ProductivityToolScreenShot.png">
                </v-flex>
            </v-layout>
            <v-layout class="project-card-layout-section" justify-space-between>
                <v-flex xs12 sm12 md4 lg4 xl4>
                    <v-layout fill-height align-center>
                        <div class="project-card">
                            <h3 class="project-card-title-text">IoT Platform</h3>
                            <p class="project-card-text">
                                A platform that allows users to manage, maintain, and get live data from IoT devices.
                            </p>
                            <hr>
                            <p class="project-card-text points">
                                <span class="bold">Tech Stack:</span>
                                MySql, Couchbase, OpenNATS, Java, Spring, Vaadin
                            </p>
                            <v-layout justify-center>
                                <div @click="goToMicroservicesPage" class="project-card-link-btn">
                                    Read More
                                </div>
                            </v-layout>
                        </div>
                    </v-layout>
                </v-flex>
                <v-flex md8 lg8 xl7 hidden-sm-and-down>
                    <img class="project-img" src="../../../assets/images/d2sScreenShot.png">
                </v-flex>
            </v-layout>
            <v-layout class="project-card-layout-section" justify-space-between>
                <v-flex xs12 sm12 md4 lg4 xl4>
                    <v-layout fill-height align-center>
                        <div class="project-card">
                            <h3 class="project-card-title-text">Journey Tracker</h3>
                            <p class="project-card-text">
                                A visualization tool to view tracked journeys.
                            </p>
                            <hr>
                            <p class="project-card-text points">
                                <span class="bold">Tech Stack:</span>
                                MySql, Nodejs, Vuejs
                            </p>
                            <v-layout justify-center>
                                <div @click="goToJourneyTracker" class="project-card-link-btn">
                                    Go to App
                                </div>
                            </v-layout>
                        </div>
                    </v-layout>
                </v-flex>
                <v-flex md8 lg8 xl7 hidden-sm-and-down>
                    <img class="project-img" src="../../../assets/images/JourneyTrackerScreenShot.png">
                </v-flex>
            </v-layout>
            <v-layout class="project-card-layout-section" justify-space-between>
                <v-flex xs12 sm12 md4 lg4 xl4>
                    <v-layout fill-height align-center>
                        <div class="project-card">
                            <h3 class="project-card-title-text">Camera to Email</h3>
                            <p class="project-card-text">
                                Snap a picture. Get it in your email in pdf format.
                            </p>
                            <hr>
                            <p class="project-card-text points">
                                <span class="bold">Tech Stack:</span>
                                Reactjs, Nodejs
                            </p>
                            <v-layout justify-center>
                                <div @click="goToCamToMail" class="project-card-link-btn">
                                    Go to App
                                </div>
                            </v-layout>
                        </div>
                    </v-layout>
                </v-flex>
                <v-flex md8 lg8 xl7 hidden-sm-and-down>
                    <img class="project-img" src="../../../assets/images/cam-to-mail.png">
                </v-flex>
            </v-layout>
            <v-layout class="project-card-layout-section" justify-space-between>
                <v-flex xs12 sm12 md4 lg4 xl4>
                    <v-layout fill-height align-center>
                        <div class="project-card">
                            <h3 class="project-card-title-text">Chat App</h3>
                            <p class="project-card-text">
                                A super simple chat app built with websockets.
                            </p>
                            <p style="font-size: 0.9em; font-style: italic;">
                                Try it with multiple browsers/tabs!
                            </p>
                            <hr>
                            <p class="project-card-text points">
                                <span class="bold">Tech Stack:</span>
                                Nodejs, Vuejs
                            </p>
                            <v-layout justify-center>
                                <div @click="goToChatApp" class="project-card-link-btn">
                                    Go to App
                                </div>
                            </v-layout>
                        </div>
                    </v-layout>
                </v-flex>
                <v-flex md8 lg8 xl7 hidden-sm-and-down>
                    <img class="project-img" src="../../../assets/images/ChatAppScreenShot.png">
                </v-flex>
            </v-layout>
            <v-layout class="project-card-layout-section" justify-space-between>
                <v-flex xs12 sm12 md4 lg4 xl4>
                    <v-layout fill-height align-center>
                        <div class="project-card">
                            <h3 class="project-card-title-text">Quote Machine</h3>
                            <p class="project-card-text">
                                A random quote generator I built while learning Vuejs.
                            </p>
                            <hr>
                            <p class="project-card-text points">
                                <span class="bold">Tech Stack:</span>
                                Vuejs
                            </p>
                            <v-layout justify-center>
                                <div @click="goToQuoteMachine" class="project-card-link-btn">
                                    Go to App
                                </div>
                            </v-layout>
                        </div>
                    </v-layout>
                </v-flex>
                <v-flex md8 lg8 xl7 hidden-sm-and-down>
                    <img class="project-img" src="../../../assets/images/QuoteMachineScreenShot.png">
                </v-flex>
            </v-layout>
            <v-layout class="project-card-layout-section" justify-space-between>
                <v-flex xs12 sm12 md4 lg4 xl4>
                    <v-layout fill-height align-center>
                        <div class="project-card">
                            <h3 class="project-card-title-text">Wikipedia Viewer</h3>
                            <p class="project-card-text">
                                A handy tool to search Wikipedia entries.
                            </p>
                            <hr>
                            <p class="project-card-text points">
                                <span class="bold">Tech Stack:</span>
                                Vuejs
                            </p>
                            <v-layout justify-center>
                                <div @click="goToWikiViewer" class="project-card-link-btn">
                                    Go to App
                                </div>
                            </v-layout>
                        </div>
                    </v-layout>
                </v-flex>
                <v-flex md8 lg8 xl7 hidden-sm-and-down>
                    <img class="project-img" src="../../../assets/images/WikiViewerScreenShot.png">
                </v-flex>
            </v-layout>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
    methods: {
        goToProductivityToolsPage() {
            let routeData = this.$router.resolve({
                path: '/productivity-tools'
            })
            window.open(routeData.href, '_blank')
        },
        goToMicroservicesPage() {
            let routeData = this.$router.resolve({
                path: '/iot-platform'
            })
            window.open(routeData.href, '_blank')
        },
        goToJourneyTracker() {
            let routeData = this.$router.resolve({
                path: '/journey-tracker'
            })
            window.open(routeData.href, '_blank')
        },
        goToCamToMail() {
            window.open('https://artze.xyz/cam-to-mail', '_blank')
        },
        goToChatApp() {
            let routeData = this.$router.resolve({
                path: '/chat-app'
            })
            window.open(routeData.href, '_blank')
        },
        goToQuoteMachine() {
            let routeData = this.$router.resolve({
                path: '/quote-machine'
            })
            window.open(routeData.href, '_blank')
        },
        goToWikiViewer() {
            let routeData = this.$router.resolve({
                path: '/wiki-viewer'
            })
            window.open(routeData.href, '_blank')
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Raleway:400,600,800');

.project-img {
    margin-left: auto;
    margin-right: auto;
    display: block;
    box-shadow: 0 5px 8px 0 rgba(0,0,0,0.2);
    width: 800px;
}

.project-card-layout-section {
    margin-top: 100px;
}

.project-card {
    width: 100%;
    min-height: 28em;
    padding: 30px;
    transition: box-shadow 0.2s ease-in, transform 0.2s ease-in;
}

.project-card hr {
    height: 1px;
    background-color: #b3b3b3;
    border: none;
    margin: 1.5em 0;
}

.project-card-title-text {
    font-family: 'Raleway';
    font-size: 2em;
    font-weight: 400;
}

.project-card-text {
    font-family: 'Roboto';
    font-size: 1.4em;
    font-weight: 200;
    color: #3a3a3a;
    padding-top: 0.1em;
    text-align: left;
}

.project-card-text.points {
    font-size: 1.2em;
}

.project-card-text.points .bold {
    font-weight: 500;
}

.project-card-link-btn {
    box-shadow: 0 0 0 2px #c52318;
    margin-top: 1em;
    padding: 10px 20px;
    transition: box-shadow 0.2s ease-in, transform 0.2s ease-in;
    font-family: 'Roboto';
    font-weight: 400;
    color: #c52318;
}

.project-card-link-btn:hover {
    cursor: pointer;
    box-shadow: 0.5em 0.5em 0 0 #69ffdf, 0 0 0 1px #69ffdf inset;
    transform: translate(-2px, -2px);
    color: #000000;
}

@media only screen and (max-width : 600px) {
    .project-card {
        margin: 15px 0px;
        min-height: 10em;
    }

    .project-card-title-text {
        font-size: 1.4em;
    }

    .project-card-text {
        font-size: 1em;
    }
}

@media only screen and (min-width : 600px) and (max-width : 960px) {
    .project-card {
        margin: 15px 0px;
        min-height: 14em;
    }

    .project-card-title-text {
        font-size: 1.7em;
    }

    .project-card-text {
        font-size: 1.3em;
    }
}

</style>
