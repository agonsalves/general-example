import {AnimatePresence}      from 'framer-motion'
import PropTypes              from 'prop-types'
import React, {
    useEffect,
    useState
}                             from 'react'
import {connect}              from 'react-redux'
import {cookieNoticeVariants} from '../CookieNotice/animations'
import Div                    from '../../Shared/Div'
import Icon                   from '../../Shared/Icon'
import MotionDiv              from '../../Shared/MotionDiv'
import {IE11_NOTICE}          from '../../redux/reducers'
import {
    alert,
    timesLight
}                             from '../../variables/iconLibrary'
import ButtonLarge            from '../../Shared/ButtonLarge'
import LinkSwitch             from '../../Shared/LinkSwitch'
import {
    ie11AlertStyle,
    ie11ButtonStyle,
    ie11NoticeInnerStyle,
    ie11NoticeStyle,
    ie11NoticeWrapperStyle
}                             from './styles'

const IE11Notice = ({IE11Notice, dispatch}) => {
    const [visible, setVisible] = useState(!IE11Notice)

    const handleClick = () => {
        dispatch({
            type: IE11_NOTICE
        })
        setVisible(false)
    }

    useEffect(() => {
        if (IE11Notice)
            setVisible(false)
    }, [IE11Notice, setVisible])

    return (
        <AnimatePresence>
            {visible && (
                <MotionDiv
                    key="notice-block"
                    theme={ie11NoticeWrapperStyle}
                    variants={cookieNoticeVariants}
                    initial="initial"
                    animate="enter"
                    exit="initial"
                >
                    <Div theme={ie11NoticeStyle} role="alertdialog" aria-label="Cookie Policy Banner" data-nosnippet>
                        <Div theme={ie11NoticeInnerStyle}>
                            <Icon icon={alert} theme={ie11AlertStyle}/>
                            <Div theme={{flexGrow: 1}}>
                                You are using an outdated browser. Some features have been disabled to allow for
                                compatibility. Download a newer browser
                                <LinkSwitch url="https://www.google.com/chrome/">here</LinkSwitch>.
                            </Div>
                        </Div>

                        <ButtonLarge
                            theme={ie11ButtonStyle}
                            url={'#'}
                            onClick={() => handleClick()}
                            as="button"
                            icon={timesLight}
                        />
                    </Div>
                </MotionDiv>
            )}
        </AnimatePresence>
    )
}
IE11Notice.propTypes = {
    cookieConsent: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
}

const mapStateToProps = ({site}) => ({
    IE11Notice: site.IE11Notice
})

export default connect(mapStateToProps)(IE11Notice)