import PropTypes             from 'prop-types'
import React                 from 'react'
import Div                   from '../../Shared/Div'
import Icon                  from '../../Shared/Icon'
import {
    dayOfMonth,
    shortMonth
}                            from '../../utils/date'
import {isUpcoming}          from '../../utils/upcomingEvents'
import {
    calendar,
    flag,
    mapMarker
}                            from '../../variables/iconLibrary'
import ArchiveListingWrapper from '../ArchiveListingWrapper'
import {archiveListingStyle} from '../ArchiveListingWrapper/styles'
import {
    eventListingInfoCalendarIconStyle,
    eventListingInfoDateWrapperStyle,
    eventListingInfoDayStyle,
    eventListingInfoLocationIconStyle,
    eventListingInfoLocationStyle,
    eventListingInfoLocationWrapperStyle,
    eventListingInfoMonthStyle,
    eventListingInfoStyle,
    eventsListingStyle,
    eventsListingUpcomingIconStyle,
    eventsListingUpcomingStyle
}                            from './styles'

const EventListing = ({title, url, date, location, theme}) =>
    <ArchiveListingWrapper
        theme={{
            ...eventsListingStyle,
            ...eventsListingUpcomingStyle(isUpcoming(date)),
            ...theme
        }}
        url={url}
    >
        <Div className="archive-accent" theme={{
            ...archiveListingStyle.type,
            ...eventsListingStyle.type,
            ...theme.type
        }}>
            {(isUpcoming(date) && (
                <>
                    <Icon icon={flag} theme={eventsListingUpcomingIconStyle}/>
                    <Div className="archive-accent">Upcoming</Div>
                </>
            )) || (
                <Div className="archive-accent">Past</Div>
            )}
        </Div>
        <Div
            theme={{
                ...archiveListingStyle.title,
                ...eventsListingStyle.title,
                ...theme.title
            }}
            children={title}
        />
        <Div theme={{...eventListingInfoStyle, ...theme.info}}>
            <Div theme={eventListingInfoDateWrapperStyle}>
                <Div className="archive-accent" theme={eventListingInfoMonthStyle}>
                    <Icon icon={calendar} theme={{...eventListingInfoCalendarIconStyle, ...theme.icon}}/>
                    {shortMonth(date)}
                </Div>
                <Div className="archive-accent"
                     theme={{...eventListingInfoDayStyle, ...theme.infoDay}}>{dayOfMonth(date)}</Div>
            </Div>
            <Div theme={{...eventListingInfoLocationWrapperStyle, ...theme.infoLocationWrapper}}>
                {location && (
                    <Div className="archive-accent" theme={{...eventListingInfoLocationStyle, ...theme.location}}>
                        <Icon icon={mapMarker} theme={{...eventListingInfoLocationIconStyle, ...theme.icon}}/>
                        <Div>{location}</Div>
                    </Div>
                )}
            </Div>
        </Div>
    </ArchiveListingWrapper>

EventListing.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    location: PropTypes.string,
    theme: PropTypes.object,
}

EventListing.defaultProps = {
    theme: {
        thumbnail: {},
        title: {},
    },
}

export default EventListing