import PropTypes            from 'prop-types'
import React                from 'react'
import Div                  from 'Shared/Div'
import LinkSwitch           from 'Shared/LinkSwitch'
import PhoneLink            from 'Shared/PhoneLink'
import SquareHeadshot       from 'Shared/SquareHeadshot'
import {personContactStyle} from './styles'

const PersonContact = ({image, name, email, position, phone, url, theme}) =>
    <Div theme={{...personContactStyle.contact, ...theme.contact}}>
        {(image || url) && (
            <LinkSwitch url={url}>
                <SquareHeadshot
                    image={image}
                    name={name}
                    theme={{...personContactStyle.image, ...theme.image}}
                />
            </LinkSwitch>
        )}
        <Div theme={{...personContactStyle.info, ...theme.info}}>
            {position && (
                <Div
                    theme={{...personContactStyle.position, ...theme.position}}
                    children={position}
                />
            )}
            {name && (
                <LinkSwitch
                    url={url}
                    theme={{...personContactStyle.name, ...theme.name}}
                    children={name}
                />
            )}
            {phone && (
                <Div theme={{...personContactStyle.phone, ...theme.phone}}>
                    <PhoneLink phone={phone}/>
                </Div>
            )}
            {email && (
                <LinkSwitch
                    theme={{...personContactStyle.email, ...theme.email}}
                    url={`mailto:${email}`}
                    children="Email"
                />
            )}
        </Div>
    </Div>

PersonContact.propTypes = {
    email: PropTypes.string,
    image: PropTypes.object,
    phone: PropTypes.string,
    position: PropTypes.string,
    theme: PropTypes.object,
    url: PropTypes.string
}

PersonContact.defaultProps = {
    theme: {},
}

export default PersonContact