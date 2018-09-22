import moment from 'moment'

export const parseDate = {
    methods: {
        parseDate(date) {
            return moment(date).format('DD MMM YYYY')
        }
    }
}
