import Icon                    from 'Shared/Icon'
import {ScrollContext}         from 'Controllers/MicrositeScrollController'
import PropTypes               from 'prop-types'
import React, {useContext}     from 'react'
import {
    connect,
    useSelector
}                              from 'react-redux'
import {mobileFlag}            from 'redux/selectors'
import LinkSwitch              from 'Shared/LinkSwitch'
import {isBlog}                from 'utils/flags'
import {longArrowAltRight}     from 'variables/iconLibrary'
import {isTablet}              from '../../../utils/flags'
import {micrositeNavLinkStyle} from './styles'

const MicrositeNavLink = ({children, theme, url, isActive, post, setIsOpen}) => {
    const {scrollToSection, updateSectionOffset, scrollToTop} = useContext(ScrollContext)
    const isMobile = useSelector(mobileFlag)

    return (
        <>
        {!isMobile && (
            <LinkSwitch
                theme={{...micrositeNavLinkStyle.link, theme}}
                url={isBlog(post) ? url : ''}
                onClick={() => {
                    !isBlog(post) && scrollToSection(url)
                    isMobile && setIsOpen(false)
                    updateSectionOffset()
                }}
                type="nav"
                isActive={isActive}
            >
                <span>{children}</span>
                {!isMobile && !isTablet() && isActive && (
                    <Icon icon={longArrowAltRight} theme={micrositeNavLinkStyle.icon}/>
                )}
            </LinkSwitch>
        )}
        {(isMobile && isBlog(post)) && (
            <>
            <LinkSwitch
            theme={{...micrositeNavLinkStyle.link, theme}}
            url={url}
            type="nav"
            onClick={() => {scrollToTop()}}
            isActive={isActive}
            >
                <span>{children}</span>
                {!isMobile && !isTablet() && isActive && (
                    <Icon icon={longArrowAltRight} theme={micrositeNavLinkStyle.icon}/>
                )}
            </LinkSwitch>
            </>
        )}
        {(isMobile && !isBlog(post)) && (
            <LinkSwitch
            theme={{...micrositeNavLinkStyle.link, theme}}
            url={isBlog(post) ? url : ''}
            onClick={() => {
                !isBlog(post) && scrollToSection(url)
                updateSectionOffset()
            }}
            type="nav"
            isActive={isActive}
            >
                <span>{children}</span>
                {!isMobile && !isTablet() && isActive && (
                    <Icon icon={longArrowAltRight} theme={micrositeNavLinkStyle.icon}/>
                )}
            </LinkSwitch>
        )}
        </>
    )
}

MicrositeNavLink.propTypes = {
    url: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    theme: PropTypes.object,
}

MicrositeNavLink.defaultProps = {
    theme: {},
    isActive: false
}

const mapStateToProps = ({router}) => ({
    pathname: router.location.pathname,
})

export default connect(mapStateToProps)(MicrositeNavLink)