import PropTypes              from 'prop-types'
import React                  from 'react'
import Div                    from 'Shared/Div'
import LinkSwitch             from 'Shared/LinkSwitch'
import {intersperse}          from 'utils/helpers'
import {parseHtml}            from 'utils/parseHtml'
import ArchiveDate            from '../ArchiveDate'
import {eventDetailInfoStyle} from './styles'

export const buildPeopleList = (people, other_speakers) =>
    <>
        {people && (
            <>
                {intersperse(people.map((person, i) => (
                    <LinkSwitch
                        key={i}
                        url={person.slug}
                        theme={eventDetailInfoStyle.personLink}
                        children={person.post_title}
                    />
                )), ', ')}
            </>
        )}
        {other_speakers && (
            <>
                {people && ', '}
                {other_speakers}
            </>
        )}
    </>

const EventDetailInfo = ({post}) => (
    <Div theme={eventDetailInfoStyle}>
        <Div>When:</Div>
        <Div>
            <ArchiveDate
                date={post.date}
                displayDate={post.display_date}
                useDisplayDate={!!post.use_display_date}
                startTime={post.time}
                endTime={post.end_time}
                timezone={post.timezone}
            />
        </Div>
        {post.people && (
            <>
                <Div>People:</Div>
                <Div>{buildPeopleList(post.people, post.other_speakers)}</Div>
            </>
        )}
        {post.where && (
            <>
                <Div>Location:</Div>
                <Div>
                    <Div>
                        {post.where}
                    </Div>
                    {post.location_details && (
                        <Div>
                            {parseHtml(post.location_details)}
                        </Div>
                    )}
                </Div>
            </>
        )}
    </Div>
)

EventDetailInfo.propTypes = {
    post: PropTypes.object.isRequired
}

export default EventDetailInfo