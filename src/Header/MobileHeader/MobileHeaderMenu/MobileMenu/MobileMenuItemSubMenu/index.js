import Li                 from 'Shared/Li'
import MotionDiv          from 'Shared/MotionDiv'
import Ul                 from 'Shared/Ul'
import PropTypes          from 'prop-types'
import React, {useEffect} from 'react'
import MobileMenuLink     from '../MobileMenuLink'
import {
    mobileMenuSubMenuItemStyle,
    mobileMenuSubMenuLinkStyle,
    mobileMenuSubMenuStyle,
    mobileMenuSubMenuWrapperStyle
}                         from './styles'

const MobileMenuItemSubMenu = ({subMenuToggle, setSubMenuToggle, resetSubMenuToggle, post, item}) => {
    const isActive = item.children.map((item) => {
        return item.url
    }).includes('/' + (post.slug.split('/')[1] === 'experience' ? 'case-studies' : post.slug.split('/')[1]))

    const subMenuVariants = {
        open: {
            height: 'auto',
            marginTop: -13,
            marginBottom: 10,
            transition: {
                duration: .15
            }
        },
        closed: {
            height: 0,
            marginTop: 0,
            marginBottom: 0,
            transition: {
                duration: .15
            }
        }
    }

    useEffect(() => {
        if (isActive)
            setSubMenuToggle(resetSubMenuToggle)
        else
            setSubMenuToggle(!resetSubMenuToggle)

    }, [resetSubMenuToggle, setSubMenuToggle, post, isActive])


    return (
        <MotionDiv
            initial="closed"
            animate={subMenuToggle ? 'open' : 'closed'}
            variants={subMenuVariants}
            transition={{ease: 'easeOut'}}
            theme={mobileMenuSubMenuWrapperStyle}
        >
            <Ul theme={mobileMenuSubMenuStyle}>
                {item.children?.map((c, k) =>
                    <Li key={k} theme={mobileMenuSubMenuItemStyle}>
                        <MobileMenuLink
                            item={c}
                            post={post}
                            theme={mobileMenuSubMenuLinkStyle}/>
                    </Li>
                )}
            </Ul>
        </MotionDiv>
    )
}

MobileMenuItemSubMenu.propTypes = {
    item: PropTypes.object.isRequired,
    post: PropTypes.object.isRequired,
    resetSubMenuToggle: PropTypes.bool.isRequired,
    subMenuToggle: PropTypes.bool.isRequired,
    setSubMenuToggle: PropTypes.func.isRequired
}

export default MobileMenuItemSubMenu