import PropTypes from 'prop-types'
import React     from 'react'
import H2        from 'Shared/H2'
import {globals} from 'variables/styles'

const micrositeSectionHeadingStyle = {
    size: [45, .7, 38],
    lineHeight: [40, .7, 40],
    font: globals.colors.heading,
    fontFamily: globals.fonts.heading,
    color: globals.colors.headingColor,
    weight: 600,
    borderWidth: 3,
    paddingBottom: [40, .7, 40],
}

const  MicrositeSectionHeading = ({theme, ...props}) =>
    <H2 theme={{...micrositeSectionHeadingStyle, ...theme}} {...props}/>

MicrositeSectionHeading.propTypes = {
    theme: PropTypes.object
}

export default MicrositeSectionHeading