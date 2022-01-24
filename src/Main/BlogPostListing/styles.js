import {searchButton}                   from '../../Shared/ButtonLarge/styles'
import {
    auto,
    center,
    column,
    flex,
    flexStart,
    inlineBlock,
    inlineFlex,
    none,
    relative,
    spaceBetween,
    uppercase,
    wrap
}                                       from '../../utils/themer'
import {globals}                        from '../../variables/styles'
import {archiveListingStyle}            from '../ArchiveListingWrapper/styles'
import {publicationListingExcerptStyle} from '../PublicationListing/styles'

export const blogPostListingStyle = {
    flexWrap: wrap,
    flexDirection: column,
    marginBottom: 60,
    paddingBottom: 60,
    borderBottom: '2px solid #E5E5E5',
    lastChild: {
        border: none,
    },
    dateAndCat: {
        display: flex,
        alignItems: center,
        font: globals.fonts.heading,
        weight: 800,
        size: [14, .7, 14],
        marginBottom: 22,
        color: globals.colors.blue,
        hover: {
            color: globals.colors.blue
        }
    },
    dateAndSource: {
        mobile: {
            marginBottom: 7
        }
    },
    titleAndImage: {
        child: {
            selector: 'img',
            mobile: {
                display: none
            }
        }
    },
    date: {
        font: globals.fonts.heading,
        weight: 800,
        size: [14, .7, 14],
        lineHeight: [17, .7, 17],
        color: globals.colors.gray,
        textTransform: uppercase,
        position: relative,
        marginRight: [21, .7, 21],
        display: inlineFlex,
        alignItems: center
    },
    categoryWrapper: {
        display: inlineBlock,
        position: relative,
        color: globals.colors.linkActiveColor,
        marginTop: [30, .7, 30],
        marginBottom: 0,
        lineHeight: '1em'
    },
    category: {
        ...archiveListingStyle.type,
        display: inlineBlock,
        marginTop: 0,
        marginBottom: 0,
        lineHeight: '1em'
    },
    details: {
        width: '100%',
        mobile: {
            display: flex,
            flexDirection: column
        }
    },
    title: {
        marginTop: [16, .7, 16],
        marginBottom: [12, .7, 12],
    },
    byline: {
        font: globals.fonts.body,
        color: globals.colors.textColor,
        size: [18, .7, 18],
        lineHeight: [30, .7, 30],
        letterSpacing: [0.5, .7, 0.5],
        marginBottom: 13,
        marginTop: [10, .7, 10],
        name: {
            color: globals.colors.textColor
        },
    },
    image: {
        width: [205, .7, 205],
        borderRadius: 10,
        marginLeft: 45,
        marginBottom: 30,
        mobile: {
            marginLeft: 0,
            marginTop: 10,
            marginBottom: 25,
        },
        print: {
            marginLeft: 0
        },
        wrapper: {
            float: 'right',
            mobile: {
                float: none
            }
        }
    },
    excerpt: {
        ...publicationListingExcerptStyle,
    },
    button: {
        ...searchButton,
        display: inlineFlex,
        alignSelf: flexStart,
        justifyContent: spaceBetween,
        minWidth: [130, .7, 130],
        marginTop: [28, .7, 28],
        mobile: {
            marginRight: auto,
            marginLeft: 0
        }
    },

}