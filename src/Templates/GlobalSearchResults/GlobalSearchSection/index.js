import CaseStudyListing     from 'Main/CaseStudyListing'
import EventListing         from 'Main/EventListing'
import NewsListing          from 'Main/NewsListing'
import PublicationListing   from 'Main/PublicationListing'
import PropTypes            from 'prop-types'
import React, {
    useEffect,
    useState
}                           from 'react'
import ButtonSmall          from 'Shared/ButtonSmall'
import Div                  from 'Shared/Div'
import H2                   from 'Shared/H2'
import LinkSwitch           from 'Shared/LinkSwitch'
import PersonListing        from 'Shared/PersonListing'
import {composePersonTitle} from 'utils/helpers'
import {longArrowAltRight}  from 'variables/iconLibrary'
import {globalSearchStyle}  from '../styles'
import {
    globalArchiveListingStyle,
    globalCaseStudyListingStyle,
    globalEventListingStyle,
    globalNewsListingStyle,
    globalPersonListingStyle,
    globalPublicationListingStyle,
    globalResultJustTitleStyle
}                           from './styles'

const GlobalSearchSection = ({results, section, title, post}) => {
    const [isOpen, setIsOpen] = useState(false)
    let orderedResults

    //.sort function not supported in IE11 using bubbleSort instead
    const bubbleSort = (array) => {
        let done = false
        while (!done) {
            done = true
            for (let i = 1; i < array.length; i += 1) {
                if (array[i - 1]._source.date < array[i]._source.date) {
                    done = false
                    let tmp = array[i - 1]
                    array[i - 1] = array[i]
                    array[i] = tmp
                }
            }
        }

        return array
    }

    if (['publication', 'news-item', 'event'].includes(results[0]._type)) {
        orderedResults = bubbleSort(results)
    }

    useEffect(() => {
        setIsOpen(false)
    }, [post.key])

    return (
        <Div as="section" theme={globalSearchStyle.section}>
            <Div theme={globalSearchStyle.sectionHeader}>
                <H2 theme={globalSearchStyle.heading}>
                    {title}
                </H2>
            </Div>
            <Div theme={globalSearchStyle.results(section)}>
                {(!!orderedResults ? orderedResults : results).map(({_source: item}, index) => {
                    if (isOpen || index < 3) {
                        switch (section) {
                            case 'person':
                                return (
                                    <PersonListing
                                        key={item.slug}
                                        name={item.post_title}
                                        url={item.slug}
                                        headshot={item.headshot_photo}
                                        position={composePersonTitle(item)}
                                        theme={globalPersonListingStyle}
                                    />
                                )
                            case 'publication':
                                return (
                                    <PublicationListing
                                        key={item.slug}
                                        title={item.post_title}
                                        url={item.slug}
                                        date={item.date}
                                        type={item.publication_type}
                                        source={item.publication}
                                        byline={item.byline}
                                        image={item.thumbnail_teaser}
                                        displayDate={item.display_date}
                                        useDisplayDate={!!item.use_display_date}
                                        theme={{
                                            ...globalArchiveListingStyle,
                                            ...globalPublicationListingStyle(item.thumbnail_teaser)
                                        }}
                                    />
                                )
                            case 'event':
                                return (

                                    <EventListing
                                        key={item.slug}
                                        title={item.post_title}
                                        url={item.slug}
                                        date={item.date}
                                        people={item.people}
                                        location={item.where}
                                        otherSpeakers={item.other_speakers}
                                        startTime={item.time}
                                        endTime={item.end_time}
                                        timezone={item.timezone}
                                        theme={{...globalArchiveListingStyle, ...globalEventListingStyle}}
                                    />
                                )
                            case 'news-item':
                                return (
                                    <NewsListing
                                        key={item.slug}
                                        title={item.post_title}
                                        url={item.slug}
                                        date={item.date}
                                        type={item.news_item_type}
                                        source={item.source}
                                        image={item.thumbnail_teaser}
                                        theme={{...globalArchiveListingStyle, ...globalNewsListingStyle}}
                                    />
                                )
                            case 'case-study':
                                return (
                                    <CaseStudyListing
                                        key={item.slug}
                                        title={item.post_title}
                                        image={item.thumbnail_teaser}
                                        description={item.full_content}
                                        url={item.slug}
                                        theme={{...globalArchiveListingStyle, ...globalCaseStudyListingStyle}}
                                    />
                                )
                            case 'practice-area':
                            case 'office':
                            case 'page':
                            default:
                                return (
                                    <LinkSwitch
                                        key={item.slug}
                                        theme={globalResultJustTitleStyle}
                                        url={item.slug}
                                        children={item.post_title}
                                    />
                                )
                        }
                    }
                    return null
                })}
                {!isOpen && results.length > 3 && (
                    <ButtonSmall
                        url=""
                        label="View More"
                        onClick={() => setIsOpen(!isOpen)}
                        theme={globalSearchStyle.button}
                        icon={longArrowAltRight}
                    />
                )}
            </Div>
        </Div>
    )
}

GlobalSearchSection.propTypes = {
    title: PropTypes.string.isRequired,
    results: PropTypes.array.isRequired,
    section: PropTypes.string.isRequired
}

export default GlobalSearchSection