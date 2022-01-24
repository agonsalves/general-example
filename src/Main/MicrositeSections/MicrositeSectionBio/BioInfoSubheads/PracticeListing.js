import PropTypes  from 'prop-types'
import React      from 'react'
import Div        from 'Shared/Div'
import LinkSwitch from 'Shared/LinkSwitch'
import {excerpt}  from 'utils/helpers'

const PracticeListing = ({name, url, description, theme}) =>
    <Div theme={theme}>
        <LinkSwitch
            theme={theme.title}
            url={url}
            children={name}
        />
        {description && (
            <Div theme={theme.excerpt}>{excerpt(description)}&#8230;</Div>
        )}
    </Div>

PracticeListing.propTypes = {
    theme: PropTypes.object,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    description: PropTypes.string
}

PracticeListing.defaultProps = {
    theme: {},
}

export default PracticeListing