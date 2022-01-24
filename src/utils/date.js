import dayjs     from 'dayjs'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

const reformDateFormat = dateFormat => dateFormat.replace('F', 'MMMM').replace('j', 'DD').replace('Y', 'YYYY')

/**
 * Formats a given date according to the global date format
 *
 * @param {string} date
 * @param dateFormat
 * @returns {string}
 * @constructor
 */
const FormattedDate = ({date, dateFormat}) => dayjs(date).format(reformDateFormat(dateFormat))

FormattedDate.propTypes = {
    date: PropTypes.string,
    dateFormat: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
    dateFormat: state.site.config.dateFormat
})

export default connect(mapStateToProps)(FormattedDate)

export const shortMonth = date => dayjs(date).format('MMM')
export const dayOfMonth = date => dayjs(date).format('DD')