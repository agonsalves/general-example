import React     from 'react'
import Div       from 'Shared/Div'
import {
    auto,
    column,
    flex
}                from 'utils/themer'
import {globals} from 'variables/styles'

export const micrositeSectionSidebarStyle = {
    display: flex,
    flexDirection: column,
    marginLeft: auto,
    marginTop: [21, globals.style.layoutScalingValue, '0'],
    mobile: {
        marginLeft: 0
    },
    child: {
        selector: 'aside:last-child',
        marginBottom: 0
    }
}

const MicrositeSectionSidebar = props =>
    <Div theme={micrositeSectionSidebarStyle} {...props}/>

export default MicrositeSectionSidebar