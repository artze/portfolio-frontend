<template>
    <div>
        <p>Select Journey</p>
        <v-data-table :headers="headers" :items="dateArrayForJourneyList" hide-actions>
            <template slot="items" slot-scope="props">
                <td>{{ props.item.date }}</td>
            </template>
        </v-data-table>
    </div>
</template>

<script>
export default {
    props: ['dateArrayForJourneyList'],
    data() {
        return {
            headers: [{ text: 'Journey date', value: 'date' }]
        }
    }
}
</script>
