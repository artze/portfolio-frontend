<template>
    <transition name="fade">
        <v-layout column style="height: 100vh" ref="projectsSection">
            <v-flex xs1 sm1 md1 lg1>
                <v-layout justify-center>
                    <v-flex lg8>
                        <h2 class="section-header">
                            Projects
                        </h2>
                    </v-flex>
                </v-layout>
            </v-flex>

            <v-flex xs11 sm11 md11 lg11>
                <project-cards-section></project-cards-section>
            </v-flex>
        </v-layout>
    </transition>
</template>

<script>
import ProjectCardsSection from './ProjectCardsSection'

export default {
    components: {
        'project-cards-section': ProjectCardsSection
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=VT323');

.fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
}

.fade-enter, .fade-leave-to {
    opacity: 0;
}

.section-header {
    text-align: center;
    font-family: 'VT323';
    font-weight: 200;
    font-size: 2.2em;
    margin-top: 1em;
}
</style>
