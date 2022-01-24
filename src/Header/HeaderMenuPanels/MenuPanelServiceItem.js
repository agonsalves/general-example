import PropTypes                  from 'prop-types'
import React, {useState}          from 'react'
import {connect}                  from 'react-redux'
import {serviceMenuPanelVariants} from 'Header/HeaderMenuPanels/animations'
import Div                        from 'Shared/Div'
import Icon                       from 'Shared/Icon'
import MotionDiv                  from 'Shared/MotionDiv'
import LinkSwitch                 from 'Shared/LinkSwitch'
import {decodeEntities}           from 'utils/helpers'
import {
    chevronCircleDown,
    chevronCircleUp
}                                 from 'variables/iconLibrary'
import MenuPanelServiceSubItem    from 'Header/HeaderMenuPanels/MenuPanelServiceSubItem'
import {serviceMenuPanelStyle}    from './MenuPanelService/styles'

const MenuPanelServiceItem = ({service, pathname}) => {
    const [isExpanded, setIsExpanded] = useState(false)
    const isExpandable = service?.children.length > 1

    return (
        <Div theme={serviceMenuPanelStyle.listItem}>
            <LinkSwitch
                theme={serviceMenuPanelStyle.title(isExpanded)}
                onClick={() =>
                    isExpandable ? setIsExpanded(flag => !flag) : null
                }
                url={!isExpandable ? service.children[0].slug : null}
            >
                {decodeEntities(service.title)}
                {isExpandable && (
                    <Icon
                        icon={isExpanded ? chevronCircleUp : chevronCircleDown}
                        theme={serviceMenuPanelStyle.titleIcon}
                    />
                )}
            </LinkSwitch>
            {isExpandable && service.children && (
                <MotionDiv
                    theme={serviceMenuPanelStyle.subList}
                    variants={serviceMenuPanelVariants}
                    initial="initial"
                    animate={isExpanded ? 'expanded' : 'initial'}
                >
                    {service.children.map((child) =>
                        <MenuPanelServiceSubItem
                            key={child.slug}
                            child={child}
                            pathname={pathname}
                        />
                    )}
                </MotionDiv>
            )}
        </Div>
    )
}

const mapStateToProps = ({router}) => ({
    pathname: router.location.pathname,
})

MenuPanelServiceItem.propTypes = {
    service: PropTypes.object,
    services: PropTypes.array.isRequired,
    pathname: PropTypes.string.isRequired
}

export default connect(mapStateToProps)(MenuPanelServiceItem)