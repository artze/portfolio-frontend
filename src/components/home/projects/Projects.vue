<template>
    <v-layout column style="height: 100vh">
        <v-flex xs12 sm12 md12 lg12>
            <v-layout column justify-center style="height: 100%;">
                <!-- <v-flex xs1 sm1 md1 lg1>
                    <v-layout justify-center>
                        <v-flex xs10 sm10 md10 lg10>
                            <h2 class="section-header">
                                Work Projects
                            </h2>
                        </v-flex>
                    </v-layout>
                </v-flex> -->
                <v-flex xs1 sm1 md1 lg1>
                    <work-project-cards></work-project-cards>
                    <hobby-project-cards></hobby-project-cards>
                </v-flex>
            </v-layout>
        </v-flex>
    </v-layout>
</template>

<script>
import WorkProjectCards from './WorkProjectCards'
import HobbyProjectCards from './HobbyProjectCards'

export default {
    components: {
        'work-project-cards': WorkProjectCards,
        'hobby-project-cards': HobbyProjectCards
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=VT323');

.section-header {
    text-align: left;
    font-family: 'VT323';
    font-weight: 400;
    font-size: 6em;
}

@media only screen and (max-width : 600px) {
    .section-header {
        font-size: 3em;
    }
}

@media only screen and (min-width : 600px) and (max-width : 960px) {
    .section-header {
        font-size: 4.2em;
    }
}
</style>
