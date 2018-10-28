<template>
    <v-layout justify-center>
        <v-flex xs8 sm8 md8 lg8>
            <v-layout justify-start wrap>
                <v-flex xs12 sm6 md6 lg6>
                    <router-link to="/projects/productivity-tools" tag="div" class="project-card mt-4">
                        <v-card-title primary-title class="justify-center">
                            <h3 class="project-card-title-text">Productivity Tools</h3>
                        </v-card-title>
                        <v-card-text class="project-card-caption">
                            Read about how operational processes in my company are streamlined with Web Applications.
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
    -webkit-box-shadow: 0px 0px 0px 1px #69ffdf inset;
    -moz-box-shadow: 0px 0px 0px 1px #69ffdf inset;
    box-shadow: 0px 0px 0px 1px #69ffdf inset;
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
    text-align: left;
}
</style>
