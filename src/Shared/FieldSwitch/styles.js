import {relative} from 'utils/themer'
import {globals}  from 'variables/styles'

export const fieldOuterStyle = {
    position: relative,
    flexGrow: 1,
    child: [
        {
            selector: '.focused',
            child: {
                selector: 'input',
                borderColor: globals.colors.linkActiveColor
            },
            borderRadius: [globals.style.inputBorderRadius, .7, globals.style.inputBorderRadius],
        }
    ]
}