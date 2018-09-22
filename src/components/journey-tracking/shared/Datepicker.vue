<template>
    <v-menu
        ref="menu"
        lazy
        :close-on-content-click="false"
        v-model="menu"
        transition="scale-transition"
        offset-y
        full-width
        :nudge-right="40"
        min-width="290px"
        :return-value.sync="date">
        <v-text-field
            slot="activator"
            :label="label"
            v-model="dateDisplay"
            :error-messages="errorMessages"
            readonly></v-text-field>
        <v-date-picker v-model="date" @input="selectDate(date)" no-title scrollable>
    </v-date-picker>
    </v-menu>
</template>

<script>
import { parseDate } from '../../../mixins/mixins'

export default {
    data() {
        return {
            date: null,
            menu: false
        }
    },
    computed: {
        dateDisplay() {
            if(this.date) {
                return this.parseDate(this.date)
            }
        }
    },
    props: ['label', 'dateReset', 'errorMessages'],
    mixins: [parseDate],
    watch: {
        dateReset() {
            this.date = null
        }
    },
    methods: {
        selectDate(date) {
            this.menu = false
            this.$refs.menu.save(date)
            this.$emit('dateSelected', this.date)
        }
    }
}
</script>
