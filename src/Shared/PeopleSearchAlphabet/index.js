import PropTypes             from 'prop-types'
import React                 from 'react'
import {connect}             from 'react-redux'
import Div                   from 'Shared/Div'
import Icon                  from 'Shared/Icon'
import LinkSwitch            from 'Shared/LinkSwitch'
import {longArrowAltRight}   from 'variables/iconLibrary'
import {alphabetFilterStyle} from './styles'

const PeopleSearchAlphabet = ({alphabet, theme}) => {
    return (
        <Div theme={{...alphabetFilterStyle, ...theme}}>
            <Div theme={{...alphabetFilterStyle.inner, ...theme.inner}}>
                {alphabet.map(item =>
                    <LinkSwitch
                        theme={{...alphabetFilterStyle.letter, ...theme.letter}}
                        key={item.letter}
                        url={(item.active
                            && `/people?search[post_type]=person&search[letter]=${item.letter}`) || null}
                        children={item.letter}
                    />
                )}
                <LinkSwitch
                    theme={{...alphabetFilterStyle.viewAllLetter, ...theme.viewAllLetter}}
                    url={`/people?search[post_type]=person`}
                >
                    View All
                </LinkSwitch>
            </Div>
            <LinkSwitch
                theme={{...alphabetFilterStyle.viewAll, ...theme.viewAll}}
                url={`/people?search[post_type]=person`}
            >
                View All
                <Icon icon={longArrowAltRight} theme={{...alphabetFilterStyle.viewAllIcon, ...theme.viewAllIcon}}/>
            </LinkSwitch>
        </Div>
    )
}


PeopleSearchAlphabet.propTypes = {
    alphabet: PropTypes.array.isRequired,
    theme: PropTypes.object
}

PeopleSearchAlphabet.defaultProps = {
    theme: {}
}

const mapStateToProps = ({site}) => ({
    alphabet: site.config.person.alphabet
})

export default connect(mapStateToProps)(PeopleSearchAlphabet)