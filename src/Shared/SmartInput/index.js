import PropTypes                    from 'prop-types'
import React, {useImperativeHandle} from 'react'
import InputLabel                   from 'Shared/InputLabel'
import Field                        from './Field'
import Fieldset                     from './Fieldset'
import InputIconToggle              from './InputIconToggle'
import Legend                       from './Legend'
import {focusedInputLabelStyle}     from './styles'

const SmartInput = React.forwardRef((props, ref) => {
    const {
        theme,
        handleChange,
        handleFocus,
        handleBlur,
        label,
        legendWidth,
        name,
        id = `input-${props.name}`,
        placeholder,
        labelRef,
        fieldRef,
        isFocusedInputLabel,
        isIconFade,
        isIconToggle,
        inputIcon,
        handleClear,
        value,
    } = props


    /// prevents Autosuggest from throwing error
    useImperativeHandle(ref, () => ({
        focus: () => {
            labelRef.current.focus()
        }
    }))


    return (
        <Fieldset theme={theme.fieldset}>
            <Field
                theme={theme}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                value={label}
                name={name}
                className="exempt"
                id={id}
                ref={fieldRef}
                {...props}
            />
            <InputLabel
                children={placeholder}
                theme={isFocusedInputLabel
                    ? {...focusedInputLabelStyle, ...theme.focusedInputLabelStyle}
                    : {...theme.inputLabel}}
                ref={labelRef}
                htmlFor={id}
            />
            <Legend theme={{
                width:
                    !isFocusedInputLabel
                        ? legendWidth + 'px'
                        : legendWidth + 10 + 'px',
                ...theme.legend
            }}/>
            <InputIconToggle
                isIconFade={isIconFade}
                isIconToggle={isIconToggle}
                isFocusedInputLabel={isFocusedInputLabel}
                inputIcon={inputIcon}
                value={value}
                handleClear={handleClear}
                theme={theme}
            />
        </Fieldset>
    )
})


SmartInput.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    theme: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleFocus: PropTypes.func.isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleClear: PropTypes.func,
    isFocusedInputLabel: PropTypes.bool.isRequired,
    legendWidth: PropTypes.number.isRequired,
    labelRef: PropTypes.object,
    inputIcon: PropTypes.object.isRequired,
    isOpen: PropTypes.bool,
    isIconFade: PropTypes.bool,
    isIconToggle: PropTypes.bool
}

SmartInput.defaultProps = {
    isOpen: false,
    isIconFade: false,
    isIconToggle: false,
    handleClear: null
}

export default SmartInput