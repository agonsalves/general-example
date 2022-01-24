import PropTypes             from 'prop-types'
import React                 from 'react'
import Div                   from 'Shared/Div'
import LinkSwitch            from 'Shared/LinkSwitch'
import {archiveWrapperStyle} from './styles'

const ArchiveListingWrapper = ({theme, url, children}) =>
    <Div as="article" theme={{...archiveWrapperStyle, ...theme}}>
        <LinkSwitch url={url} theme={theme.innerLink}>
            {children}
        </LinkSwitch>
    </Div>

ArchiveListingWrapper.propTypes = {
    theme: PropTypes.object,
}

ArchiveListingWrapper.defaultProps = {
    theme: {},
}

export default ArchiveListingWrapper