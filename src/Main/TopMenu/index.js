import PropTypes      from 'prop-types'
import React, {memo}  from 'react'
import Div            from 'Shared/Div'
import MenuToUl       from 'Shared/MenuToUl'
import {topMenuStyle} from './styles'

const TopMenu = memo(({post, theme}) =>
    <Div as={'nav'} theme={{...topMenuStyle, ...theme}}>
        <MenuToUl
            post={post}
            menu={post.menu_above_content.items}
            theme={topMenuStyle.inner}
        />
    </Div>
)

TopMenu.displayName = 'TopMenu'

TopMenu.propTypes = {
    post: PropTypes.object.isRequired,
    theme: PropTypes.object,
}

TopMenu.defaultProps = {
    theme: {
        inner: {},
        listItem: {},
        link: {}
    },
}

export default TopMenu