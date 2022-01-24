import Icon              from 'Shared/Icon'
import MotionDiv         from 'Shared/MotionDiv'
import PropTypes         from 'prop-types'
import React, {useState} from 'react'
import Div               from 'Shared/Div'
import {angleDown}       from 'variables/iconLibrary'
import MicrositeMenu     from 'Shared/MicrositeMenu'
import {
    mobileMicrositeMenuStyle,
    mobileMicrositeMenuWrapperStyle,
    mobileTopMenuStyle,
    mobileTopMenuToggleIconStyle,
    mobileTopMenuToggleStyle
}                        from 'Shared/MobileMicrositeMenu/styles'

const MobileMicrositeMenu = ({post, theme, persistentHeaderRef}) => {
    const [isOpen, setIsOpen] = useState(false)

    const mobileMenuVariants = {
        open: {
            height: 'auto',
            marginBottom: -300,
            top: persistentHeaderRef ? persistentHeaderRef?.current?.clientHeight : 'initial',
            transition: {}
        },
        closed: {
            height: 0,
            marginBottom: 0,
            top: persistentHeaderRef ? persistentHeaderRef?.current?.clientHeight : 'initial'
        }
    }

    const ToggleButton = () => (
        <Div
            theme={{...mobileTopMenuToggleStyle}}
            onClick={() => setIsOpen(flag => !flag)}
        >
            <Icon
                icon={angleDown}
                theme={{
                    ...mobileTopMenuToggleIconStyle,
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                }}
            />
        </Div>
    )

    return (
        <Div theme={{...mobileMicrositeMenuWrapperStyle, ...theme}}>
            <ToggleButton/>
            <MotionDiv
                initial="closed"
                animate={isOpen ? 'open' : 'closed'}
                variants={mobileMenuVariants}
                transition={{ease: 'easeOut'}}
                theme={{...mobileTopMenuStyle, ...theme.menuWrapper}}
            >
                <MicrositeMenu
                    post={post}
                    theme={{...mobileMicrositeMenuStyle, ...theme.menu}}
                    setIsOpen={setIsOpen}
                />
            </MotionDiv>
        </Div>
    )
}


MobileMicrositeMenu.displayName = 'MobileMicrositeMenu'

MobileMicrositeMenu.propTypes = {
    post: PropTypes.object.isRequired,
    theme: PropTypes.object,
}

MobileMicrositeMenu.defaultProps = {
    theme: {},
}

export default MobileMicrositeMenu