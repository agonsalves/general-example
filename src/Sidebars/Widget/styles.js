import {
    block,
    none
}                from 'utils/themer'
import {globals} from 'variables/styles'

export const widgetStyle = {
    width: [370, globals.style.layoutScalingValue, '100%'],
    marginBottom: [85, .7, 50],
    mobile: {
        paddingBottom: 50,
        borderBottom: globals.style.dividingBorder,
        borderWidth: '1px',
        borderLeft: none
    },
    print: {
        display: block,
        pageBreakInside: 'avoid',
    },
    child: [
        {
            selector: 'p > strong',
            weight: 600
        }
    ]
}

export const blogSidebarWidgetStyle = {
    borderLeft: globals.style.dividingBorder,
    borderWidth: '1px',
    paddingLeft: [40, .7, '0'],
    marginBottom: [80, .7, 50],
    description: {
        size: [18, .8, 18],
        color: globals.colors.textColor,
        letterSpacing: [0.4, .7, 0.4],
        lineHeight: [30, .7, 30]
    },
    title: {
        marginBottom: 40
    }
}