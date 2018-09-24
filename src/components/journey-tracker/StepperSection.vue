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
                    dense
                    label="Device Name"
                    :items="deviceArr"
                    v-model="userInput.device"
                    :error-messages="step1.selectFieldErrorMessage"
                    @input="resetStep1SelectField"></v-select>
                <v-btn
                    dark
                    color="deep-purple darken-4"
                    @click="step1Next">Next</v-btn>
            </v-stepper-content>
            <v-stepper-content step="2">
                <h3>Select Date Range</h3>
                <v-layout>
                    <v-flex lg6 class="mr-3">
                        <datepicker
                            label="From"
                            @dateSelected="userInput.dateFrom = $event"
                            :errorMessages="step2.dateFromErrorMessage"></datepicker>
                    </v-flex>
                    <v-flex lg6 class="ml-3">
                        <datepicker
                            label="To"
                            @dateSelected="userInput.dateTo = $event"
                            :errorMessages="step2.dateToErrorMessage"></datepicker>
                    </v-flex>
                </v-layout>
                <v-btn
                    dark
                    color="deep-purple darken-4"
                    @click="step2Next">Next</v-btn>
            </v-stepper-content>
            <v-stepper-content step="3">
                <h3>Select Journey</h3>
            </v-stepper-content>
        </v-stepper-items>
    </v-stepper>
</template>

<script>
import Datepicker from './shared/Datepicker'

export default {
    components: {
        'datepicker': Datepicker
    },
    data() {
        return {
            currentStep: 1,
            deviceArr: ['Device A', 'Device B', 'Device C'],
            userInput: {
                device: '',
                dateFrom: '',
                dateTo: ''
            },
            step1: {
                selectFieldErrorMessage: []
            },
            step2: {
                dateFromErrorMessage: [],
                dateToErrorMessage: []
            }
        }
    },
    computed: {
        computedDateFrom() {
            return this.userInput.dateFrom
        },
        computedDateTo() {
            return this.userInput.dateTo
        }
    },
    methods: {
        step1Next() {
            if(!this.userInput.device) {
                this.step1.selectFieldErrorMessage = 'Please select a device'
            } else {
                this.currentStep = 2
            }
        },
        resetStep1SelectField() {
            this.step1.selectFieldErrorMessage = []
        },
        step2Next() {
            if(!this.userInput.dateFrom) {
                this.step2.dateFromErrorMessage = 'Please enter a date'
            } else if(!this.userInput.dateTo) {
                this.step2.dateToErrorMessage = 'Please enter a date'
            } else {
                this.currentStep = 3
            }
        }
    },
    watch: {
        computedDateFrom() {
            this.step2.dateFromErrorMessage = []
        },
        computedDateTo() {
            this.step2.dateToErrorMessage = []
        }
    }
}
</script>
