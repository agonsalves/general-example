import PropTypes from 'prop-types'
import React     from 'react'
import Div       from 'Shared/Div'

const StarterComponent = ({theme}) =>
    <Div theme={theme}/>

StarterComponent.propTypes = {
    theme: PropTypes.object,
}

StarterComponent.defaultProps = {
    theme: {},
}

export default StarterComponent