import PropTypes           from 'prop-types'
import React, {
    memo,
    useEffect,
    useRef,
    useState
}                          from 'react'
import Autosuggest         from 'react-autosuggest'
import Div                 from 'Shared/Div'
import {datalistItemStyle} from 'Shared/FieldSwitch/DatalistField/styles'
import SmartInput          from 'Shared/SmartInput'
import useMeasure          from 'utils/useMeasure'
import {angleDown}         from 'variables/iconLibrary'
import {globals}           from 'variables/styles'
import {filterFieldStyle}  from './styles'

const FilterField = memo(({items, name, value: initialValue, onSelect, placeholder}) => {
    const [value, setValue] = useState(initialValue)
    const [isFocusedInputLabel, setIsFocusedInputLabel] = useState(false)
    const [legendWidth, setLegendWidth] = useState(0)
    const labelRef = useRef(null)
    const inputLabelWidth = useMeasure(labelRef).width * globals.style.inputLabelShrinkRatio

    useEffect(() => {
        if (!!value) {
            setIsFocusedInputLabel(true)
            setLegendWidth(inputLabelWidth)
        }
    }, [value, inputLabelWidth])

    const onSuggestionSelected = (e, {suggestion}) => {
        setValue(suggestion.title)
        onSelect(suggestion.title, suggestion)
    }

    const handleFocus = () => {
        setIsFocusedInputLabel(true)
        setLegendWidth(inputLabelWidth)
    }

    const handleBlur = () => {
        if (!value) {
            setIsFocusedInputLabel(false)
            setLegendWidth(0)
        }
    }

    return (
        <Div theme={filterFieldStyle.wrapper}>
            <Autosuggest
                id={name}
                getSuggestionValue={item => item.title}
                inputProps={{
                    value,
                    placeholder,
                    name,
                    onChange: onSelect,
                    onFocus: handleFocus,
                    onBlur: handleBlur,
                }}
                suggestions={items}
                onSuggestionsFetchRequested={() => null}
                onSuggestionsClearRequested={() => null}
                onSuggestionSelected={onSuggestionSelected}
                shouldRenderSuggestions={() => true}
                focusInputOnSuggestionClick={false}
                renderInputComponent={props =>
                    <SmartInput
                        name={name}
                        placeholder={placeholder}
                        theme={filterFieldStyle}
                        label={value}
                        handleChange={onSelect}
                        handleFocus={() => handleFocus()}
                        handleBlur={() => handleBlur()}
                        isFocusedInputLabel={isFocusedInputLabel}
                        legendWidth={legendWidth}
                        labelRef={labelRef}
                        inputIcon={angleDown}
                        {...props}
                    />
                }
                renderSuggestion={(item, {isHighlighted}) =>
                    <Div
                        theme={datalistItemStyle}
                        className={isHighlighted ? 'active' : ''}
                        children={item.title}
                    />
                }
            />
        </Div>
    )
})

FilterField.displayName = 'FilterField'

FilterField.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    onSelect: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    items: PropTypes.array.isRequired
}

export default FilterField