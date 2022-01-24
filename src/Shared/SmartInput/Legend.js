import PropTypes from 'prop-types'
import styled    from 'styled-components'
import {
    absolute,
    none,
    themer,
    transparent
}                from 'utils/themer'

export const defaultLegendStyle = {
    display: none,
    marginLeft: 17,
    padding: 0,
    transition: 'width 300ms cubic-bezier(0.0, 0, 0.3, 1) 0ms',
    ie: {
        position: absolute,
        height: 20,
        top: -11,
        zIndex: 0,
        backgroundColor: transparent
    },
}

const Legend = styled.legend`${props => themer({...defaultLegendStyle, ...props.theme})}`

Legend.displayName = 'Legend'

Legend.propTypes = {
    theme: PropTypes.object,
}

Legend.defaultProps = {
    theme: {}
}

export default Legend