import Div                    from 'Shared/Div'
import {TransitionAnimations} from 'Controllers/TransitionController'
import DetailFrame            from 'DetailFrame'
import FirmHighlights         from 'FirmHighlights'
import Footer                 from 'Footer'
import Header                 from 'Header'
import HeaderBackground       from 'Header/HeaderBackground'
import HeaderMenuPanels       from 'Header/HeaderMenuPanels'
import Main                   from 'Main'
import Marquee                from 'Marquee'
import MobileMenuNavigation   from 'Root/MobileMenuNavigation'
import PersistentHeader       from 'Root/PersistentHeader'
import React, {useContext}    from 'react'
import SidebarRight           from 'Sidebars/SidebarRight'
import DocumentHead           from '../DocumentHead'
import StaticHead             from '../StaticHead'
import TransitionOverlay      from '../TransitionOverlay'
import {pageFrameStyle}       from './styles'

const PageFrame = () => {
    const {post} = useContext(TransitionAnimations)

    return (
        <Div theme={pageFrameStyle} className="page">
            <StaticHead/>
            <DocumentHead/>
            <DetailFrame/>
            <HeaderBackground post={post}/>
            <Div id="header-left-margin" theme={pageFrameStyle.hlm}/>
            <Header theme={pageFrameStyle.header} post={post}/>
            <HeaderMenuPanels post={post}/>
            <Marquee/>
            <Div id="header-right-margin" theme={pageFrameStyle.hrm}/>
            <Div id="left-margin" theme={pageFrameStyle.lm}/>
            <Main post={post} theme={pageFrameStyle.main(post)}/>
            <Div id="inner-margin" theme={pageFrameStyle.innerMargin}/>
            <SidebarRight post={post}/>
            <MobileMenuNavigation post={post}/>
            <Div id="right-margin" theme={pageFrameStyle.rm}/>
            <Div id="footer-left-margin" theme={pageFrameStyle.flm}/>
            <FirmHighlights post={post} theme={pageFrameStyle.highlights}/>
            <Div id="footer-left-margin" theme={pageFrameStyle.frm}/>
            <Footer theme={pageFrameStyle.footer}/>
            <PersistentHeader/>
            <TransitionOverlay/>
            <Div id="modal" theme={{position: 'absolute'}}/>
        </Div>
    )
}

PageFrame.displayName = 'PageFrame'

export default PageFrame