import React, {useState} from 'react'
import Div               from 'Shared/Div'
import Span              from 'Shared/Span'
import LinkSwitch        from 'Shared/LinkSwitch'
import {
    globalSearchInfoBoxStyle,
    globalSearchInfoIconStyle,
    globalSearchMatchExactButtonStyle,
    globalSearchMatchExactTextStyle,
    globalSearchMatchFuzzyButtonStyle,
    globalSearchMatchFuzzyTextStyle,
    globalSearchMatchStyle,
    globalSearchWrapperStyle
}                        from './styles'


const GlobalSearchMode = ({post}) => {
    const {query: queryObject} = post.search
    const {s: query, matchType} = queryObject
    const [infoBox, setInfoBox] = useState(false)
    const isExact = query.includes('"') || matchType === 'phrase'

    return (
        <Div theme={globalSearchWrapperStyle}>
            <Div theme={globalSearchMatchStyle}>
                <LinkSwitch
                    url={`?s=${query}&matchType=keyword`}
                    theme={globalSearchMatchFuzzyButtonStyle}
                >
                    <Span theme={globalSearchMatchFuzzyTextStyle(isExact)}>
                        Fuzzy Match
                    </Span>
                </LinkSwitch>
                <LinkSwitch
                    url={`?s=${query}&matchType=phrase`}
                    theme={globalSearchMatchExactButtonStyle}
                >
                    <Span theme={globalSearchMatchExactTextStyle(isExact)}>
                        Exact Match
                    </Span>
                </LinkSwitch>
            </Div>
            <Span
                theme={globalSearchInfoIconStyle}
                onMouseOver={() => setInfoBox(true)}
                onMouseOut={() => setInfoBox(false)}
            >
                i
                {infoBox && (
                    <Div theme={globalSearchInfoBoxStyle}>
                        <Div theme={globalSearchInfoBoxStyle.triangle}/>
                        “Fuzzy match” includes word variants like misspellings,
                        plurals and prefixes/suffixes in the search results.
                        “Exact match” only searches for the exact words typed.
                    </Div>
                )}
            </Span>
        </Div>
    )
}

export default GlobalSearchMode