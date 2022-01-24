import Div                            from 'Shared/Div'
import PropTypes                      from 'prop-types'
import React                          from 'react'
import {micrositeSectionWrapperStyle} from './styles'

const MicrositeSectionWrapper = ({post, ...props}) =>
    <Div theme={micrositeSectionWrapperStyle(post)} {...props}/>

MicrositeSectionWrapper.propTypes = {
    post: PropTypes.object.isRequired
}

export default MicrositeSectionWrapper