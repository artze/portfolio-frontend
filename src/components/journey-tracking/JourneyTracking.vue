<template>
    <div>
        <app-header></app-header>
        <v-layout>
            <v-flex lg6>
                <stepper-section></stepper-section>
            </v-flex>
            <v-flex lg6>
                <map-section></map-section>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
import Header from './Header'
import StepperSection from './StepperSection'
import MapSection from './MapSection'

export default {
    components: {
        'app-header': Header,
        'stepper-section': StepperSection,
        'map-section': MapSection
    }
}
</script>
