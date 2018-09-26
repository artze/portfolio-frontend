<template>
    <div>
        <p>Select Journey</p>
        <v-data-table :headers="headers" :items="dateArrayForJourneyList" hide-actions>
            <template slot="items" slot-scope="props">
                <tr>
                    <td @click="emitSelectedJourney(props)" class="cursor-pointer" :class="{'selected-row': checkSelected(props.index)}">
                        {{ props.item.date | parseDateFilter }}
                    </td>
                </tr>
            </template>
        </v-data-table>
        <v-layout justify-end class="mt-3">
            <v-btn
                dark
                color="deep-purple darken-4"
                @click="restartQuery">Start Over</v-btn>
        </v-layout>
    </div>
</template>

<script>
import { parseDateFilter } from '../../../mixins/mixins'

export default {
    props: ['dateArrayForJourneyList', 'stepperReset'],
    mixins: [parseDateFilter],
    data() {
        return {
            headers: [{ text: 'Journey date', value: 'date' }],
            selectedJourneyIndex: null
        }
    },
    methods: {
        emitSelectedJourney(props) {
            this.selectedJourneyIndex = props.index
            this.$emit('journeySelected', props.item.date)
        },
        checkSelected(index) {
            if(index === this.selectedJourneyIndex) {
                return true
            } else {
                return false
            }
        },
        restartQuery() {
            this.$emit('queryRestarted')
        }
    },
    watch: {
        stepperReset() {
            this.selectedJourneyIndex = null
        }
    }
}
</script>

<style scoped>
.cursor-pointer {
    cursor: pointer;
}

.selected-row {
    background-color: #EDE7F6;
}
</style>
