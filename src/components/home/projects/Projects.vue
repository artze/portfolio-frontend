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
.fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>
