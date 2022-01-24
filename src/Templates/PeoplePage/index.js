import {headerMenuPanelStyle} from 'Header/HeaderMenuPanels/HeaderMenuPanelWrapper/styles'
import PropTypes              from 'prop-types'
import React, {useState}      from 'react'
import Div                    from 'Shared/Div'
import H2                     from 'Shared/H2'
import Icon                   from 'Shared/Icon'
import Span                   from 'Shared/Span'
import PeoplePageAlphabet     from './PeoplePageAlphabet'
import PeopleSearchForm       from 'Shared/PeopleSearchForm'
import {singular}             from 'utils/helpers'
import {useSelector}          from 'react-redux'
import {mobileFlag}           from '../../redux/selectors'
import {
    minus,
    plus
}                             from 'variables/iconLibrary'
import {peopleMenuPanelStyle} from './styles'

const PeoplePage = ({post}) => {
    const isMobile = useSelector(mobileFlag)
    const [isExpanded, setIsExpanded] = useState(false)
    return (
        <>
            <H2 theme={headerMenuPanelStyle.heading}>Find a {singular('person')}</H2>
            <PeoplePageAlphabet theme={peopleMenuPanelStyle.alphabet} isMobile/>
            <Div theme={peopleMenuPanelStyle.search}>
                <PeopleSearchForm
                    query={post.search?.query}
                    theme={peopleMenuPanelStyle.searchForm}
                    isAdvanced={isExpanded || isMobile}
                />

                <Div theme={{display: 'flex', justifyContent: 'space-between'}}>
                    {!isMobile && (<Span
                        onClick={() => setIsExpanded(!isExpanded)}
                        theme={peopleMenuPanelStyle.advancedSearch}>
                        <Icon
                            icon={!isExpanded ? plus : minus}
                            theme={peopleMenuPanelStyle.advancedSearchIcon}
                        />
                        {`${isExpanded ? 'Basic' : 'Advanced'} search`}
                    </Span>)}
                </Div>
            </Div>
        </>
    )
}

PeoplePage.propTypes = {
    post: PropTypes.object.isRequired,
}


export default PeoplePage