import dayjs                  from 'dayjs'
import PropTypes              from 'prop-types'
import React                  from 'react'
import {connect}              from 'react-redux'
import Div                    from 'Shared/Div'
import {footerCopyrightStyle} from './styles'

const Copyright = ({firmName}) =>
    <Div theme={footerCopyrightStyle}>
        &copy; {`${dayjs().format('YYYY')} ${firmName}.`}
        <br/>
        All Rights Reserved.
    </Div>

Copyright.propTypes = {
    firmName: PropTypes.string.isRequired
}

const mapStatetoProps = ({site}) => ({
    firmName: site.config.firmName
})

export default connect(mapStatetoProps)(Copyright)