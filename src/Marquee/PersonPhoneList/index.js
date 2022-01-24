import PropTypes                     from 'prop-types'
import React, {memo}                 from 'react'
import {useSelector}                 from 'react-redux'
import {mobileFlag}                  from 'redux/selectors'
import Div                           from 'Shared/Div'
import Icon                          from 'Shared/Icon'
import LinkSwitch                    from 'Shared/LinkSwitch'
import PhoneLink                     from 'Shared/PhoneLink'
import {splitOfficeByType}           from 'utils/splitArray'
import {
    mapMarker,
    phone
}                                    from 'variables/iconLibrary'
import {personMicrositeBioInfoStyle} from '../MarqueeBioInfo/styles'
import {personPhoneListWrapperStyle} from './styles'

const PersonPhoneList = memo(({post, theme}) => {
    const isMobile = useSelector(mobileFlag)
    let numbers = []
    const personPhoneList = (post) => {
        if (post.office_location)
            post.office_location.forEach(item => {
                if (numbers.length < 4) {
                    numbers.push({
                        type: 'type-office',
                        url: item.slug,
                        label: item.post_title,
                        number: item.office_phone
                    })
                }
            })

        if (post.alternate_phone_2 && post.is_mobile_public && numbers.length < 4)
            numbers.push({
                type: 'type-phone',
                label: 'Mobile',
                number: post.alternate_phone_2
            })

        if (post.has_alternate_phone && post.alternate_phone_1 && numbers.length < 4)
            numbers.push({
                type: 'type-phone',
                label: post.alternate_phone_1_label,
                number: post.alternate_phone_1
            })

        return numbers
    }
    personPhoneList(post)

    return (
        <Div theme={{...personPhoneListWrapperStyle, ...theme}}>
            {splitOfficeByType(numbers).map((number, i) => (
                <span key={i}>
                    {number.length > 0 && (
                        <Div theme={{...personPhoneListWrapperStyle.column, ...theme.column}} key={i}>
                            <Div theme={{...personMicrositeBioInfoStyle.iconWrapper, ...theme.iconWrapper}}>
                                <Icon
                                    icon={number[0].type === 'type-office' ? mapMarker : phone}
                                    theme={personMicrositeBioInfoStyle.numbersIcon(number[0].type === 'type-office')}
                                />
                            </Div>
                            <Div theme={personPhoneListWrapperStyle.numberWrapper}>
                                {number.map((item, i) =>
                                    <Div
                                        key={i}
                                        className={item.type}
                                        theme={{...personPhoneListWrapperStyle.columnInner, ...theme.columnInner}}
                                    >
                                        <LinkSwitch
                                            url={item.url}
                                            theme={{...personPhoneListWrapperStyle.nameLink, ...theme.nameLink}}
                                        >
                                            {(item.label && item.label + (item.number && !isMobile ? '' : '')) || ''}
                                        </LinkSwitch>
                                        {item.number && (
                                            <PhoneLink
                                                phone={item.number}
                                                theme={item.label ? {...personPhoneListWrapperStyle.phoneLink, ...theme.phoneLink} : {...personPhoneListWrapperStyle.phoneLink, ...theme.phoneLinkWithoutDash}}
                                            />
                                        )}
                                    </Div>
                                )}
                            </Div>
                        </Div>
                    )}
                </span>
            ))}
        </Div>
    )
})

PersonPhoneList.propTypes = {
    post: PropTypes.object.isRequired,
}

PersonPhoneList.defaultProps = {
    theme: {}
}

export default PersonPhoneList