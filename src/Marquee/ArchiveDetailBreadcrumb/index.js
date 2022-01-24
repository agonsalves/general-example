import PropTypes                      from 'prop-types'
import React                          from 'react'
import Div                            from 'Shared/Div'
import Icon                           from 'Shared/Icon'
import LinkSwitch                     from 'Shared/LinkSwitch'
import Span                           from 'Shared/Span'
import {plural}                       from 'utils/helpers'
import {longArrowAltLeft}             from 'variables/iconLibrary'
import {archiveDetailBreadCrumbStyle} from './styles'

const ArchiveDetailBreadcrumb = ({post}) =>
    <Div theme={archiveDetailBreadCrumbStyle}>
        <LinkSwitch url={post.parentPost.slug} theme={archiveDetailBreadCrumbStyle.inner}>
            <Div theme={archiveDetailBreadCrumbStyle.iconWrapper}>
                <Icon
                    theme={archiveDetailBreadCrumbStyle.icon}
                    icon={longArrowAltLeft}
                />
            </Div>
            <Span>{`Back to ${plural(post.post_type)}`}</Span>
        </LinkSwitch>
    </Div>

ArchiveDetailBreadcrumb.propTypes = {
    post: PropTypes.object.isRequired
}

export default ArchiveDetailBreadcrumb