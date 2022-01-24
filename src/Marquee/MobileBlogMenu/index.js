import PropTypes                            from 'prop-types'
import React, {
    memo,
    useEffect,
    useState
}                                           from 'react'
import Div                                  from 'Shared/Div'
import Icon                                 from 'Shared/Icon'
import LinkSwitch                           from 'Shared/LinkSwitch'
import {
    mobileMicrositeMenuStyle,
    mobileTopMenuStyle
}                                           from 'Shared/MobileMicrositeMenu/styles'
import MotionDiv                            from 'Shared/MotionDiv'
import {angleDown}                          from 'variables/iconLibrary'
import {aboutMicrositeMenuItemStyle}        from '../MobileAboutMenu/styles'
import {blogMicrositeMenuInnerWrapperStyle} from './styles'

const MobileBlogMenu = memo(({pages, blogSlug, postSlug}) => {
        const [isOpen, setIsOpen] = useState(false)

        const ToggleButton = () => (
            <Div
                theme={mobileTopMenuStyle.toggle}
                onClick={() => setIsOpen(flag => !flag)}
            >
                <Icon
                    icon={angleDown}
                    theme={{
                        ...mobileTopMenuStyle.toggleIcon,
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}
                />
            </Div>
        )

        useEffect(() => {
            setIsOpen(false)

        }, [postSlug])


        return (
            <Div theme={{...mobileMicrositeMenuStyle}}>
                <ToggleButton/>
                <MotionDiv
                    initial="closed"
                    animate={isOpen ? 'open' : 'closed'}
                    variants={{
                        open: {height: 'auto'},
                        closed: {height: 0}
                    }}
                    transition={{ease: 'easeOut'}}
                    theme={{...mobileTopMenuStyle, ...blogMicrositeMenuInnerWrapperStyle}}
                >
                    <LinkSwitch
                        url={blogSlug}
                        children={'Blog Posts'}
                        theme={aboutMicrositeMenuItemStyle}
                        className={blogSlug === postSlug ? 'active' : ''}
                    />
                    {pages && pages.map((page) =>
                        <LinkSwitch
                            url={page.slug}
                            children={page.post_title}
                            key={page.slug}
                            theme={aboutMicrositeMenuItemStyle}
                            type="nav"
                            className={page.slug === postSlug ? 'active' : ''}
                        />
                    )}
                </MotionDiv>
            </Div>
        )
    }
)

MobileBlogMenu.displayName = 'MobileBlogMenu'

MobileBlogMenu.propTypes = {
    pages: PropTypes.array,
    blogSlug: PropTypes.string,
    postSlug: PropTypes.string,
}

export default MobileBlogMenu