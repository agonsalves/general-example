import {headerMenuPanelStyle} from 'Header/HeaderMenuPanels/HeaderMenuPanelWrapper/styles'
import PropTypes              from 'prop-types'
import React, {useState}      from 'react'
import Div                    from 'Shared/Div'
import H2                     from 'Shared/H2'
import Icon                   from 'Shared/Icon'
import Span                   from 'Shared/Span'
import PeopleSearchAlphabet   from 'Shared/PeopleSearchAlphabet'
import PeopleSearchForm       from 'Shared/PeopleSearchForm'
import {singular}             from 'utils/helpers'
import {
    minus,
    plus
}                             from 'variables/iconLibrary'
import {peopleMenuPanelStyle} from './styles'

const MenuPanelPeople = ({post}) => {
    const [isExpanded, setIsExpanded] = useState(false)
    return (
        <>
            <H2 theme={headerMenuPanelStyle.heading}>Find a {singular('person')}</H2>
            <Div theme={peopleMenuPanelStyle.search}>
                <PeopleSearchForm
                    query={post.search?.query}
                    theme={peopleMenuPanelStyle.searchForm}
                    isAdvanced={isExpanded}
                />

                <Div theme={{display: 'flex', justifyContent: 'space-between'}}>
                    <Span
                        onClick={() => setIsExpanded(!isExpanded)}
                        theme={peopleMenuPanelStyle.advancedSearch}>
                        <Icon
                            icon={!isExpanded ? plus : minus}
                            theme={peopleMenuPanelStyle.advancedSearchIcon}
                        />
                        {`${isExpanded ? 'Basic' : 'Advanced'} search`}
                    </Span>
                </Div>
            </Div>
            <PeopleSearchAlphabet theme={peopleMenuPanelStyle.alphabet}/>
        </>
    )
}

MenuPanelPeople.propTypes = {
    post: PropTypes.object.isRequired,
}


export default MenuPanelPeople