<template>
    <v-layout justify-center>
        <v-flex xs10 sm10 md10 lg10>
            <v-layout justify-start wrap>
                <v-flex xs12 sm6 md6 lg6>
                    <router-link to="/projects/productivity-tools" tag="div" class="project-card">
                        <div>
                            <h3 class="project-card-title-text">Productivity Tools</h3>
                            <p class="project-card-text">
                                A suite of Web Applications designed to streamline operational processes in my company.
                            </p>
                        </div>
                    </router-link>
                </v-flex>

                <v-flex xs12 sm6 md6 lg6>
                    <router-link to="/projects/productivity-tools" tag="div" class="project-card">
                        <div>
                            <h3 class="project-card-title-text">Microservices</h3>
                            <p class="project-card-text">
                                Introduce microservices and OpenNATS messaging bus for of an IoT platform.
                            </p>
                        </div>
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
    min-height: 15em;
    display: flex;
    align-items: center;
    padding: 30px;
    transition: box-shadow 0.2s ease-in, transform 0.2s ease-in;
}

.project-card:hover {
    cursor: pointer;
    box-shadow: 1em 1em 0 0 #69ffdf, 0 0 0 1px #69ffdf inset;
    transform: translate(-2px, -2px);
}

.project-card > div {
    height: 9em;
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
</style>
