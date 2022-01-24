import {
    borderBox,
    relative
} from '../../../utils/themer'

export const micrositeSectionStyle = {
    position: relative,
    width: '100%',
    minHeight: 300,
    marginBottom: [115, .7, '0'],
    boxSizing: borderBox,
    mobile: {
        marginTop: 5
    },
    print: {
        pageBreakInside: 'avoid'
    }
}


