import {useFormik}          from 'formik'
import {AnimatePresence}    from 'framer-motion'
import idx                  from 'idx'
import PropTypes            from 'prop-types'
import React                from 'react'
import {connect}            from 'react-redux'
import {history}            from 'redux/store'
import ButtonLarge          from 'Shared/ButtonLarge'
import Div                  from 'Shared/Div'
import FieldSwitch          from 'Shared/FieldSwitch'
import Form                 from 'Shared/Form'
import Icon                 from 'Shared/Icon'
import MotionDiv            from 'Shared/MotionDiv'
import {composeResetObject} from 'utils/composeFormikResetObject'
import {searchForms}        from 'variables/fields'
import {search}             from 'variables/iconLibrary'
import {globals}            from 'variables/styles'
import {peopleSearchForm}   from './styles'

const PeopleSearchForm = ({isAdvanced, theme, listingPage, query, datalist}) => {
    const formik = useFormik({
        initialValues: ((idx(query, _ => _.search.post_type) && query.search.post_type === 'person') && query.search) || {},
        onSubmit: values => {
            let query = ''
            for (let i in searchForms.person.fields) {
                if (values.hasOwnProperty(searchForms.person.fields[i].name) && values[searchForms.person.fields[i].name])
                    query += `&search[${searchForms.person.fields[i].name}]=${encodeURIComponent(values[searchForms.person.fields[i].name])}`
            }

            history.push(`${listingPage}?search[post_type]=person${query}`)
        }
    })
    const resetObject = composeResetObject(searchForms)

    return (
        <Form
            theme={{...peopleSearchForm.form, ...theme.form}}
            onSubmit={formik.handleSubmit}
        >
            <Div theme={{...peopleSearchForm.formInner, ...theme.formInner}}>
                <AnimatePresence>
                    {idx(searchForms, _ => _.person.fields.map(item => (item.name === 'keyword' || isAdvanced) &&
                        <MotionDiv
                            key={item.name}
                            initial={{
                                height: isAdvanced ? 0 : globals.style.inputHeight,
                                overflow: 'hidden',
                                marginBottom: 0
                            }}
                            animate={{
                                height: 'auto',
                                marginBottom: 0,
                                transition: {
                                    duration: .5,
                                    ease: 'easeOut'
                                },
                                transitionEnd: {
                                    overflow: 'visible'
                                }
                            }}
                            exit={{
                                height: 0,
                                marginBottom: 0,
                                overflow: 'hidden',
                                transition: {
                                    ease: 'easeOut'
                                }
                            }}
                            theme={{height: 'inherit'}}
                        >
                            <FieldSwitch
                                name={item.name}
                                placeholder={item.placeholder}
                                theme={item.name === 'keyword'
                                    ? {...peopleSearchForm.field, ...peopleSearchForm.firstField, ...theme.firstField}
                                    : {...peopleSearchForm.field, ...theme.field, ...theme.triangle}
                                }
                                datalist={datalist[item.name]}
                                predictive={item.predictive}
                                {...formik}
                            />
                        </MotionDiv>
                    ))}
                </AnimatePresence>
            </Div>
            <Div
                theme={{
                    ...peopleSearchForm.buttonWrapper,
                    ...theme.buttonWrapper
                }}
            >
                <ButtonLarge
                    as="button"
                    onClick={formik.handleSubmit}
                    theme={{...peopleSearchForm.button, ...theme.button}}
                    type="submit"
                    url=""
                    icon={null}
                >
                    <Icon icon={search} theme={{...peopleSearchForm.buttonIcon, ...theme.buttonIcon}}/>
                    Search
                </ButtonLarge>
                {Object.keys(formik.values).some(
                    v => ['letter', 'post_type'].includes(v) ? false : !!formik.values[v]
                ) && isAdvanced && (
                    <ButtonLarge
                        url=""
                        as="button"
                        type="reset"
                        label="Reset Form"
                        className="reset"
                        icon={null}
                        onClick={() => formik.resetForm({
                            values: {
                                ...resetObject
                            }
                        })}
                        theme={{
                            ...peopleSearchForm.reset,
                            ...theme.reset
                        }}
                    />
                )}
            </Div>
        </Form>
    )
}

PeopleSearchForm.propTypes = {
    handleSubmit: PropTypes.func,
    isAdvanced: PropTypes.bool,
    listingPage: PropTypes.string.isRequired,
    theme: PropTypes.object,
    query: PropTypes.object,
    datalist: PropTypes.object
}

PeopleSearchForm.defaultProps = {
    isAdvanced: false,
    theme: {
        toggle: {},
        field: {}
    },
    datalist: {}
}

const mapStateToProps = ({site}) => ({
    listingPage: site.config.listingPages.person.slug,
    datalist: site.datalists['person']
})

export default connect(mapStateToProps)(PeopleSearchForm)