import PropTypes     from 'prop-types'
import React, {memo} from 'react'
import Div           from 'Shared/Div'
import {
    datalistClearIconStyle,
    datalistFieldIconStyle,
    datalistIconWrapperStyle,
    datalistPersonFieldIconStyle
}                    from 'Shared/FieldSwitch/DatalistField/styles'
import Icon          from 'Shared/Icon'
import MotionDiv     from 'Shared/MotionDiv'

const InputIconToggle = memo(({isIconFade, isIconToggle, isFocusedInputLabel, inputIcon, value, handleClear, theme, ...props}) =>
    (!!isIconFade && (
        <MotionDiv
            initial="blur"
            animate={isFocusedInputLabel ? 'focus' : 'blur'}
            variants={{
                blur: {width: 'auto', opacity: 1},
                focus: {opacity: 0, width: 0}
            }}
            transition={{ease: 'easeOut', duration: .25}}
        >
            <Div theme={{...datalistIconWrapperStyle, ...theme.iconWrapperStyle}}>
                <Icon
                    icon={inputIcon}
                    theme={{...datalistFieldIconStyle, ...theme.icon}}
                />
            </Div>
        </MotionDiv>
    )) ||
    (!!isIconToggle && (
        (value.length > 0 && (
            <Div theme={{...datalistIconWrapperStyle, ...theme.iconWrapperStyle}}>
                <Icon
                    icon={inputIcon}
                    onClick={handleClear}
                    theme={{...datalistClearIconStyle, ...theme.clearIcon}}
                />
            </Div>
        )) || (
            <Div theme={{...datalistIconWrapperStyle, ...theme.iconWrapperStyle}}>
                <Icon
                    icon={inputIcon}
                    theme={{...datalistPersonFieldIconStyle, ...theme.icon}}
                    style={{transform: props['aria-expanded'] ? 'rotate(180deg)' : null}}
                />
            </Div>
        )
    )) || (
        <Div theme={{...datalistIconWrapperStyle, ...theme.iconWrapperStyle}}>
            <Icon icon={inputIcon} theme={theme.icon}/>
        </Div>
    )
)

InputIconToggle.displayName = 'InputIconToggle'

InputIconToggle.propTypes = {
    isIconFade: PropTypes.bool,
    isIconToggle: PropTypes.bool,
    isFocusedInputLabel: PropTypes.bool,
    inputIcon: PropTypes.object,
    value: PropTypes.string,
    handleClear: PropTypes.func,
    theme: PropTypes.object
}

export default InputIconToggle