import {useFormik}           from 'formik'
import {archiveSearchStyle}  from 'Marquee/ArchiveSearch/styles'
import PropTypes             from 'prop-types'
import React                 from 'react'
import {
    configureStore,
    history
}                            from 'redux/store'
import ButtonLarge           from 'Shared/ButtonLarge'
import FieldSwitch           from 'Shared/FieldSwitch'
import Form                  from 'Shared/Form'
import {search}              from 'variables/iconLibrary'
import {blogSearchFormStyle} from './styles'

const BlogSearchForm = ({post}) => {
    const formik = useFormik({
        initialValues: post.search ? post.search.query.search : {},
        onSubmit: values => {
            const {parentPost} = post
            const {site} = configureStore.getState()

            let query = values['keyword'] ? `&search[keyword]=${encodeURIComponent(values['keyword'])}` : ''

            const targetSlug =
                site.config.blogs?.[window.location.hostname]
                && '/' + site.config.blogs[window.location.hostname].path === parentPost.slug
                    ? '/' : parentPost.slug

            history.push(`${targetSlug}?search[post_type]=blog-post${query}`)
        },
        enableReinitialize: true
    })

    return (
        <Form
            name="blog-search"
            onSubmit={formik.handleSubmit}
            theme={blogSearchFormStyle}
        >
            <FieldSwitch
                {...formik}
                name="keyword"
                placeholder="Keyword"
                theme={blogSearchFormStyle.field}
            />
            <ButtonLarge
                as="button"
                type="submit"
                theme={{...archiveSearchStyle.button, ...blogSearchFormStyle.button}}
                url=""
                icon={search}
            >
                Search
            </ButtonLarge>
        </Form>
    )
}


BlogSearchForm.propTypes = {
    post: PropTypes.object.isRequired
}

BlogSearchForm.defaultProps = {
    theme: {}
}

export default BlogSearchForm