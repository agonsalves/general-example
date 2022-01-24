import React                              from 'react'
import {Decorator as WithCustomProviders} from '../../../.storybook/decorators/withCustomProviders'
import MarqueeBioInfo                     from './index'

const post = {
    parentPost: {
        alternate_phone_1: '212.666.9999',
        alternate_phone_1_label: 'Assistant',
        alternate_phone_2: '452.123.2136',
        alternate_title: 'Big Law Guy',
        email: 'madelman@pryorcashman.com',
        first_name: 'Micheal',
        has_alternate_phone: 'checked',
        id: 34,
        is_mobile_public: 'checked',
        key: '/michael-b-adelman',
        last_name: 'Adelman',
        //linkedin_url: "https://www.linkedin.com/in/michael-adelman-a7882ab",
        middle_initail: 'B',
        office_location:
            [{
                id: 1,
                office_id: '1',
                office_phone: '212.234.2345',
                post_name: 'washington-dc',
                post_title: 'Washington, DC',
                post_type: 'office',
                slug: '/office-locations/washington-dc'
            },
                {
                    id: '2',
                    office_id: '2',
                    office_phone: '312.523.6523',
                    post_name: 'tokyo-japan',
                    post_title: 'Tokyo, Japan',
                    post_type: 'office',
                    slug: '/office-locations/tokyo-japan'
                }]
    },
}

export const m = () => <MarqueeBioInfo post={post}/>

export default {
    title: `Marquee/Bio Info`,
    component: MarqueeBioInfo,
    decorators: [
        (story) => <WithCustomProviders>{story()}</WithCustomProviders>
    ]
}