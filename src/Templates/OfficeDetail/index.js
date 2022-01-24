import Div                       from 'Shared/Div'
import H1                        from 'Shared/H1'
import Img                       from 'Shared/Img'
import {archiveDetailTitleStyle} from 'DetailFrame/DetailFrameInner/styles'
import PostContent               from 'Main/PostContent'
import PropTypes                 from 'prop-types'
import React                     from 'react'
import {useSelector}             from 'react-redux'
import {
    Marker,
    StaticGoogleMap
}                                from 'react-static-google-map'
import {mobileFlag}              from 'redux/selectors'
import NoCookiePlaceholder       from 'Shared/NoCookiePlaceholder'
import RichText                  from 'Shared/RichText'
import OfficeAddressWidget       from 'Sidebars/OfficeAddressWidget'
import styled                    from 'styled-components'
import {themer}                  from 'utils/themer'
import {
    officeDetailDescStyle,
    officeDetailHeadingStyle,
    officeDetailTopStyle
}                                from './styles'

const GoogleMap = styled(StaticGoogleMap)`${props => themer(props.theme)}`

const getGoogleMapUrl = post =>
    [post.street_address, post.extended_address, post.address_locality, post.address_region, post.postal_code].join('+')

const OfficeDetail = ({post}) => {
    const {
        small_image,
        post_title,
        full_content,
        street_address,
        extended_address,
        address_locality,
        address_region,
        postal_code,
        telephone,
        fax_number,
    } = post
    const isMobile = useSelector(mobileFlag)

    return (
        <PostContent post={post}>
            <H1 theme={{...archiveDetailTitleStyle(post), ...officeDetailHeadingStyle}}>
                {post_title}
            </H1>
            <Div theme={officeDetailTopStyle}>
                {small_image && (
                    <Img image={small_image} theme={officeDetailTopStyle.image}/>
                )}
                <NoCookiePlaceholder theme={{...officeDetailTopStyle.noCookie}}>
                    <GoogleMap
                        theme={officeDetailTopStyle.googleMap}
                        size="640x416"
                        zoom={15}
                        apiKey="AIzaSyDaeBJgG1cLSilSaB7S5uMSQTpskoCkA1w"
                        width={640}
                        height={416}
                    >
                        <Marker
                            location={getGoogleMapUrl(post)}
                        />
                    </GoogleMap>
                    {isMobile && (
                        <OfficeAddressWidget
                            address1={street_address}
                            address2={extended_address}
                            city={address_locality}
                            state={address_region}
                            postalCode={postal_code}
                            phone={telephone}
                            fax={fax_number}
                            theme={officeDetailTopStyle.addressWidget}
                        />
                    )}
                </NoCookiePlaceholder>
            </Div>
            <RichText theme={officeDetailDescStyle}>
                {full_content}
            </RichText>
        </PostContent>
    )
}


OfficeDetail.propTypes = {
    post: PropTypes.object.isRequired,
}

export default OfficeDetail