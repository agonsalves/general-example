import {
    auto,
    sv
}                from '../../utils/themer'
import {globals} from '../../variables/styles'

export const eventDetailInfoStyle = {
    font: globals.fonts.body,
    color: globals.colors.textColor,
    display: '-ms-grid; display: grid',
    gridTemplateColumns: `${sv(85)} 1fr`,
    gridTemplateRows: auto,
    msGridColumns: `${sv(85)} 1fr`,
    msGridRows: auto,
    width: '100%',
    size: [18, .7, 18],
    lineHeight: [30, .7, 30],
    weight: 300,
    mobile: {
        width: '100%',
        gridTemplateColumns: `85px 1fr`,
        msGridColumns: `85px 1fr`,
    },
    // TODO: There is no way to tell what any of these styles refer to. Use classes. Is grid necessary?
    child: [
        {
            selector: '> div:nth-child(1)',
            msGridRow: 1,
            msGridColumn: 1,
        },
        {
            selector: '> div:nth-child(2)',
            msGridRow: 1,
            msGridColumn: 2,
        },
        {
            selector: '> div:nth-child(3)',
            msGridRow: 2,
            msGridColumn: 1,
        },
        {
            selector: '> div:nth-child(4)',
            msGridRow: 2,
            msGridColumn: 2,
        },
        {
            selector: '> div:nth-child(5)',
            msGridRow: 3,
            msGridColumn: 1,
        },
        {
            selector: '> div:nth-child(6)',
            msGridRow: 3,
            msGridColumn: 2,
        }
    ],
    personLink: {
        textDecoration: 'underline',
        color: globals.colors.textColor,
        hover: {
            color: globals.colors.blue
        }
    }
}