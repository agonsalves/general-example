import {TransitionAnimations} from 'Controllers/TransitionController'
import PropTypes              from 'prop-types'
import React, {useContext}    from 'react'
import {connect}              from 'react-redux'
import Div                    from 'Shared/Div'
import MotionDiv              from 'Shared/MotionDiv'
import Content                from 'Templates/Content'

const Main = ({post, fontSize, theme}) => {
    const {contentAnimation} = useContext(TransitionAnimations)

    return (
        <Div
            theme={{
                ...theme,
                fontSize: `${fontSize}px`,
                display: 'flex',
                alignItems: 'flex-start',
            }}
            className="main"
        >
            <MotionDiv animate={contentAnimation} theme={{width: '100%'}}>
                <Content post={post}/>
            </MotionDiv>
        </Div>
    )
}


Main.propTypes = {
    post: PropTypes.object.isRequired,
    fontSize: PropTypes.number.isRequired,
    theme: PropTypes.object
}

const mapStateToProps = ({site}) => ({
    fontSize: site.fontSize
})

export default connect(mapStateToProps)(Main)
