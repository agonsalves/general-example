import dayjs from 'dayjs'

/**
 * Returns true if the given date is in the future
 *
 * @param {string} date
 * @returns {boolean}
 */
export const isUpcoming = date => dayjs(date).isAfter(dayjs().subtract(1, 'day'))