import PropTypes                from 'prop-types'
import React                    from 'react'
import PracticeSearchForm       from 'Shared/PracticeSearchForm'
import {practiceSearchBarStyle} from './styles'

const PracticeSearchBar = ({theme}) =>
    <PracticeSearchForm hasButton={true} theme={{...practiceSearchBarStyle, ...theme}}/>

PracticeSearchBar.propTypes = {
    theme: PropTypes.object,
}

PracticeSearchBar.defaultProps = {
    theme: {},
}

export default PracticeSearchBar