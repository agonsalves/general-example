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
import ServiceSubItem             from './ServiceSubItem'
import { serviceItemStyle }    from './styles'

const ServiceItem = ({service, pathname}) => {
    const [isExpanded, setIsExpanded] = useState(false)
    const isExpandable = service?.children.length > 1

    return (
        <Div theme={serviceItemStyle.listItem}>
            <LinkSwitch
                theme={serviceItemStyle.title(isExpanded)}
                onClick={() =>
                    isExpandable ? setIsExpanded(flag => !flag) : null
                }
                url={!isExpandable ? service.children[0].slug : null}
            >
                {decodeEntities(service.title)}
                {isExpandable && (
                        <Icon
                        icon={isExpanded ? chevronCircleUp : chevronCircleDown}
                        theme={serviceItemStyle.titleIcon}
                        />
                )}
            </LinkSwitch>
            {isExpandable && service.children && (
                <MotionDiv
                    theme={serviceItemStyle.subList}
                    variants={serviceMenuPanelVariants}
                    initial="initial"
                    animate={isExpanded ? 'expanded' : 'initial'}
                >
                    {service.children.map((child) =>
                        <ServiceSubItem
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

ServiceItem.propTypes = {
    service: PropTypes.object,
    services: PropTypes.array.isRequired,
    pathname: PropTypes.string.isRequired
}

export default connect(mapStateToProps)(ServiceItem)