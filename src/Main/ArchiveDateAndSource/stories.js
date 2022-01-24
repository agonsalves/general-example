import {boolean}                          from '@storybook/addon-knobs/dist/index'
import React                              from 'react'
import {Decorator as WithCustomProviders} from '../../../.storybook/decorators/withCustomProviders'
import ArchiveDate                        from '../ArchiveDate'
import ArchiveDateAndSource               from '../ArchiveDateAndSource'

const archiveDateData = {
    date: '2020-11-25 00:00:00',
    displayDate: 'November 25th 2020',
    startTime: '09:25:00',
    endTime: '-08:00',
    source: 'New York Times'
}
export const archiveDateText = () =>
    <ArchiveDate
        {...archiveDateData}
        useDisplayDate={boolean('Display Date', true)}
    />

export const ArchiveDateAndTypeStory = () =>
    <ArchiveDateAndSource
        {...archiveDateData}
        useDisplayDate={boolean('Display Date', true)}
    />

const TYPE = 'snapshot'
export default {
    title: `Elements/ArchiveDate-${TYPE}`,
    component: ArchiveDate,
    decorators: [
        (story) => <WithCustomProviders>{story()}</WithCustomProviders>
    ]
}