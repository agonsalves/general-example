import {contentRow} from 'Root/PageFrame/styles'
import {
    isAboutUsSection,
    isArchiveDetail,
    isArchiveListing,
    isBlog,
    isCareersSection,
    isContactPage,
    isOfficeDetail,
    isPracticeSearch
}                   from 'utils/flags'
import {
    absolute,
    none,
    relative,
    white
}                   from 'utils/themer'
import {globals}    from 'variables/styles'

export const sidebarStyleSwitch = post => {
    const baseStyle = {
        msGridRow: contentRow,
        gridRow: contentRow,
        msGridColumn: 4,
        gridColumn: '4 / 6',
        msGridColumnSpan: 2,
        paddingTop: [85, .7, '0'],
        paddingRight: [60, .4],
        backgroundColor: white,
        position: relative,
        zIndex: 4,
        child: {
            selector: '> div',
            child: [
                {
                    selector: ':empty',
                    display: none
                },
                {
                    selector: '> div',
                    mobile: {
                        lastChild: {
                            border: 0
                        }
                    }
                }
            ],
        },
        mobile: {
            padding: '0 25px',
        },
        print: {
            paddingTop: 0
        }
    }

    if (isArchiveListing(post) || isArchiveDetail(post) || isBlog(post))
        return {
            ...baseStyle,
            marginLeft: [-45, globals.style.layoutScalingValue, '0'],
            mobile: {
                ...baseStyle.mobile,
                paddingTop: 35,
                position: relative,
            },
            inner: {
                before: {
                    mobile: {
                        content: '\'\'',
                        height: '1px',
                        width: 'calc(100% - 50px)',
                        background: globals.colors.borderColor,
                        left: 25,
                        position: absolute,
                        top: 0
                    }
                }
            }
        }

    if (isAboutUsSection(post) || isCareersSection(post))
        return {
            ...baseStyle,
            marginLeft: [-80, globals.style.layoutScalingValue, '0']
        }

    if (isPracticeSearch(post))
        return {
            ...baseStyle,
            paddingTop: [71, .7, '0'],
            zIndex: 5
        }

    if (isOfficeDetail(post))
        return {
            ...baseStyle,
            paddingTop: [65, .7, '0'],
            marginLeft: [-80, globals.style.layoutScalingValue, '0']
        }

    if (isContactPage(post)) {
        return {
            ...baseStyle,
            paddingTop: [76, .7, '0'],
            marginLeft: [-80, globals.style.layoutScalingValue, '0']
        }
    }

    return {
        ...baseStyle
    }
}