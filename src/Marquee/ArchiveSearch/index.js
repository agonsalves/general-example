import {
    searchPortalCloseVariants,
    searchPortalVariants
}                           from 'animations/portal'
import {useFormik}          from 'formik'
import idx                  from 'idx'
import ArchiveSearchToggle  from 'Main/ArchiveSearchToggle'
import PropTypes            from 'prop-types'
import React, {
    memo,
    useEffect
}                           from 'react'
import {connect}            from 'react-redux'
import {getPostType}        from 'redux/selectors'
import {history}            from 'redux/store'
import ButtonLarge          from 'Shared/ButtonLarge'
import Div                  from 'Shared/Div'
import FieldSwitch          from 'Shared/FieldSwitch'
import Form                 from 'Shared/Form'
import H2                   from 'Shared/H2'
import Icon                 from 'Shared/Icon'
import MotionDiv            from 'Shared/MotionDiv'
import Overlay              from 'Shared/Overlay'
import Span                 from 'Shared/Span'
import {composeResetObject} from 'utils/composeFormikResetObject'
import {hasArchiveSearch}   from 'utils/flags'
import usePortal            from 'utils/usePortal'
import {searchForms}        from 'variables/fields'
import {
    search,
    timesLight
}                           from 'variables/iconLibrary'
import {archiveSearchStyle} from './styles'

const ArchiveSearch = memo(({pageType, theme, datalist, postTitle, query, ...props}) => {
    const postType = getPostType('page', pageType).name
    const {listingPage} = props

    const formik = useFormik({
        initialValues: (idx(query, _ => _.search.post_type) === postType && query.search) || {},
        onSubmit: values => {
            let query = ''
            for (let i in searchForms[postType].fields) {
                if (values.hasOwnProperty(searchForms[postType].fields[i].name) && values[searchForms[postType].fields[i].name])
                    query += `&search[${searchForms[postType].fields[i].name}]=${encodeURIComponent(values[searchForms[postType].fields[i].name])}`
            }

            history.push(`${listingPage}?search[post_type]=${postType}${query}`)
        }
    })
    const resetObject = composeResetObject(searchForms)

    const {Portal, closePortal, openPortal, isOpen} = usePortal({
        bindTo: document && document.getElementById('modal')
    })

    useEffect(() => {
        if(!!query?.search)
            if (Object.keys(query?.search).length < 2) {
                formik.resetForm({
                    values: {
                        ...resetObject
                    }
                })
            }

        closePortal()
    }, [query, closePortal])

    return (postType && (
        <>
            <ArchiveSearchToggle
                open={openPortal}
                isOpen={isOpen}
                postType={postType}
            />
            {isOpen && (
                <>
                    <Portal>
                        <MotionDiv
                            initial="closed"
                            animate={isOpen ? 'open' : 'closed'}
                            variants={searchPortalVariants}
                            transition={{ease: 'easeOut'}}
                            theme={archiveSearchStyle.panel}
                        >
                            <Div theme={archiveSearchStyle.panelInner}>
                                <MotionDiv
                                    animate={isOpen ? 'open' : 'closed'}
                                    variants={searchPortalCloseVariants}
                                    theme={{position: 'absolute', opacity: 0, right: 0}}
                                >
                                    <Span theme={archiveSearchStyle.panelClose} onClick={() => closePortal()}>
                                        <Icon icon={timesLight} theme={archiveSearchStyle.panelCloseIcon}/>
                                    </Span>
                                </MotionDiv>

                                <H2 theme={archiveSearchStyle.portalHeading}>Search {postTitle}</H2>
                                <Form
                                    onSubmit={formik.handleSubmit}
                                    theme={archiveSearchStyle.container}
                                >
                                    {idx(searchForms, _ => _[postType].fields.map(item =>
                                        <FieldSwitch
                                            key={item.name}
                                            theme={archiveSearchStyle.field}
                                            name={item.name}
                                            placeholder={item.placeholder}
                                            icon={item.icon}
                                            datalist={datalist && datalist[item.name]}
                                            {...formik}
                                        />
                                    ))}
                                    <Div theme={archiveSearchStyle.buttonWrapper}>
                                        <ButtonLarge
                                            as="button"
                                            type="submit"
                                            theme={archiveSearchStyle.button}
                                            url=""
                                            onClick={formik.handleSubmit}
                                            className="exempt"
                                            icon={search}
                                        >
                                            Search
                                        </ButtonLarge>
                                        {!Object.values(formik.values).every(v => !v) && (
                                            <ButtonLarge
                                                url=""
                                                as="button"
                                                type="reset"
                                                label="Reset Form"
                                                className="reset"
                                                onClick={() => formik.resetForm({
                                                    values: {
                                                        ...resetObject
                                                    }
                                                })}
                                                theme={archiveSearchStyle.reset}
                                                icon={null}
                                            />
                                        )}
                                    </Div>
                                </Form>
                            </Div>
                        </MotionDiv>
                    </Portal>
                    <Overlay
                        isOpen={isOpen}
                        closePortal={closePortal}
                        theme={{backgroundColor: 'rgba(0,0,0,.5)}}'}}
                    />
                </>
            )}
        </>
    )) || null
})

ArchiveSearch.displayName = 'ArchiveSearch'

ArchiveSearch.propTypes = {
    postType: PropTypes.string.isRequired,
    theme: PropTypes.object,
    listingPage: PropTypes.string.isRequired,
    isOpen: PropTypes.bool,
    post: PropTypes.object.isRequired,
    query: PropTypes.object
}

ArchiveSearch.defaultProps = {
    postType: '',
    theme: {
        toggle: {},
        panel: {},
        container: {},
        field: {},
        button: {}
    },
    listingPage: '',
    pageType: ''
}

const mapStateToProps = ({site}, {post}) => {
    const listingPage = hasArchiveSearch(post) && site.config.listingPages[getPostType('page', post.page_type).name]

    return {
        datalist: site.datalists[getPostType('page', post.page_type).name],
        listingPage: listingPage.slug,
        query: idx(post, _ => _.search.query),
        pageType: post.parentPost.page_type,
        postTitle: post.parentPost.post_title
    }
}

export default connect(mapStateToProps)(ArchiveSearch)