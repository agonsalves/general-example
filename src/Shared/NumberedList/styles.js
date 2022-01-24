import {
    absolute,
    none,
    relative
}                from 'utils/themer'
import {globals} from 'variables/styles'

export const numberedListStyle = {
    counterReset: 'li',
    marginBottom: 30,
    child: {
        selector: 'li',
        position: relative,
        listStyle: none,
        marginLeft: [40, .7, 40],
        marginBottom: [9, .7, 10],
        lineHeight: '23px', // to prevent alignment issues in IE11 needs to be an static value
        before: {
            position: absolute,
            color: globals.colors.textColor,
            content: 'counter(li) \'.\'',
            counterIncrement: 'li',
            marginLeft: [-40, .7, -40],
        },
        child: {
            selector: 'ol',
            counterReset: 'li',
            marginTop: [8, .7, 6],
            mobile: {
                marginLeft: 21
            },
            child: {
                selector: 'li',
                marginLeft: 0,
                paddingLeft: [40, .7, '20']
            }
        }
    }
}