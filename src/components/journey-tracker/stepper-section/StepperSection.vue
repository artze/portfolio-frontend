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
                <device-selection
                    :currentStep="currentStep"
                    @deviceSelected="userInput.device = $event"
                    @stepChanged="currentStep = $event"></device-selection>
            </v-stepper-content>
            <v-stepper-content step="2">
                <date-selection
                    :currentStep="currentStep"
                    @datesSelected="registerDates($event)"
                    @stepChanged="currentStep = $event"
                    @querySubmitted="getQueryResults"></date-selection>
            </v-stepper-content>
            <v-stepper-content step="3">
                <journey-list
                    :dateArrayForJourneyList="dateArrayForJourneyList"></journey-list>
            </v-stepper-content>
        </v-stepper-items>
    </v-stepper>
</template>

<script>
import DeviceSelection from './DeviceSelection'
import DateSelection from './DateSelection'
import JourneyList from './JourneyList'
import axios from '../../../axios-custom'

export default {
    components: {
        'device-selection': DeviceSelection,
        'date-selection': DateSelection,
        'journey-list': JourneyList
    },
    data() {
        return {
            currentStep: 1,
            userInput: {
                device: '',
                startDate: '',
                endDate: ''
            },
            queryResults: []
        }
    },
    computed: {
        dateArrayForJourneyList() {
            return this.queryResults.map((result) => {
                return { date: Object.keys(result)[0] }
            })
        }
    },
    methods: {
        registerDates(event) {
            this.userInput.startDate = event.selectedStartDate
            this.userInput.endDate = event.selectedEndDate
        },
        getQueryResults() {
            axios.post('/journey-tracker/query', this.userInput)
                .then((res) => {
                    this.queryResults = res.data
                })
        }
    }
}
</script>
