<template>
    <div>
        <p>Select a device</p>
        <v-select
            dense
            label="Device Name"
            :items="deviceArr"
            v-model="selectedDevice"
            :error-messages="selectFieldErrorMessage"
            @input="resetErrorMessage"></v-select>
        <v-layout justify-end>
            <v-btn
                dark
                color="deep-purple darken-4"
                @click="nextStep">Next</v-btn>
        </v-layout>
    </div>
</template>

<script>
export default {
    props: ['currentStep'],
    data() {
        return {
            deviceArr: ['Device A', 'Device B', 'Device C'],
            selectFieldErrorMessage: [],
            selectedDevice: ''
        }
    },
    computed: {
        incrementStep() {
            return this.currentStep + 1
        }
    },
    methods: {
        nextStep() {
            if(!this.selectedDevice) {
                this.selectFieldErrorMessage = 'Please select a device'
            } else {
                this.$emit('stepChanged', this.incrementStep)
            }
        },
        resetErrorMessage() {
            this.selectFieldErrorMessage = []
            this.$emit('deviceSelected', this.selectedDevice)
        }
    }
}
</script>
