<template>
    <v-layout justify-center>
        <v-flex xs8 sm8 md8 lg8>
            <v-layout justify-start wrap>
                <v-flex xs12 sm6 md4 lg4>
                    <v-card class="project-card mt-4">
                        <v-card-title primary-title class="justify-center">
                            <router-link to="/journey-tracker" tag="h3" class="project-card-title-text">Journey Tracker</router-link>
                        </v-card-title>
                        <v-card-text class="project-card-caption">
                            A visualization tool to view tracked journeys.
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex xs12 sm6 md4 lg4>
                    <v-card class="project-card mt-4">
                        <v-card-title primary-title class="justify-center">
                            <router-link to="/chat-app" tag="h3" class="project-card-title-text">Chat App</router-link>
                        </v-card-title>
                        <v-card-text class="project-card-caption">
                            A super simple chat app created with Websockets.
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex xs12 sm6 md4 lg4>
                    <v-card class="project-card mt-4">
                        <v-card-title primary-title class="justify-center">
                            <router-link to="/quote-machine" tag="h3" class="project-card-title-text">Quote Machine</router-link>
                        </v-card-title>
                        <v-card-text class="project-card-caption">
                            Generate random quotes from notable figures.
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex xs12 sm6 md4 lg4>
                    <v-card class="project-card mt-4">
                        <v-card-title primary-title class="justify-center">
                            <router-link to="/wiki-viewer" tag="h3" class="project-card-title-text">Wikipedia Viewer</router-link>
                        </v-card-title>
                        <v-card-text class="project-card-caption">
                            Search Wikipedia entries with this handy tool.
                        </v-card-text>
                    </v-card>
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

.project-card-title-text {
    font-family: 'Raleway';
    font-size: 1.1em;
    font-weight: 400;
}

.project-card-title-text:hover {
    text-decoration: underline;
    cursor: pointer;
}

.project-card-caption {
    font-size: 0.95em;
    color: #757575;
    padding-top: 0.5em;
    text-align: center;
}
</style>
