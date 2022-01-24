import React from 'react'
import Div   from 'Shared/Div'
import {
    column,
    flex
}            from 'utils/themer'

const micrositeSectionInnerStyle = {
    display: flex,
    mobile: {
        flexDirection: column
    }
}

const MicrositeSectionInner = props =>
    <Div theme={micrositeSectionInnerStyle} {...props}/>

export default MicrositeSectionInner