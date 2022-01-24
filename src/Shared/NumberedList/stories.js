import React                              from 'react'
import {Decorator as WithCustomProviders} from '../../../.storybook/decorators/withCustomProviders'
import NumberedList                       from './index'
import BulletedList                       from '../BulletedList'

export const listDataArray = [
    "Federal Deposit Insurance Corporation (FDIC)",
    "Federal Reserve Bank of New York",
    "Federal Reserve Board",
    "New Jersey Department of Banking and Insurance",
    "New York State Department of Financial Services",
    "Office of the Comptroller of the Currency (OCC)"
]

export const numberedListStory = () =>
    <NumberedList>
        {listDataArray.map((item, index) =>
            <li key={index}>
                {item}
            </li>
        )}
    </NumberedList>

export const bulletedListStory = () =>
    <BulletedList>
        {listDataArray.map((item, index) =>
            <li key={index}>
                {item}
            </li>
        )}
    </BulletedList>

export default {
    title: `Basic/Numbered List`,
    component: NumberedList,
    decorators: [(story) => <WithCustomProviders>{story()}</WithCustomProviders>]
}