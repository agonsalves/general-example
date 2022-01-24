import PropTypes         from 'prop-types'
import React             from 'react'
import Div               from 'Shared/Div'
import H3                from 'Shared/H3'
import Icon              from 'Shared/Icon'
import MotionDiv         from 'Shared/MotionDiv'
import {
    chevronDown,
    chevronUp
}                        from 'variables/iconLibrary'
import {bioInfoVariants} from './animations'
import {
    bioInfoHeaderStyle,
    bioInfoInnerStyle,
    bioInfoStyle,
    bioInfoSubheadIcon,
    bioInfoSubheadStyle
}                        from './styles'

const AccordionSubhead = ({item, isExpanded, toggleExpanded}) =>
    <Div theme={bioInfoStyle(isExpanded)}>
        <Div
            theme={bioInfoHeaderStyle(isExpanded)}
            onClick={() => toggleExpanded(!isExpanded ? item.key : null)}
        >
            <H3 theme={bioInfoSubheadStyle(isExpanded)}>{item.heading}</H3>
            <Icon theme={bioInfoSubheadIcon} icon={!isExpanded ? chevronDown : chevronUp}/>
        </Div>
        <MotionDiv
            initial="initial"
            animate={isExpanded ? 'expanded' : 'initial'}
            variants={bioInfoVariants}
            theme={bioInfoInnerStyle}
        >
            <item.Component>{item.content}</item.Component>
        </MotionDiv>
    </Div>

AccordionSubhead.propTypes = {
    item: PropTypes.object.isRequired,
    isExpanded: PropTypes.bool.isRequired,
    toggleExpanded: PropTypes.func.isRequired
}
export default AccordionSubhead