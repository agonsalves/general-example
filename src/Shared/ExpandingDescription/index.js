import PropTypes                   from 'prop-types'
import React, {useState}           from 'react'
import {
    longArrowAltDown,
    longArrowAltUp
}                                  from 'variables/iconLibrary'
import ButtonSmall                 from '../ButtonSmall'
import Div                         from '../Div'
import MotionDiv                   from '../MotionDiv'
import RichText                    from '../RichText'
import {expandingDescriptionStyle} from './styles'

const ExpandingDescription = ({description, continued}) => {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <Div>
            {description && (
                <RichText children={description}/>
            )}
            {continued && (
                <>
                    <MotionDiv
                        initial="closed"
                        animate={isExpanded ? 'open' : 'closed'}
                        variants={{
                            open: {height: 'auto', paddingBottom: 2},
                            closed: {height: 0}
                        }}
                        transition={{ease: 'easeOut'}}
                        theme={{overflow: 'hidden'}}
                    >
                        {continued}
                    </MotionDiv>
                    <ButtonSmall
                        icon={isExpanded ? longArrowAltUp : longArrowAltDown}
                        label={isExpanded ? 'Read Less' : 'Read More'}
                        onClick={() => setIsExpanded(!isExpanded)}
                        theme={isExpanded ? expandingDescriptionStyle.expandButton : expandingDescriptionStyle.collapseButton}
                        url=""
                    />
                </>
            )}
        </Div>
    )
}

ExpandingDescription.propTypes = {
    description: PropTypes.string,
    continued: PropTypes.string,
    theme: PropTypes.object
}

ExpandingDescription.defaultProps = {
    theme: {}
}

export default ExpandingDescription