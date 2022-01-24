import {personMicrositeBioInfoStyle} from '../../../Marquee/MarqueeBioInfo/styles'
import {
    auto,
    block,
    column,
    flex,
    flexStart
}                                    from '../../../utils/themer'
import {
    colorPalette,
    globals
}                                    from '../../../variables/styles'

export const mobilePersonMicrositeBioTitleWrapperStyle = {
    mobile: {
        marginBottom: 20
    }
}

export const mobilePersonMicrositeBioTitleStyle = {
    mobile: {
        display: block
    }
}

export const mobilePersonMicrositeBioInfoStyle = {
    ...personMicrositeBioInfoStyle,
    position: {
        ...personMicrositeBioInfoStyle.position,
        mobile: {
            color: globals.colors.headingColor,
            display: block
        }
    },
    emailWrapper: hasPhoto => {
        const baseStyle = {
            ...personMicrositeBioInfoStyle.emailWrapper,
            mobile: {
                display: flex,
                color: globals.colors.headingColor,
                marginTop: 0
            }
        }

        if (hasPhoto)
            return {
                ...baseStyle,
                mobile: {
                    ...baseStyle.mobile,
                    marginTop: 0
                }
            }

        return {
            ...baseStyle
        }
    },
    email: {
        ...personMicrositeBioInfoStyle.email,
        mobile: {
            color: globals.colors.headingColor,
        }
    },
    iconWrapper: {
        ...personMicrositeBioInfoStyle.iconWrapper,
        mobile: {
            height: auto,
            width: auto,
            minWidth: 0
        }
    },
    phoneList: {
        ...personMicrositeBioInfoStyle.phoneList,
        mobile: {
            display: flex,
            paddingBottom: 36
        },
        iconWrapper: {
            mobile: {
                height: auto,
                width: auto,
                minWidth: 0
            }
        },
        phoneLink: {
            ...personMicrositeBioInfoStyle.phoneList.phoneLink,
            mobile: {
                display: flex
            }
        },
        nameLink: {
            ...personMicrositeBioInfoStyle.phoneList.nameLink,
            mobile: {
                display: flex
            }
        }
    }
}

export const mobilePersonIconLinksStyle = {
    mobile: {
        flexDirection: column,
        borderTop: globals.style.dividingBorder,
        borderBottom: globals.style.dividingBorder,
        borderWidth: '1px',
        paddingTop: 40,
        paddingBottom: 15,
        marginBottom: 10,
        alignItems: flexStart,
    },
    iconWrap: {
        mobile: {
            height: 40,
            width: 40,
            backgroundColor: colorPalette.lightGray
        }
    },
    link: {
        mobile: {
            backgroundColor: globals.colors.personIconBackgroundColor,
            marginRight: 18
        }
    }

}