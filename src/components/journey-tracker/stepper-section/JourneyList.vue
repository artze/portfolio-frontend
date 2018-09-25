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
        <!-- <v-list>
            <template v-for="(date, index) in dateArrayForJourneyList"    >
                <v-list-tile
                    :key="index"
                    @click="emitSelectedJourney(props.item.date)">
                    <v-list-tile-content style="font=size: 10px;">
                        {{ date | parseDateFilter }}
                    </v-list-tile-content>
                </v-list-tile>
            </template>
        </v-list> -->
    </div>
</template>

<script>
import { parseDateFilter } from '../../../mixins/mixins'

export default {
    props: ['dateArrayForJourneyList'],
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
