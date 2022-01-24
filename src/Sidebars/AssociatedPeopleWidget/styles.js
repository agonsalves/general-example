import {globals} from "../../variables/styles";
import {block, center, flex, none} from "../../utils/themer";
import {associatedPracticeNameStyle} from "../AssociatedPracticesWidget/styles";
import {associatedPracticeItemStyle} from "../AssociatedPracticesWidget/styles";

export const associatedPeopleWidgetStyle = {
    borderLeft: globals.style.dividingBorder,
    borderWidth: '1px',
    paddingLeft: [40, .7, '0']
}
export const associatedPeopleWidgetTitleStyle = {
    marginBottom: [30, .7, 30]
}
export const associatedPersonStyle = {
    display: flex,
    alignItems: center,
    desktop: {
        flexWrap: 'wrap'
    },
    name: {
        weight: 600,
        color: globals.colors.textColor,
        size: [23, .7, 23],
        lineHeight: [30, .7, 30],
        width: [159, .3, 159],
        maxWidth: [159, .7, 159],
        minWidth: 95,
        hover: {
            color: globals.colors.blue
        }
    },
    noImageListItem: {
        ...associatedPracticeItemStyle
    },
    noImageName: {
        ...associatedPracticeNameStyle
    },
    border: {
        marginBottom: 29
    },
    contact: {
        phone: {
            child: {
                selector: 'a',
                color: globals.colors.textColor,
                display: block,
                weight: 300,
                size: [18, .7, 18],
                lineHeight: [30, .7, 30],
                letterSpacing: 0.5,
                marginTop: [8, .7, 8],
                hover: {
                    color: globals.colors.blue
                }
            }
        },
        title: {
            display: none
        }
    }
}