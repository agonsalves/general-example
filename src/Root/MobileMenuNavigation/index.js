import TopMenu       from 'Main/TopMenu'
import React         from 'react'
import {useSelector} from 'react-redux'
import {mobileFlag}  from 'redux/selectors'
import Div           from 'Shared/Div'
import MicrositeMenu from 'Shared/MicrositeMenu'
import {
    hasMicrositeMenu,
    hasTopMenu
}                    from 'utils/flags'
import {
    mobileMenuNavigationMenuStyles,
    mobileMenuNavigationStyle,
    mobileMenuTopMenuStyles
}                    from './styles'

const MobileMenuNavigation = ({post}) => {
    const isMobile = useSelector(mobileFlag)

    return isMobile && (
        <Div theme={mobileMenuNavigationStyle}>
            {(hasMicrositeMenu(post) && (
                <MicrositeMenu post={post.parentPost} theme={mobileMenuNavigationMenuStyles}/>
            )) || (hasTopMenu(post) && (
                <TopMenu post={post} theme={mobileMenuTopMenuStyles}/>
            ))}
        </Div>
    )
}

export default MobileMenuNavigation