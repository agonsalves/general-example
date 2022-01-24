import {peopleMenuPanelStyle} from '../../Header/HeaderMenuPanels/MenuPanelPeople/styles'
import {
    auto,
    none,
    transparent
}                             from '../../utils/themer'
import {globals}              from '../../variables/styles'

export const practiceSearchWidgetStyle = {
    borderTop: 0,
    paddingTop: 0,
    ...peopleMenuPanelStyle.searchForm,
    marginLeft: [-80, globals.style.layoutScalingValue, '0'],
    form: {
        ...peopleMenuPanelStyle.searchForm.form,
        width: [370, globals.style.layoutScalingValue, '100%'],
        minWidth: [370, globals.style.layoutScalingValue, '100%'],
        child: [
            {
                selector: '.react-autosuggest__suggestions-container',
                marginTop: [10, .7, 10]
            }
        ]
    },
    field: {
        ...peopleMenuPanelStyle.searchForm.field,
        width: '100%',
        minWidth: '100%',
        size: [18, .7, 18],
        paddingLeft: 25,
        iconWrapperStyle: {
            background: transparent
        },
        icon: {
            display: none
        }
    },
    firstField: {
        ...peopleMenuPanelStyle.searchForm.firstField,
        width: '100%',
        minWidth: '100%',
        marginBottom: 15
    },
    print: {
        display: none
    },

    button: {
        paddingTop: 0,
        paddingBottom: 0,
        marginRight: auto,
        marginLeft: 0,
        marginTop: 15,
        width: [167, .7, 167],
        child: {
            selector: '> svg',
            size: [21, globals.style.layoutScalingValue, 21]
        }
    }
}