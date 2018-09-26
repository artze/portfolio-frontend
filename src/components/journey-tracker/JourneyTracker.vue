<template>
    <div>
        <app-header></app-header>
        <v-layout>
            <v-flex lg6>
                <stepper-section
                    @journeySelectionChanged="registerSelectedJourneyCoordArr($event)"></stepper-section>
            </v-flex>
            <v-flex lg6>
                <map-section
                    :selectedJourneyCoordArr="selectedJourneyCoordArr"></map-section>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
import Header from './Header'
import StepperSection from './stepper-section/StepperSection'
import MapSection from './MapSection'

export default {
    components: {
        'app-header': Header,
        'stepper-section': StepperSection,
        'map-section': MapSection
    },
    data() {
        return {
            selectedJourneyCoordArr: ''
        }
    },
    methods: {
        registerSelectedJourneyCoordArr(event) {
            this.selectedJourneyCoordArr = event
        }
    }
}
</script>
