import MenuListItem  from 'Shared/MenuListItem'
import PropTypes     from 'prop-types'
import React, {memo} from 'react'
import Ul            from 'Shared/Ul'

const MenuToUl = memo(({menu, post, theme}) =>
    <Ul theme={theme}>
        {menu.map(item =>
            <MenuListItem
                key={item.ID}
                item={item}
                theme={theme}
                className={item.classes}
                post={post}
            />
        )}
    </Ul>
)

MenuToUl.propTypes = {
    menu: PropTypes.array.isRequired,
    post: PropTypes.object.isRequired,
    theme: PropTypes.object,
}

MenuToUl.defaultProps = {
    theme: {
        listItem: {},
        link: {},
        nextLevel: {},
    },
}

export default MenuToUl