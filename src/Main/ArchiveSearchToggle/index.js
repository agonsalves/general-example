import PropTypes            from 'prop-types'
import React, {
    useEffect,
    useRef
}                           from 'react'
import Div                  from 'Shared/Div'
import Icon                 from 'Shared/Icon'
import {plural}             from 'utils/helpers'
import {angleRight}         from 'variables/iconLibrary'
import {archiveToggleStyle} from './styles'

const ArchiveSearchToggle = ({open, isOpen, postType, theme, label}) => {
    const searchRef = useRef()

    useEffect(() => {
        if (isOpen) {
            searchRef.current.offsetParent.style.zIndex = 24
        } else {
            searchRef.current.offsetParent.style.zIndex = 5
        }
    }, [searchRef, isOpen])

    return (
        <Div
            theme={{...archiveToggleStyle, ...theme}}
            onClick={(e) => open(e)}
            ref={searchRef}
        >
            {label || `Search ${plural(postType)}`}
            <Icon
                icon={angleRight}
                theme={archiveToggleStyle.icon}
            />
        </Div>
    )
}


ArchiveSearchToggle.propTypes = {
    open: PropTypes.func.isRequired,
    postType: PropTypes.string.isRequired,
    label: PropTypes.string,
    theme: PropTypes.object,
}

export default ArchiveSearchToggle