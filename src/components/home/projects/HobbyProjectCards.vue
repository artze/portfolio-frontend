<template>
    <v-layout justify-center>
        <v-flex xs10 sm10 md10 lg10>
            <v-layout justify-start wrap>
                <v-flex xs12 sm12 md6 lg6>
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
                        <p class="project-card-text points">
                            <span class="bold">Role:</span>
                            Developer
                        </p>
                        <p class="project-card-text points">
                            <span class="bold">Team:</span>
                            Myself
                        </p>
                        <v-layout justify-center>
                            <div @click="goToJourneyTracker" class="project-card-link">
                                Go to App
                            </div>
                        </v-layout>
                    </div>
                </v-flex>

                <v-flex xs12 sm12 md6 lg6>
                    <div class="project-card">
                        <h3 class="project-card-title-text">Chat App</h3>
                        <p class="project-card-text">
                            A super simple chat app built with websockets.
                        </p>
                        <hr>
                        <p class="project-card-text points">
                            <span class="bold">Tech Stack:</span>
                            MySql, Nodejs, Vuejs
                        </p>
                        <p class="project-card-text points">
                            <span class="bold">Role:</span>
                            Developer
                        </p>
                        <p class="project-card-text points">
                            <span class="bold">Team:</span>
                            Myself
                        </p>
                        <v-layout justify-center>
                            <div @click="goToChatApp" class="project-card-link">
                                Go to App
                            </div>
                        </v-layout>
                    </div>
                </v-flex>
                <v-flex xs12 sm12 md6 lg6>
                    <div class="project-card">
                        <h3 class="project-card-title-text">Quote Machine</h3>
                        <p class="project-card-text">
                            Generate random quotes from notable figures.
                        </p>
                        <hr>
                        <p class="project-card-text points">
                            <span class="bold">Tech Stack:</span>
                            Vuejs
                        </p>
                        <p class="project-card-text points">
                            <span class="bold">Role:</span>
                            Developer
                        </p>
                        <p class="project-card-text points">
                            <span class="bold">Team:</span>
                            Myself
                        </p>
                        <v-layout justify-center>
                            <div @click="goToQuoteMachine" class="project-card-link">
                                Go to App
                            </div>
                        </v-layout>
                    </div>
                </v-flex>
                <v-flex xs12 sm12 md6 lg6>
                    <div class="project-card">
                        <h3 class="project-card-title-text">Wikipedia Viewer</h3>
                        <p class="project-card-text">
                            Search Wikipedia entries with this handy tool.
                        </p>
                        <hr>
                        <p class="project-card-text points">
                            <span class="bold">Tech Stack:</span>
                            Vuejs
                        </p>
                        <p class="project-card-text points">
                            <span class="bold">Role:</span>
                            Developer
                        </p>
                        <p class="project-card-text points">
                            <span class="bold">Team:</span>
                            Myself
                        </p>
                        <v-layout justify-center>
                            <div @click="goToWikiViewer" class="project-card-link">
                                Go to App
                            </div>
                        </v-layout>
                    </div>
                </v-flex>
            </v-layout>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
    methods: {
        goToJourneyTracker() {
            let routeData = this.$router.resolve({
                path: '/journey-tracker'
            })
            window.open(routeData.href, '_blank')
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

/* Project Section */
.project-card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    margin: 10px 15px 10px 15px;
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

.project-card-link {
    box-shadow: 0 0 0 2px #1e4cff;
    margin-top: 1em;
    padding: 10px 20px;
    transition: box-shadow 0.2s ease-in, transform 0.2s ease-in;
    font-family: 'Raleway';
    font-weight: 600;
    color: #1e4cff;
}

.project-card-link:hover {
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
