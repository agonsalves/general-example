import {TransitionAnimations}     from 'Controllers/TransitionController'
import PropTypes                  from 'prop-types'
import React, {useContext}        from 'react'
import {useSelector}              from 'react-redux'
import {mobileFlag}               from 'redux/selectors'
import Div                        from 'Shared/Div'
import MotionDiv                  from 'Shared/MotionDiv'
import {
    hasDynamicWidgets,
    isArchiveDetail,
    isBlog,
    isBlogMainPage,
    isBlogPost,
    isMicrosite,
    isOfficeDetail,
    isPracticeSearch
}                                 from 'utils/flags'
import AssociatedPeopleWidget     from '../AssociatedPeopleWidget'
import AssociatedPracticesWidget  from '../AssociatedPracticesWidget'
import AssociatedIndustriesWidget from '../AssociatedPracticesWidget/AssociatedIndustriesWidget'
import BlogSidebarRight           from '../BlogSidebarRight'
import OfficeAddressWidget        from '../OfficeAddressWidget'
import PracticeSearchWidget       from '../PracticeSearchWidget'
import WidgetSwitch               from '../WidgetSwitch'
import {sidebarStyleSwitch}       from './styles'

const SidebarRight = ({post}) => {
    const {contentAnimation} = useContext(TransitionAnimations)
    const isMobile = useSelector(mobileFlag)
    return (
        <Div
            className="sidebar-right"
            theme={sidebarStyleSwitch(post)}
            aria-hidden={post.hasOwnProperty('widgets') ? 'false' : 'true'}
        >
            <MotionDiv animate={contentAnimation} theme={sidebarStyleSwitch(post).inner}>
                {(isOfficeDetail(post) && !isMobile) && (
                    <OfficeAddressWidget
                        address1={post.street_address}
                        address2={post.extended_address}
                        city={post.address_locality}
                        state={post.address_region}
                        postalCode={post.postal_code}
                        phone={post.telephone}
                        fax={post.fax_number}
                    />
                )}
                {!isMicrosite(post) && hasDynamicWidgets(post) && post.widgets.map((widget, index) =>
                    <WidgetSwitch key={index} widget={widget}/>
                )}
                {post.people && !isBlogMainPage(post) && isArchiveDetail(post) && !isMicrosite(post) && (
                    <AssociatedPeopleWidget people={post.people}/>
                )}
                {post.practice_area && !isBlogMainPage(post) && !isBlogPost(post) && isArchiveDetail(post) && !isMicrosite(post) && (
                    <AssociatedPracticesWidget practices={post.practice_area}/>
                )}
                {post.industry && !isBlogMainPage(post) && !isBlogPost(post) && isArchiveDetail(post) && !isMicrosite(post) && (
                    <AssociatedIndustriesWidget industries={post.industry}/>
                )}
                {isPracticeSearch(post) && !isMobile && (
                    <PracticeSearchWidget/>
                )}
                {isBlog(post) && (
                    <BlogSidebarRight post={post}/>
                )}
            </MotionDiv>
        </Div>
    )
}

SidebarRight.propTypes = {
    post: PropTypes.object.isRequired
}

export default SidebarRight