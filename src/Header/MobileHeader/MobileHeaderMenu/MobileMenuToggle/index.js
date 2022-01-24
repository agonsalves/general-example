import Div                    from 'Shared/Div'
import Icon                   from 'Shared/Icon'
import {TransitionAnimations} from 'Controllers/TransitionController'
import PropTypes              from 'prop-types'
import React, {
    useContext,
    useEffect,
    useState
}                             from 'react'
import {
    hamburgerThin,
    timesLight
}                             from 'variables/iconLibrary'
import {
    mobileMenuToggleIconStyle,
    mobileMenuToggleStyle
}                             from './styles'

const MobileHeaderMenuToggle = ({pathname, search}) => {
    const [isOpen, setIsOpen] = useState(false)
    const {mobileMenuAnimation} = useContext(TransitionAnimations)
    const toggleMenu = () => {
        if (isOpen) {
            setIsOpen(false)
            mobileMenuAnimation.start({
                height: 0,
                transition: {
                    duration: .5,
                    ease: 'easeOut'
                }
            })

        } else {
            setIsOpen(true)
            mobileMenuAnimation.start({
                height: '100vh',
                transition: {
                    duration: .5,
                    ease: 'easeOut'
                }
            })
        }
    }

    //reset menu to closed on path change
    useEffect(() => {
        setIsOpen(false)

    }, [pathname, search])

    return (
        <Div theme={mobileMenuToggleStyle} onClick={() => toggleMenu()}>
            <Icon theme={mobileMenuToggleIconStyle} icon={isOpen ? timesLight : hamburgerThin}/>
        </Div>
    )
}

MobileHeaderMenuToggle.propTypes = {
    pathname: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired
}

export default MobileHeaderMenuToggle