import React                              from 'react'
import {Decorator as WithCustomProviders} from '../../../.storybook/decorators/withCustomProviders'
import {listDataArray}                    from '../NumberedList/stories'
import BulletedList                       from './index'

export const bulletedListStory = () =>
    <BulletedList>
        {listDataArray.map((item, index) =>
            <li key={index}>
                {item}
            </li>
        )}
    </BulletedList>

export default {
    title: `Basic/Bulleted List`,
    component: BulletedList,
    decorators: [(story) => <WithCustomProviders>{story()}</WithCustomProviders>]
}