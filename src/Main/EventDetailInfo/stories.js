import React                              from 'react'
import {Decorator as WithCustomProviders} from '../../../.storybook/decorators/withCustomProviders'
import EventDetailInfo                    from './index'
import {people_data}                      from "../../../.storybook/data/generalData"

const eventDetailInfoData = {
    date: "2019-02-07 00:00:00",
    post_name: "digital-hollywood-spring-conference-2",
    post_title: "Digital Hollywood Spring Conference",
    post_type: "event",
    where: "Gaylord Palms Resort & Convention Center",
    location_details: "<p>6000 W Osceola Parkway<br />Kissimmee, Florida 34746</p>",
    time: "18:00:00",
    end_time: "20:00:00",
    other_speakers: "Madeline Smithson, Jeremy Yoloua",
    slug: "/events/digital-hollywood-spring-conference-2",
    people : people_data
}

export const eventDetailInfoStory = () => <EventDetailInfo post = {eventDetailInfoData} />

const TYPE = 'snapshot'
export default {
    title: `Elements/EventDetailInfo-${TYPE}`,
    component: EventDetailInfo,
    decorators: [
        (story) => <WithCustomProviders>{story()}</WithCustomProviders>
    ]
}