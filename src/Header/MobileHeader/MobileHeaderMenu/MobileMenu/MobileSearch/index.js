import {Formik}      from 'formik'
import PropTypes     from 'prop-types'
import React, {memo} from 'react'
import {connect}     from 'react-redux'
import {history}     from 'redux/store'
import Div           from 'Shared/Div'
import FieldSwitch   from 'Shared/FieldSwitch'
import Form          from 'Shared/Form'
import Icon          from 'Shared/Icon'
import MotionDiv     from 'Shared/MotionDiv'
import {search}      from 'variables/iconLibrary'
import {
    mobileSearchButtonStyle,
    mobileSearchFieldStyle,
    mobileSearchInnerStyle
}                    from './styles'

const MobileSearch = memo(({query, isOpen}) => {
        return (
            <MotionDiv
                initial="closed"
                animate={isOpen ? 'open' : 'closed'}
                variants={{
                    open: {height: 'auto', overflow: 'visible'},
                    closed: {height: 0, overflow: 'hidden'}
                }}
                transition={{ease: 'easeOut'}}
            >
                <Formik
                    initialValues={{
                        s: query.split('?s=')[1] ? decodeURIComponent(query.split('?s=')[1]) : ''
                    }}
                    onSubmit={values => history.push(`/?s=${encodeURIComponent(values['s'])}`)}
                >
                    {(props) => (
                        <Form
                            theme={mobileSearchInnerStyle}
                            onSubmit={props.handleSubmit}
                        >
                            <FieldSwitch
                                id="mobile-search"
                                name="s"
                                placeholder="Type a name or keyword"
                                theme={mobileSearchFieldStyle}
                                isClearable={false}
                                {...props}
                            />
                            <Div
                                as="button"
                                type="submit"
                                theme={mobileSearchButtonStyle}
                            >
                                <Icon icon={search} theme={mobileSearchButtonStyle.icon}/>
                                <span>Search</span>
                            </Div>
                        </Form>
                    )}
                </Formik>
            </MotionDiv>
        )
    }
)

MobileSearch.propTypes = {
    theme: PropTypes.object,
    query: PropTypes.string.isRequired,
}

MobileSearch.defaultProps = {
    theme: {},
}

const mapStateToProps = ({router}) => ({
    query: router.location.search
})

export default connect(mapStateToProps)(MobileSearch)