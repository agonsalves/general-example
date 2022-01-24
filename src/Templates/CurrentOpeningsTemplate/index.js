import idx                   from 'idx'
import PropTypes             from 'prop-types'
import React, {
    useEffect,
    useMemo,
    useState
}                            from 'react'
import {connect}             from 'react-redux'
import Div                   from 'Shared/Div'
import RichText              from 'Shared/RichText'
import Span                  from 'Shared/Span'
import JobListing            from 'Templates/CurrentOpeningsTemplate/JobListing'
import PostContent           from 'Main/PostContent'
import FilterField           from 'Shared/FilterField'
import PageTitle             from 'Main/PageTitle'
import {
    plural,
    sortAlpha
}                            from 'utils/helpers'
import {currentOpeningStyle} from './styles'

const CurrentOpeningsTemplate = ({hasPositionFilter, post}) => {
    const {full_content, current_job_openings_enable_office_filter, job_openings: jobOpenings} = post
    const officePlaceholder = `By Office`
    const composeOfficeOptions = useMemo(() => () => {
        let options = []

        for (let x in jobOpenings) {
            if (jobOpenings[x].office_locations)
                for (let y in jobOpenings[x].office_locations) {
                    if (!options.find(item => item.id === jobOpenings[x].office_locations[y].id))
                        options.push({
                            id: jobOpenings[x].office_locations[y].id,
                            title: jobOpenings[x].office_locations[y].post_title
                        })
                }
        }

        options = sortAlpha(options, 'title')

        options.unshift({
            id: null,
            title: `All ${plural('office')}`
        })

        return options
    }, [jobOpenings])

    const composePositionOptions = useMemo(() => () => {
        if (!jobOpenings) return

        let options = []
        for (let x in jobOpenings) {
            if (jobOpenings[x].current_openings_position_category)
                for (let y in jobOpenings[x].current_openings_position_category) {
                    if (!options.find(item => item.id === jobOpenings[x].current_openings_position_category[y].id))
                        options.push({
                            id: jobOpenings[x].current_openings_position_category[y].id,
                            title: jobOpenings[x].current_openings_position_category[y].term
                        })
                }
        }

        options = sortAlpha(options, 'title')

        options.unshift({
            id: null,
            title: 'All Positions'
        })

        return options
    }, [jobOpenings])

    const [filters, setFilters] = useState({
        currentOfficeId: 0,
        currentOfficeName: '',
        currentPositionId: 0,
        currentPositionName: '',
        offices: post.current_job_openings_enable_office_filter && !!jobOpenings && composeOfficeOptions(),
        positions: hasPositionFilter && !!jobOpenings && composePositionOptions()
    })

    const handleOfficeSelect = useMemo(
        () => (value, item) =>
            setFilters({
                ...filters,
                currentOfficeId: item.id,
                currentOfficeName: item.title
            }),
        [filters, setFilters]
    )

    const handlePositionSelect = useMemo(
        () => (value, item) => {
            setFilters({
                ...filters,
                currentPositionId: item.id,
                currentPositionName: item.title
            })
        },
        [filters, setFilters]
    )

    const {currentOfficeName, currentPositionName, offices = [], positions} = filters
    const [visibleJobOpenings, setVisibleJobOpenings] = useState([])

    useEffect(
        () => {
            const hasSelectedOffice = (item) => {
                const {currentOfficeId} = filters

                return idx(item, _ => _.office_locations.find(office =>
                    office.id === currentOfficeId
                ))
            }

            const hasSelectedPosition = item => {
                const {currentPositionId} = filters

                return idx(item, _ => _.current_openings_position_category.find(position =>
                    position.id === currentPositionId
                ))
            }

            const isOpeningVisible = item => {
                const {currentOfficeId, currentPositionId} = filters

                if (!currentOfficeId && !currentPositionId)
                    return true

                if (currentOfficeId && !currentPositionId)
                    return hasSelectedOffice(item)

                if (!currentOfficeId && currentPositionId)
                    return hasSelectedPosition(item)

                if (currentOfficeId && currentPositionId)
                    return hasSelectedOffice(item) && hasSelectedPosition(item)
            }

            setVisibleJobOpenings(jobOpenings?.filter(job => isOpeningVisible(job)) || [])
        },
        [currentOfficeName, currentPositionName, jobOpenings, filters]
    )

    return (
        <PostContent post={post}>
            <PageTitle post={post}>{post.post_title}</PageTitle>
            <RichText isFirstParagraphLarge={true}>{full_content}</RichText>
            {jobOpenings && (
                <Div className="opening-filters" theme={currentOpeningStyle}>
                    <Span theme={currentOpeningStyle.filter}>Filters:</Span>
                    {current_job_openings_enable_office_filter && offices.length > 0 && (
                        <FilterField
                            name="job-openings-location"
                            items={offices}
                            onSelect={handleOfficeSelect}
                            placeholder={officePlaceholder}
                            value={currentOfficeName}
                        />
                    )}
                    {hasPositionFilter && positions.length > 0 && (
                        <FilterField
                            items={positions}
                            onSelect={handlePositionSelect}
                            name="job-openings-position"
                            placeholder="Filter by Position"
                            value={currentPositionName}
                        />
                    )}
                </Div>
            )}
            {(!!visibleJobOpenings.length && visibleJobOpenings.map(item =>
                <JobListing
                    key={item.id}
                    post={item}
                    title={item.post_title}
                    category={item.current_openings_position_category?.[0].term}
                    locations={item.office_locations}
                    description={item.full_content}
                    continued={item.full_content_continued}
                    applyUrl={item.url}
                    contactEmail={item.contact_email}
                    theme={currentOpeningStyle.jobListing}
                />
            )) || (
                <Div>No results found.</Div>
            )}
        </PostContent>
    )
}

CurrentOpeningsTemplate.propTypes = {
    hasPositionFilter: PropTypes.bool.isRequired,
    post: PropTypes.object.isRequired,
}

const mapStateToProps = ({site}) => ({
    hasPositionFilter: site.config.jobOpenings.position_filter
})

export default connect(mapStateToProps)(CurrentOpeningsTemplate)

