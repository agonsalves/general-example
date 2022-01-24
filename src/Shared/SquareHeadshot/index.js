import PropTypes           from 'prop-types'
import React               from 'react'
import placeholderHeadshot from 'assets/square-headshot-placeholder.png'
import Img                 from 'Shared/Img'

const SquareHeadshot = ({name, size, ...props}) =>
    <Img
        alt={`Photo of ${name}.`}
        height={size}
        width={size}
        placeholder={placeholderHeadshot}
        {...props}
    />

SquareHeadshot.propTypes = {
    image: PropTypes.object,
    name: PropTypes.string.isRequired,
    theme: PropTypes.object,
    size: PropTypes.number
}

SquareHeadshot.defaultProps = {
    theme: {},
    size: 185
}

export default SquareHeadshot