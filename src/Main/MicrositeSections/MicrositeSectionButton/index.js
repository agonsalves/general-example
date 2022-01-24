import {ScrollContext}     from 'Controllers/MicrositeScrollController'
import React, {useContext} from 'react'
import ButtonIconText      from 'Shared/ButtonIconText'
import ButtonLarge         from 'Shared/ButtonLarge'
import {plural}            from 'utils/helpers'
import {
    longArrowAltDown,
    longArrowAltRight
}                          from 'variables/iconLibrary'
import {
    micrositeSectionListingViewAllButtonStyle,
    micrositeSectionListingViewMoreButtonStyle
}                          from './styles'

const MicrositeSectionButton = ({perRow, maxRows, isExpanded, totalPosts, setIsExpanded, postType, listingUrl, pathname, listingPage}) => {
    let maxPosts = perRow * maxRows
    let tooMuch = totalPosts > maxPosts
    let needMore = totalPosts > perRow
    const {updateSectionOffset} = useContext(ScrollContext)

    const chooseButton = () => {
        if (needMore && !isExpanded) {
            return (
                <ButtonIconText
                    url=""
                    onClick={() => {
                        setIsExpanded(true)
                        setTimeout(() => {
                            updateSectionOffset()
                        }, 10)
                    }}
                    label={`More ${plural(postType)}`}
                    icon={longArrowAltDown}
                    theme={micrositeSectionListingViewMoreButtonStyle}
                />
            )
        }

        if (tooMuch && isExpanded) {
            return (
                <ButtonLarge
                    url={listingUrl || `${pathname}${listingPage}`}
                    label={`All ${plural(postType)}`}
                    theme={micrositeSectionListingViewAllButtonStyle}
                    icon={longArrowAltRight}
                />
            )
        }

    }

    return (
        <>
            {chooseButton()}
        </>
    )


}

export default MicrositeSectionButton