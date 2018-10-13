<template>
    <v-layout justify-center>
        <v-flex xs8 sm8 md8 lg8>
            <v-layout justify-start wrap>
                <v-flex xs12 sm6 md4 lg4>
                    <router-link to="/journey-tracker" tag="div" class="project-card mt-4">
                        <v-card-title primary-title class="justify-center">
                            <h3 class="project-card-title-text">Journey Tracker</h3>
                        </v-card-title>
                        <v-card-text class="project-card-caption">
                            A visualization tool to view tracked journeys.
                        </v-card-text>
                    </router-link>
                </v-flex>
                <v-flex xs12 sm6 md4 lg4>
                    <router-link to="/chat-app" tag="div" class="project-card mt-4">
                        <v-card-title primary-title class="justify-center">
                            <h3 class="project-card-title-text">Chat App</h3>
                        </v-card-title>
                        <v-card-text class="project-card-caption">
                            A super simple chat app created with Websockets.
                        </v-card-text>
                    </router-link>
                </v-flex>
                <v-flex xs12 sm6 md4 lg4>
                    <router-link to="/quote-machine" tag="div" class="project-card mt-4">
                        <v-card-title primary-title class="justify-center">
                            <h3 class="project-card-title-text">Quote Machine</h3>
                        </v-card-title>
                        <v-card-text class="project-card-caption">
                            Generate random quotes from notable figures.
                        </v-card-text>
                    </router-link>
                </v-flex>
                <v-flex xs12 sm6 md4 lg4>
                    <router-link to="/wiki-viewer" tag="div" class="project-card mt-4">
                        <v-card-title primary-title class="justify-center">
                            <h3 class="project-card-title-text">Wikipedia Viewer</h3>
                        </v-card-title>
                        <v-card-text class="project-card-caption">
                            Search Wikipedia entries with this handy tool.
                        </v-card-text>
                    </router-link>
                </v-flex>
            </v-layout>
        </v-flex>
    </v-layout>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Raleway:400,800');

/* Project Section */
.project-card {
    margin: 0px 15px;
}

.project-card:hover {
    cursor: pointer;
    box-shadow: 0px 0px 0px 0.7px #69ffdf inset;
}

.project-card-title-text {
    font-family: 'Raleway';
    font-size: 1.1em;
    font-weight: 400;
}

.project-card-caption {
    font-size: 0.95em;
    color: #757575;
    padding-top: 0.1em;
    text-align: center;
}
</style>
