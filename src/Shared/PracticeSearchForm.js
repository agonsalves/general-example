import {useFormik}      from 'formik'
import PropTypes        from 'prop-types'
import React, {memo}    from 'react'
import {connect}        from 'react-redux'
import Icon             from './Icon'
import ButtonLarge      from './ButtonLarge'
import {getCurrentPost} from '../redux/selectors'
import {history}        from '../redux/store'
import {singular}       from '../utils/helpers'
import {search}         from '../variables/iconLibrary'
import FieldSwitch      from './FieldSwitch'
import Form             from './Form'

const PracticeSearchForm = memo(({hasButton, theme, listingPage, query}) => {
    const formik = useFormik({
        initialValues: {keyword: query && query.search && query.search.post_type === 'practice-area' && query.search.keyword},
        onSubmit: values => {
            let query = values['keyword'] ? `&search[keyword]=${encodeURIComponent(values['keyword'])}` : ''
            history.push(`${listingPage}?search[post_type]=practice-area${query}`)
        }
    })

    return (
        <Form theme={theme.form} onSubmit={formik.handleSubmit}>
            <FieldSwitch
                name="keyword"
                placeholder={`${singular('practice-area')} or keyword`}
                predictive={['practice-area']}
                theme={theme.field}
                {...formik}
            />
            {hasButton && (
                <ButtonLarge
                    as="button"
                    theme={theme.button}
                    type="submit"
                    url=""
                    icon={null}
                >
                    <Icon icon={search} theme={theme.icon}/>
                    Search
                </ButtonLarge>
            )}
        </Form>
    )
})

PracticeSearchForm.displayName = 'PracticeSearchForm'

PracticeSearchForm.propTypes = {
    listingPage: PropTypes.string.isRequired,
    hasButton: PropTypes.bool,
    query: PropTypes.object,
    theme: PropTypes.object
}

PracticeSearchForm.defaultProps = {
    hasButton: false,
    theme: {}
}

const mapStateToProps = state => ({
    listingPage: state.site.config.listingPages['practice-area'].slug,
    query: getCurrentPost(state).search && getCurrentPost(state).search.query,
    post: getCurrentPost(state)
})

export default connect(mapStateToProps)(PracticeSearchForm)