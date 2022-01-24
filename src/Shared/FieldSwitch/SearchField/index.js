import PropTypes  from 'prop-types'
import React, {
    memo,
    useEffect,
    useRef,
    useState
}                 from 'react'
import useMeasure from 'utils/useMeasure'
import {search}   from 'variables/iconLibrary'
import {globals}  from 'variables/styles'
import SmartInput from 'Shared/SmartInput'

const SearchField = memo(({name, placeholder, theme, value, handleChange, ...props}) => {
        const [label, setLabel] = useState('')
        const [isFocusedInputLabel, setIsFocusedInputLabel] = useState(false)
        const [legendWidth, setLegendWidth] = useState(0)
        const labelRef = useRef(null)
        const fieldRef = useRef(null)
        const inputLabelWidth = useMeasure(labelRef).width * globals.style.inputLabelShrinkRatio

        const handleFocus = () => {

        }

        const handleBlur = () => {
            if (!value) {
                setIsFocusedInputLabel(false)
                setLegendWidth(0)
            }
        }

        useEffect(() => {

            if (!!value) {
                setIsFocusedInputLabel(true)
                setLegendWidth(inputLabelWidth)
                setLabel(value || '')
                fieldRef.current.offsetParent && fieldRef.current.offsetParent.classList.add('focused')
            } else {
                setIsFocusedInputLabel(false)
                setLegendWidth(0)
                setLabel('')
                fieldRef.current.offsetParent && fieldRef.current.offsetParent.classList.remove('focused')
            }
        }, [value, inputLabelWidth, isFocusedInputLabel])

        return (
            <SmartInput
                name={name}
                placeholder={placeholder}
                theme={theme}
                label={label}
                handleChange={handleChange}
                handleFocus={() => handleFocus()}
                handleBlur={() => handleBlur}
                isFocusedInputLabel={isFocusedInputLabel}
                legendWidth={legendWidth}
                labelRef={labelRef}
                fieldRef={fieldRef}
                inputIcon={search}
                {...props}
            />
        )
    }
)

SearchField.displayName = 'SearchField'

SearchField.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    theme: PropTypes.object,
    value: PropTypes.string,
    handleChange: PropTypes.func.isRequired
}

SearchField.defaultProps = {
    placeholder: '',
    theme: {
        field: {},
        iconWrapper: {},
        clearSelection: {},
        icon: {}
    },
    value: ''
}

export default SearchField