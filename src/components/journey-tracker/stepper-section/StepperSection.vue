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
                    :stepperReset="stepperReset"
                    @deviceSelected="userInput.device = $event"
                    @stepChanged="currentStep = $event"></device-selection>
            </v-stepper-content>
            <v-stepper-content step="2">
                <date-selection
                    :currentStep="currentStep"
                    :stepperReset="stepperReset"
                    @datesSelected="registerDates($event)"
                    @stepChanged="currentStep = $event"
                    @querySubmitted="getQueryResults"></date-selection>
            </v-stepper-content>
            <v-stepper-content step="3">
                <journey-list
                    :dateArrayForJourneyList="dateArrayForJourneyList"
                    :stepperReset="stepperReset"
                    @journeySelected="registerSelectedJourney($event)"
                    @queryRestarted="restartQuery"></journey-list>
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
            queryResults: [],
            selectedJourneyCoordArr: '',
            stepperReset: ['reset']
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
        },
        registerSelectedJourney(event) {
            for(let i = 0; i < this.queryResults.length; i++) {
                if(Object.keys(this.queryResults[i])[0] === event) {
                    this.selectedJourneyCoordArr = this.queryResults[i][Object.keys(this.queryResults[i])[0]]
                }
            }
        },
        restartQuery() {
            this.currentStep = 1
            this.userInput.device = ''
            this.userInput.startDate = ''
            this.userInput.endDate = ''
            this.stepperReset = ['reset']
        }
    },
    watch: {
        selectedJourneyCoordArr() {
            this.$emit('journeySelectionChanged', this.selectedJourneyCoordArr)
        }
    }
}
</script>
