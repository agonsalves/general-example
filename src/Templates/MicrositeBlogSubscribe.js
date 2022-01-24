import MicrositeSectionSwitch from 'Main/MicrositeSections'
import SectionWrapper         from 'Main/MicrositeSections/SectionWrapper'
import PostContent            from 'Main/PostContent'
import PropTypes              from 'prop-types'
import React, {
    useEffect,
    useState
}                             from 'react'

const MicrositeBlogsubscribe = ({post}) => {
    const micrositeSections = [
        {
            ...post,
            page_template: 'subscribe'
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
            <SectionWrapper post={post}>
                {micrositeSections.map(section => !section.slug.includes('/page/')
                    && (section.page_template === 'subscribe' || isLoaded)
                    && (
                        <MicrositeSectionSwitch
                            key={section.id}
                            section={section}
                            micrositeId={post.id}
                            micrositeType="subscribe"
                        />
                    ))}
            </SectionWrapper>
        </PostContent>
    )
}


MicrositeBlogsubscribe.propTypes = {
    post: PropTypes.object.isRequired,
}

export default MicrositeBlogsubscribe