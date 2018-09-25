<template>
    <div>
        <p>Select Journey</p>
        <v-data-table :headers="headers" :items="dateArrayForJourneyList" hide-actions>
            <template slot="items" slot-scope="props">
                <td @click="emitSelectedJourney(props.item.date)" class="cursor-pointer">
                    {{ props.item.date | parseDateFilter }}
                </td>
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
            headers: [{ text: 'Journey date', value: 'date' }]
        }
    },
    methods: {
        emitSelectedJourney(date) {
            this.$emit('journeySelected', date)
        }
    }
}
</script>

<style scoped>
.cursor-pointer {
    cursor: pointer;
}
</style>
