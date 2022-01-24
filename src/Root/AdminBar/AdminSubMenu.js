import PropTypes        from 'prop-types'
import React            from 'react'
import Icon             from '../../Shared/Icon'
import Ul               from '../../Shared/Ul'
import LinkSwitch       from '../../Shared/LinkSwitch'
import {caretDownSolid} from '../../variables/iconLibrary'
import {adminBarStyles} from './styles'

const AdminSubMenu = ({addLinks, editLinks}) => {
    const subMenuLinks = [
        {label: 'Edit', links: editLinks},
        {label: 'Add New', links: addLinks},
    ]

    return (
        subMenuLinks.map((link, key) => {
            return (
                <LinkSwitch
                    key={key}
                    url=""
                    target="_self"
                    onClick={(() => null)}
                    theme={adminBarStyles.link}
                >
                    <span>{link.label}</span>
                    <Icon icon={caretDownSolid} theme={adminBarStyles.icon}/>
                    <Ul theme={adminBarStyles.subMenu}>
                        {link.links.map((link, key) =>
                            <LinkSwitch
                                key={key}
                                url={link.url}
                                target="_self"
                                children={link.label}
                            />
                        )}
                    </Ul>
                </LinkSwitch>
            )
        })

    )
}

AdminSubMenu.propTypes = {
    addLinks: PropTypes.array.isRequired,
    editLinks: PropTypes.array.isRequired
}

export default AdminSubMenu