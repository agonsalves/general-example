import PropTypes         from 'prop-types'
import React, {memo}     from 'react'
import Div               from 'Shared/Div'
import PredictiveField   from '../PredictiveField'
import DatalistField     from './DatalistField'
import SearchField       from './SearchField'
import {fieldOuterStyle} from './styles'

const FieldSwitch = memo(({datalist, name, predictive, placeholder, theme, values, ...props}) =>
    <Div theme={{...fieldOuterStyle, ...theme.fieldOuter}}>
        {datalist && (
            <DatalistField
                datalist={datalist}
                name={name}
                placeholder={placeholder}
                theme={theme}
                value={values[name]}
                {...props}
            />
        )}
        {predictive && (
            <PredictiveField
                predictive={predictive}
                name={name}
                placeholder={placeholder}
                theme={theme}
                value={values[name]}
                {...props}
            />
        )}
        {!datalist && !predictive && (
            <SearchField
                name={name}
                placeholder={placeholder}
                theme={theme}
                value={values[name]}
                {...props}
            />
        )}
    </Div>
)

FieldSwitch.displayName = 'FieldSwitch'

FieldSwitch.propTypes = {
    datalist: PropTypes.array,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    predictive: PropTypes.array,
    theme: PropTypes.object,
    values: PropTypes.object,
    personForm: PropTypes.bool,
}

FieldSwitch.defaultProps = {
    placeholder: '',
    predictive: null,
    theme: {},
}

export default FieldSwitch