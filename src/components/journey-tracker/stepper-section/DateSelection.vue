<template>
    <div>
        <p>View journeys between these dates:</p>
        <v-layout>
            <v-flex lg6 class="mr-3">
                <datepicker
                    label="Start Date"
                    @dateSelected="selectedStartDate = $event"
                    :errorMessages="startDateErrorMessage"></datepicker>
            </v-flex>
            <v-flex lg6 class="ml-3">
                <datepicker
                    label="End Date"
                    @dateSelected="selectedEndDate = $event"
                    :errorMessages="endDateErrorMessage"></datepicker>
            </v-flex>
        </v-layout>
        <v-layout justify-end>
            <v-btn
                dark
                color="deep-purple darken-4"
                @click="nextStep">Next</v-btn>
        </v-layout>
    </div>
</template>

<script>
import Datepicker from '../shared/Datepicker'

export default {
    components: {
        'datepicker': Datepicker
    },
    props: ['currentStep'],
    data() {
        return {
            selectedStartDate: '',
            selectedEndDate: '',
            startDateErrorMessage: [],
            endDateErrorMessage: []
        }
    },
    computed: {
        incrementStep() {
            return this.currentStep + 1
        }
    },
    watch: {
        selectedStartDate() {
            this.startDateErrorMessage = []
        },
        selectedEndDate() {
            this.endDateErrorMessage = []
        }
    },
    methods: {
        nextStep() {
            if(!this.selectedStartDate) {
                this.startDateErrorMessage = 'Please enter a date'
            } else if(!this.selectedEndDate) {
                this.endDateErrorMessage = 'Please enter a date'
            } else {
                this.$emit('datesSelected', {
                    selectedStartDate: this.selectedStartDate,
                    selectedEndDate: this.selectedEndDate
                })
                this.$emit('stepChanged', this.incrementStep)
                this.$emit('querySubmitted')
            }
        }
    }
}
</script>
