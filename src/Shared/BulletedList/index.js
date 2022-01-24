import PropTypes           from 'prop-types'
import styled              from 'styled-components'
import {themer}            from 'utils/themer'
import {bulletedListStyle} from './styles'

const BulletedList = styled.ul`${props => themer({...bulletedListStyle, ...props.theme})}`

BulletedList.displayName = 'BulletedList'

BulletedList.propTypes = {
    theme: PropTypes.object,
}

export default BulletedList