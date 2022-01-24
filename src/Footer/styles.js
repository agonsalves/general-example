import {
    block,
    borderBox,
    center,
    column,
    flex,
    flexEnd,
    flexStart,
    relative,
    row,
    spaceBetween,
    white
}                from 'utils/themer'
import {globals} from 'variables/styles'

export const footerStyle = {
    position: relative,
    display: flex,
    flexDirection: row,
    height: [200, .7, 'auto'],
    justifyContent: spaceBetween,
    alignItems: center,
    boxSizing: borderBox,
    paddingTop: [73, globals.style.dividingBorder, 35],
    maxWidth: [1432, globals.style.layoutScalingValue, '100%'],
    margin: '0 auto',
    width: [1432, globals.style.layoutScalingValue, '100%'],
    mobile: {
        flexDirection: column,
        padding: '40px 30px',
    },
    inner: {
        display: flex,
        flexDirection: column,
        alignItems: flexEnd,
        alignSelf: flexStart,
        mobile: {
            flexDirection: 'column',
            alignItems: flexStart
        }
    },
    print: {
        pageBreakInside: 'avoid'
    },
    attribution: {
        display: block,
        size: [10, .7, 10],
        lineHeight: [13, .7, 13],
        letterSpacing: [2, .7, 2],
        marginTop: [27, .7, 30],
        child: {
            selector: 'a',
            color: white,
            hover: {
                color: globals.colors.blue
            }
        },
        desktop: {
            textAlign: center,
        },
        print: {
            color: globals.colors.textColor
        }
    }
}