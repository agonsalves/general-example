import {
    isAboutUsSection,
    isArchiveDetail,
    isArchiveListing,
    isBlog,
    isCareersSection,
    isContactPage,
    isHomepage,
    isOfficeDetail,
    isPersonMicrosite,
    isPracticeMicrosite
}                from '../../utils/flags'
import {
    absolute,
    block,
    none,
    sv,
    white
}                from '../../utils/themer'
import {globals} from '../../variables/styles'

export const headerBackgroundStyleSwitch = (post) => {
    const baseStyle = {
        position: absolute,
        gridColumn: '1 / 7',
        msGridColumn: 1,
        msGridColumnSpan: 6,
        gridRow: 1,
        msGridRow: 1,
        gridRowStart: 1,
        gridRowEnd: 2,
        gridColumnStart: 1,
        gridColumnEnd: 7,
        width: '100%',
        height: '100%',
        minHeight: 1200,
        maxHeight: 1200,
        zIndex: 0,
        backgroundImage: `url(${process.env.REACT_APP_CDN_LOCATION + 'marquee-generic.jpg'})`,
        backgroundPositionX: 'center',
        backgroundPositionY: `${sv((globals.style.headerHeight), .7)}`,
        backgroundRepeat: 'no-repeat',
        after: {
            content: '""',
            display: block,
            width: '100%',
            height: '50vh',
            position: absolute,
            top: '100%',
            backgroundColor: white
        },
        print: {
            background: none
        },
        maxWidth: 'initial',
        backgroundSize: `${sv((1920), .58)}`,
        transition: 'background-size 500ms ease, background-position-x 500ms ease',
        large: {
            backgroundSize: '1920px',
            backgroundPositionY: '155px'
        },
        mobile: {
            backgroundColor: white,
            backgroundSize: '1310px',
            backgroundPositionX: '-240px',
            backgroundPositionY: '60px'
        }
    }

    if (isAboutUsSection(post)) {
        return {
            ...baseStyle,
            backgroundImage: `url(${process.env.REACT_APP_CDN_LOCATION + 'marquee-about.jpg'})`,
            mobile: {
                ...baseStyle.mobile,
                backgroundSize: '1100px',
                backgroundPositionX: '-330px',
            }
        }
    }

    if (isCareersSection(post)) {
        return {
            ...baseStyle,
            backgroundImage: `url(${process.env.REACT_APP_CDN_LOCATION + 'marquee-careers.jpg'})`,
            mobile: {
                ...baseStyle.mobile,
                backgroundSize: '1100px',
                backgroundPositionX: '-330px',
            }
        }
    }

    if (isPersonMicrosite(post)) {
        return {
            ...baseStyle,
            backgroundImage: post.parentPost.photo
                ? `url(${post.parentPost.photo.url})`
                : `url(${process.env.REACT_APP_CDN_LOCATION + 'marquee-person-placeholder.jpg'})`,
            mobile: {
                ...baseStyle.mobile,
            }
        }
    }

    if (isHomepage(post)) {
        return {
            ...baseStyle,
            backgroundImage: `url(${process.env.REACT_APP_CDN_LOCATION + 'marquee-home.jpg'})`,
            mobile: {
                ...baseStyle.mobile,
            }
        }
    }

    if (isPracticeMicrosite(post)) {
        if (post.designate_as_industry) {
            return {
                ...baseStyle,
                backgroundImage:
                    `url(${process.env.REACT_APP_CDN_LOCATION}marquee-industries/${
                        (post.industry_marquee !== 'default')
                            ? post.industry_marquee
                            : 'Skyscraper'
                    }.jpg)`,
                mobile: {
                    ...baseStyle.mobile,
                }
            }
        } else {
            return {
                ...baseStyle,
                backgroundImage: `url(${process.env.REACT_APP_CDN_LOCATION + 'marquee-services-placeholder.jpg'})`,
                mobile: {
                    ...baseStyle.mobile,
                }
            }
        }
    }

    if (isContactPage(post) || isOfficeDetail(post)) {
        return {
            ...baseStyle,
            backgroundImage: `url(${process.env.REACT_APP_CDN_LOCATION + 'marquee-contact.jpg'})`,
            mobile: {
                ...baseStyle.mobile,
            }
        }
    }

    if (isArchiveListing(post)) {
        return {
            ...baseStyle,
            backgroundImage: `url(${process.env.REACT_APP_CDN_LOCATION + 'marquee-news.jpg'})`,
            mobile: {
                ...baseStyle.mobile,
            }
        }
    }

    if (isBlog(post)) {
        return {
            ...baseStyle,
            backgroundImage: `url(${process.env.REACT_APP_CDN_LOCATION + 'marquee-blog.png'})`,

            mobile: {
                ...baseStyle.mobile,
            }
        }
    }

    if (isArchiveDetail(post)) {
        return {
            ...baseStyle,
            backgroundImage: `url(${process.env.REACT_APP_CDN_LOCATION + 'marquee-news.jpg'})`,

            mobile: {
                ...baseStyle.mobile,
            }
        }
    }

    return {
        ...baseStyle
    }

}