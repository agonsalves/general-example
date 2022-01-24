import {fixed} from 'utils/themer'

export const overlayStyle = {
    position: fixed,
    top: 0,
    left: 0,
    height: '100vh',
    width: '100vw',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 21,
    xLarge: {
        maxWidth: '1920px',
        left: '50%',
        marginLeft: '-960px'
    }
}