import PropTypes                   from 'prop-types'
import React                       from 'react'
import Div                         from '../../../Shared/Div'
import Img                         from '../../../Shared/Img'
import {longArrowAltRight}         from '../../../variables/iconLibrary'
import ButtonIconText              from '../../../Shared/ButtonIconText'
import LinkSwitch                  from '../../../Shared/LinkSwitch'
import {clientStoriesListingStyle} from './styles'

const ClientStoryListing = ({url, image, title, description, linkText}) =>
    <LinkSwitch url={url} theme={clientStoriesListingStyle}>
        <Img image={image} theme={clientStoriesListingStyle.image}/>
        <Div theme={clientStoriesListingStyle.textPanel}>
            <Div theme={clientStoriesListingStyle.title} className={'client-story-listing-title'}>{title}</Div>
            <Div theme={clientStoriesListingStyle.description}>{description}</Div>
            <ButtonIconText
                icon={longArrowAltRight}
                children={linkText || 'Read More'}
                theme={clientStoriesListingStyle.button}
            />
        </Div>
    </LinkSwitch>

ClientStoryListing.propTypes = {
    theme: PropTypes.object,
}

ClientStoryListing.defaultProps = {
    theme: {},
}

export default ClientStoryListing