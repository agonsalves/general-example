import PropTypes                 from 'prop-types'
import React                     from 'react'
import H1                        from 'Shared/H1'
import {pageTitleInContentStyle} from './styles'

const PageTitle = ({post, theme, ...props}) =>
    <H1 theme={{...pageTitleInContentStyle(post), ...theme}} {...props}/>

PageTitle.propTypes = {
    post: PropTypes.object,
    theme: PropTypes.object
}

export default PageTitle