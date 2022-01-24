import PropTypes                  from 'prop-types'
import React                      from 'react'
import {connect}                  from 'react-redux'
import ButtonIconText             from 'Shared/ButtonIconText'
import Div                        from 'Shared/Div'
import PhoneLink                  from 'Shared/PhoneLink'
import Span                       from 'Shared/Span'
import {composeGoogleMapsUrl}     from 'utils/url'
import {longArrowAltRight}        from 'variables/iconLibrary'
import Widget                     from '../Widget'
import {officeAddressWidgetStyle} from './styles'

const OfficeAddressWidget = ({company, address1, address2, city, state, postalCode, phone, fax, theme}) =>
    <Widget theme={{...officeAddressWidgetStyle, ...theme}}>
        <Div theme={{...officeAddressWidgetStyle.name, ...theme.name}}>Address</Div>
        <Div theme={{...officeAddressWidgetStyle.address, ...theme.address}}>
            <address>
                <span>{address1}</span>
                {address2 && (
                    <span><br/>{address2}</span>
                )}
                <div>
                    {`${!!city ? city + ', ' : ''} ${!!state ? state : ''} ${!!postalCode ? postalCode : ''}`}
                </div>
            </address>
            <Div theme={officeAddressWidgetStyle.phoneWrapper}>
                {phone && (
                    <Div>
                        {'Tel: '}
                        <PhoneLink phone={phone} theme={{...officeAddressWidgetStyle.phone, ...theme.phone}}/>
                    </Div>
                )}
                {fax && (
                    <Div>
                        {'Fax: '}
                        <Span children={fax} theme={{...officeAddressWidgetStyle.fax, ...theme.fax}}/>
                    </Div>
                )}
            </Div>

        </Div>
        <ButtonIconText
            children={'View Google Maps'}
            url={composeGoogleMapsUrl(company, address1, address2, city, state, postalCode)}
            icon={longArrowAltRight}
            theme={officeAddressWidgetStyle.button}
        />
    </Widget>


OfficeAddressWidget.propTypes = {
    address1: PropTypes.string,
    address2: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    postalCode: PropTypes.string,
    phone: PropTypes.string,
}

OfficeAddressWidget.defaultProps = {
    theme: {}
}

const mapStateToProps = ({site}) => ({
    company: site.config.firmName,
})

export default connect(mapStateToProps)(OfficeAddressWidget)