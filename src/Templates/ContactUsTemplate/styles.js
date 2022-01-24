import {
    auto,
    column,
    flex,
    sv
}                from '../../utils/themer'
import {globals} from '../../variables/styles'

export const contactUsStyle = {
    description: {
        size: [28, .7, 24],
        lineHeight: [42, .7, 36],
        color: globals.colors.headingColor,
        weight: 400,
        letterSpacing: 0,
        marginBottom: [62, globals.style.layoutScalingValue, 30],
        child: {
            selector: 'p',
            letterSpacing: 0
        }
    },
    wrapper: {
        display: 'grid; display: -ms-grid;',
        gridTemplateColumns: `${sv(467, globals.style.layoutScalingValue)} ${sv(467, globals.style.layoutScalingValue)}`,
        gridColumnGap: `${sv(10, globals.style.layoutScalingValue)}`,
        gridRowGap: `${sv(10, globals.style.layoutScalingValue)}`,
        msGridColumns: `${sv(467, globals.style.layoutScalingValue)} ${sv(10, globals.style.layoutScalingValue)} ${sv(467, globals.style.layoutScalingValue)}`,
        gridTemplateRows: auto,
        msGridRows: auto,
        marginBottom: [150, .7, 20],
        marginTop: 12,
        large: {
            gridTemplateColumns: '467px 467px',
            gridColumnGap: '10px',
            msGridColumns: '467px 10px 467px',
        },
        mobile: {
            display: flex,
            flexDirection: column,
        },
    }
}