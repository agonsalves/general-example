import {useFormik}              from 'formik'
import PropTypes                from 'prop-types'
import React, {
    memo,
    useEffect,
    useRef
}                               from 'react'
import {connect}                from 'react-redux'
import MotionDiv                from 'Shared/MotionDiv'
import LinkSwitch               from 'Shared/LinkSwitch'
import {history}                from 'redux/store'
import Form                     from 'Shared/Form'
import PredictiveField          from 'Shared/PredictiveField'
import {globalSearchFieldStyle} from './styles'

const globalSearchVariants = {
    initial: {
        overflow: 'hidden',
    },
    expanded: {
        overflow: 'visible',
        transition: {
            delay: 1
        }
    }
}

const globalSearchButtonVariants = {
    initial: {
        opacity: 0,
        height: 'auto',
        pointerEvents: 'none',
        transition: {
            delay: .5,
            duration: .5
        }
    },
    expanded: {
        opacity: 1,
        height: 'auto',
        pointerEvents: 'auto',
        transition: {
            delay: .5,
            duration: .25
        },
        transitionEnd: {
            pointerEvents: 'auto'
        }
    }
}

const GlobalSearchField = memo(({query, isOpen, values, post, ...props}) => {
    const formik = useFormik({
        initialValues: {
            s: post.search ? post.search.query.s : ''
        },
        onSubmit: values => history.push(`/?s=${encodeURIComponent(values['s'])}`),

    })

    const globalFieldRef = useRef(null)


    useEffect(() => {
        if (isOpen)
            globalFieldRef.current.focus()

        formik.setFieldValue('s', '')

        /* eslint-disable react-hooks/exhaustive-deps */
    }, [isOpen])


    return (
        <MotionDiv
            variants={globalSearchVariants}
            initial="initial"
            animate={isOpen ? 'expanded' : 'initial'}
        >
            <Form theme={globalSearchFieldStyle} onSubmit={formik.handleSubmit}>
                <PredictiveField
                    id="global-search"
                    name="s"
                    placeholder="Search Website"
                    predictive={['person', 'practice-area', 'industry']}
                    theme={globalSearchFieldStyle.field}
                    isOpen={isOpen}
                    value={formik.values['s']}
                    fieldRef={globalFieldRef}
                    {...formik}
                />
                <MotionDiv
                    variants={globalSearchButtonVariants}
                    initial="initial"
                    animate={isOpen ? 'expanded' : 'initial'}
                    theme={globalSearchFieldStyle.buttonWrapper}
                >
                    <LinkSwitch
                        as="button"
                        type="submit"
                        url=""
                        children="Search"
                        theme={globalSearchFieldStyle.button}
                    />
                </MotionDiv>
            </Form>
        </MotionDiv>
    )
})

GlobalSearchField.displayName = 'GlobalSearchField'

GlobalSearchField.propTypes = {
    isOpen: PropTypes.bool,
    query: PropTypes.string.isRequired,
    values: PropTypes.object
}

const mapStateToProps = ({router}) => ({
    query: router.location.search
})

export default connect(mapStateToProps)(GlobalSearchField)