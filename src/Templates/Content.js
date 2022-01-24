import PropTypes               from 'prop-types'
import React, {useMemo}        from 'react'
import AboutUsTemplate         from 'Templates/AboutUsTemplate'
import AccoladesTemplate       from 'Templates/AccoladesTemplate'
import ArchiveDetail           from 'Templates/ArchiveDetail'
import ArchiveSearchResults    from 'Templates/ArchiveSearchResults'
import BlogMain                from 'Templates/BlogMain'
import CareersTemplate         from 'Templates/CareersTemplate'
import CaseStudiesListings     from 'Templates/CaseStudiesListings'
import CommunityTemplate       from 'Templates/CommunityTemplate'
import ContactTemplate         from 'Templates/ContactUsTemplate'
import CurrentOpeningsTemplate from 'Templates/CurrentOpeningsTemplate'
import DiversityTemplate       from 'Templates/DiversityTemplate'
import Error404                from 'Templates/Error404'
import EventListings           from 'Templates/EventListings'
import GenericPageTemplate     from 'Templates/GenericPageTemplate'
import GlobalSearchResults     from 'Templates/GlobalSearchResults'
import HistoryTemplate         from 'Templates/HistoryTemplate'
import Homepage                from 'Templates/Homepage'
import LeadershipTemplate      from 'Templates/LeadershipTemplate'
import MicrositePersonBio      from 'Templates/MicrositePersonBio'
import MicrositePractice       from 'Templates/MicrositePractice'
import MicrositeBlogCustom     from 'Templates/MicrositeBlogCustom'
import MicrositeBlogSubscribe  from 'Templates/MicrositeBlogSubscribe'
import NewsListings            from 'Templates/NewsListings'
import OfficeDetail            from 'Templates/OfficeDetail'
import PeopleSearchResults     from 'Templates/PeopleSearchResults'
import PublicationListings     from 'Templates/PublicationListings'
import SubscribeFormTemplate   from 'Templates/SubscribeFormTemplate'
import ServicesListing         from 'Templates/ServiceListingTemplate'
import IndustriesListing       from 'Templates/IndustriesListing'
import PeoplePage              from 'Templates/PeoplePage'

const getTemplate = ({template}) => {
    if (!template)
        return null

    switch (template) {
        case 'global-search':
            return GlobalSearchResults
        case 'client-homepage':
        case 'homepage':
            return Homepage
        case 'client-about':
            return AboutUsTemplate
        case 'custom':
            return GenericPageTemplate
        case 'microsite-custom':
            return MicrositeBlogCustom
        case 'contact':
            return ContactTemplate
        case 'news':
            return NewsListings
        case 'publications':
            return PublicationListings
        case 'events':
            return EventListings
        case 'case-studies':
            return CaseStudiesListings
        case 'event':
        case 'publication':
        case 'news-item':
        case 'case-study':
            return ArchiveDetail
        case 'office':
            return OfficeDetail
        case 'current_job_openings':
            return CurrentOpeningsTemplate
        case 'client-leadership':
            return LeadershipTemplate
        case 'client-diversity':
            return DiversityTemplate
        case 'client-careers-overview':
            return CareersTemplate
        case 'client-history':
            return HistoryTemplate
        case 'client-subscribe':
            return SubscribeFormTemplate
        case 'microsite-subscribe':
            return MicrositeBlogSubscribe
        case 'blogs':
            return BlogMain
        case 'blog-post':
            return ArchiveDetail
        case 'person':
            return MicrositePersonBio
        case 'practice-area':
        case 'industry':
            return MicrositePractice
        case 'practice':
            return ServicesListing
        case 'industries':
            return IndustriesListing
        case 'people-search':
            return PeopleSearchResults
        case 'people':
            return PeoplePage
        case 'news-search':
        case 'events-search':
        case 'publications-search':
        case 'case-studies-search':
        case 'practice-search':
        case 'blogs-search':
            return ArchiveSearchResults
        case 'client-community':
            return CommunityTemplate
        case 'client-accolades':
            return AccoladesTemplate
        case 'error404':
        default:
            return Error404

    }
}

const Content = ({post}) => {
    let TemplateComponent = useMemo(
        () => getTemplate(post),
        [post]
    )

    return <TemplateComponent post={post}/>
}

Content.propTypes = {
    post: PropTypes.object.isRequired
}

export default Content