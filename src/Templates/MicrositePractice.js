import MicrositeSectionSwitch from 'Main/MicrositeSections'
import SectionWrapper         from 'Main/MicrositeSections/SectionWrapper'
import PostContent            from 'Main/PostContent'
import PropTypes              from 'prop-types'
import React, {
    useEffect,
    useState
}                             from 'react'
import {useSelector}          from 'react-redux'
import {mobileFlag}           from 'redux/selectors'
import MicrositeMenu          from 'Shared/MicrositeMenu'
import {hasMicrositeMenu}     from 'utils/flags'


const MicrositePractice = ({post}) => {
    const isMobile = useSelector(mobileFlag)
    const micrositeSections = [
        {
            ...post,
            page_template: 'overview'
        },
        ...post.microsite_pages || []
    ]
    const [isLoaded, setIsLoaded] = useState(false)
    const delayTime = 100

    useEffect(() => {
        setTimeout(() => setIsLoaded(true), delayTime)

        /* eslint-disable react-hooks/exhaustive-deps */
    }, [])

    return (
        <PostContent post={post}>
            {(hasMicrositeMenu(post) && !isMobile) && (
                <MicrositeMenu post={post.parentPost}/>
            )}
            <SectionWrapper post={post}>
                {micrositeSections.map(section => !section.slug.includes('/page/')
                    && (section.page_template === 'overview' || isLoaded)
                    && (
                        <MicrositeSectionSwitch
                            key={section.id}
                            section={section}
                            micrositeId={post.id}
                            micrositeType="practice-area"
                        />
                    ))}
            </SectionWrapper>
        </PostContent>
    )
}


MicrositePractice.propTypes = {
    post: PropTypes.object.isRequired,
}

export default MicrositePractice