import PropTypes     from 'prop-types'
import React         from 'react'
import Div           from 'Shared/Div'
import LinkSwitch    from 'Shared/LinkSwitch'
import {intersperse} from 'utils/helpers'

const BlogPostByline = ({authors, guestAuthors, outsideAuthors, theme}) => {
    const allAuthors = [...authors, ...guestAuthors, ...outsideAuthors]

    return (
        <Div theme={theme}>
            {!!allAuthors.length && (
                <span>
                    {intersperse([...authors, ...guestAuthors, ...outsideAuthors].map(item =>
                        <LinkSwitch key={item.id} theme={theme.name}>
                            {item.post_title || item.outside_author_name}
                        </LinkSwitch>
                    ), ', ')}
                </span>
            )}
        </Div>
    )
}

BlogPostByline.propTypes = {
    authors: PropTypes.array,
    guestAuthors: PropTypes.array,
    outsideAuthors: PropTypes.array,
    date: PropTypes.string,
    theme: PropTypes.object
}

BlogPostByline.defaultProps = {
    theme: {},
    authors: [],
    guestAuthors: [],
    outsideAuthors: []
}

export default BlogPostByline