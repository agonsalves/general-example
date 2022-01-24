import PropTypes            from 'prop-types'
import React                from 'react'
import Div                  from 'Shared/Div'
import Img                  from 'Shared/Img'
import LinkSwitch           from 'Shared/LinkSwitch'
import {officeListingStyle} from './styles'

const OfficeListing = ({
                           image,
                           city,
                           state,
                           slug,
                           street_address,
                           extended_address,
                           address_locality,
                           address_region,
                       }) =>
    <LinkSwitch url={slug} theme={officeListingStyle}>
        {image && (
            <Img image={image} theme={officeListingStyle.image}/>
        )}
        {city && state && (
            <Div theme={officeListingStyle.name}>
                {city}{', '}{state}
            </Div>
        )}
        {street_address && (
            <Div theme={officeListingStyle.addressWrapper}>
                <Div>
                    {street_address}
                    {extended_address && (
                        <span>{', '}{extended_address}</span>
                    )}
                </Div>
                <Div>
                    {address_locality}
                    {address_region && (
                        <span>{', '}{address_region}</span>
                    )}
                </Div>
            </Div>
        )}
    </LinkSwitch>

OfficeListing.propTypes = {
    image: PropTypes.object,
    city: PropTypes.string,
    state: PropTypes.string,
    slug: PropTypes.string,
}

export default OfficeListing