<template>
    <v-stepper v-model="currentStep">
        <v-stepper-header>
            <v-stepper-step :complete="currentStep > 1" step="1">Select a Device</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step :complete="currentStep > 2" step="2">Select Date Range</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step :complete="currentStep > 3" step="3">Select Journey to Display</v-stepper-step>
        </v-stepper-header>
        <v-stepper-items>
            <v-stepper-content step="1">
                <h3>Select Device</h3>
                <v-select
                    solo
                    dense
                    label="Click to select"
                    :items="deviceArr"></v-select>
                <v-btn
                    dark
                    color="deep-purple darken-4"
                    @click="currentStep = 2">Next</v-btn>
            </v-stepper-content>
            <v-stepper-content step="2">
                <h3>Select Date Range</h3>
                <v-btn
                    dark
                    color="deep-purple darken-4"
                    @click="currentStep = 3">Next</v-btn>
            </v-stepper-content>
            <v-stepper-content step="3">
                <h3>Select Journey</h3>
            </v-stepper-content>
        </v-stepper-items>
    </v-stepper>
</template>

<script>
export default {
    data() {
        return {
            currentStep: 1,
            deviceArr: ['Device A', 'Device B', 'Device C']
        }
    }
}
</script>
