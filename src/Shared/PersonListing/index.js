import PropTypes            from 'prop-types'
import React                from 'react'
import Div                  from 'Shared/Div'
import EmailLink            from 'Shared/EmailLink'
import LinkSwitch           from 'Shared/LinkSwitch'
import PhoneLink            from 'Shared/PhoneLink'
import Span                 from 'Shared/Span'
import SquareHeadshot       from 'Shared/SquareHeadshot'
import {personListingStyle} from './styles'

const PersonListing = ({name, headshot, url, position, phone, email, theme}) =>
    <Div theme={{...personListingStyle, ...theme}}>
        <LinkSwitch url={url}>
            <SquareHeadshot
                name={name}
                image={headshot}
                size={80}
                theme={{...personListingStyle.headshot, ...theme.headshot}}
            />
        </LinkSwitch>
        <Div theme={{...personListingStyle.info, ...theme.info}}>
            <LinkSwitch url={url} theme={{...personListingStyle.name, ...theme.name}}>{name}</LinkSwitch>
            {position && (
                <Div theme={{...personListingStyle.title, ...theme.title}}>{position}</Div>
            )}
            {phone && (
                <Span theme={{...personListingStyle.phone, ...theme.phone}}>
                    <PhoneLink phone={phone} theme={{...personListingStyle.phoneLink, ...theme.phoneLink}}/>
                </Span>
            )}
            {email && (
                <EmailLink
                    email={email}
                    children={email}
                    theme={{...personListingStyle.email, ...theme.email}}
                />
            )}
        </Div>
    </Div>

PersonListing.propTypes = {
    name: PropTypes.string.isRequired,
    headshot: PropTypes.object,
    url: PropTypes.string.isRequired,
    position: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    theme: PropTypes.object,
}

PersonListing.defaultProps = {
    theme: {
        headshot: {},
        name: {},
        title: {},
        phone: {},
        email: {},
        button: {},
    },
}

export default PersonListing