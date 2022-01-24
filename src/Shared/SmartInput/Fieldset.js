import PropTypes              from 'prop-types'
import styled                 from 'styled-components'
import {
    relative,
    themer
}                             from 'utils/themer'
import {globals}              from 'variables/styles'

const defaultFieldsetStyle = {
    position: relative,
    padding: 0,
    margin: 0,
    height: [globals.style.fieldSetHeight, .7, globals.style.fieldSetHeight],
    width: 'calc(100% - 2px)',
    border: `1px solid rgba(255,255,255,0)`,
    font: globals.fonts.body,
    transition: 'padding-left 300ms cubic-bezier(0.0, 0, 0.3, 1) 0ms, ' +
        'border-width 300ms cubic-bezier(0.0, 0, 0.3, 1) 0ms'
}

const Fieldset = styled.fieldset`${props => themer({...defaultFieldsetStyle, ...props.theme})}`

Fieldset.displayName = 'Fieldset'

Fieldset.propTypes = {
    theme: PropTypes.object,
}

Fieldset.defaultProps = {
    theme: {}
}

export default Fieldset