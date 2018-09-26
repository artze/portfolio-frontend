import moment from 'moment'

export const parseDate = {
    methods: {
        parseDate(date) {
            return moment(date).format('DD MMM YYYY')
        }
    }
}

export const parseDateFilter = {
    filters: {
        parseDateFilter(date) {
            return moment(date).format('DD MMM YYYY')
        }
    }
}
