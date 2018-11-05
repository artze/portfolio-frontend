<template>
    <v-layout justify-center>
        <v-flex xs10 sm10 md10 lg10>
            <v-layout justify-start wrap>
                <v-flex xs12 sm6 md4 lg4>
                    <div class="project-card" @click="goToJourneyTracker">
                        <div>
                            <h3 class="project-card-title-text">Journey Tracker</h3>
                            <p class="project-card-text">
                                A visualization tool to view tracked journeys.
                            </p>
                        </div>
                    </div>
                </v-flex>
                <v-flex xs12 sm6 md4 lg4>
                    <div class="project-card" @click="goToChatApp">
                        <div>
                            <h3 class="project-card-title-text">Chat App</h3>
                            <p class="project-card-text">
                                A super simple chat app created with Websockets.
                            </p>
                        </div>
                    </div>
                </v-flex>
                <v-flex xs12 sm6 md4 lg4>
                    <div class="project-card" @click="goToQuoteMachine">
                        <div>
                            <h3 class="project-card-title-text">Quote Machine</h3>
                            <p class="project-card-text">
                                Generate random quotes from notable figures.
                            </p>
                        </div>
                    </div>
                </v-flex>
                <v-flex xs12 sm6 md4 lg4>
                    <div class="project-card" @click="goToWikiViewer">
                        <div>
                            <h3 class="project-card-title-text">Wikipedia Viewer</h3>
                            <p class="project-card-text">
                                Search Wikipedia entries with this handy tool.
                            </p>
                        </div>
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
@import url('https://fonts.googleapis.com/css?family=Raleway:400,800');

/* Project Section */
.project-card {
    margin: 0px 15px;
    min-height: 12em;
    display: flex;
    align-items: center;
    padding: 0px 20px;
}

.project-card:hover {
    cursor: pointer;
    -webkit-box-shadow: 0px 0px 0px 1px #69ffdf inset;
    -moz-box-shadow: 0px 0px 0px 1px #69ffdf inset;
    box-shadow: 0px 0px 0px 1px #69ffdf inset;
}

.project-card-title-text {
    font-family: 'Raleway';
    font-size: 1.7em;
    font-weight: 400;
}

.project-card-text {
    font-family: 'Roboto';
    font-size: 1.3em;
    font-weight: 200;
    color: #3a3a3a;
    padding-top: 0.1em;
    text-align: left;
}
</style>
