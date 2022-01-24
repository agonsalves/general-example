import React, {memo}                from 'react'
import MicrositeSectionBio          from './MicrositeSectionBio'
import MicrositeSectionBlog         from './MicrositeSectionBlog'
import MicrositeSectionCaseStudies  from './MicrositeSectionCaseStudies'
import MicrositeSectionCustom       from './MicrositeSectionCustom'
import MicrositeSectionEvents       from './MicrositeSectionEvents'
import MicrositeSectionGallery      from './MicrositeSectionGallery'
import MicrositeSectionNews         from './MicrositeSectionNews'
import MicrositeSectionOverview     from './MicrositeSectionOverview'
import MicrositeSectionPeople       from './MicrositeSectionPeople'
import MicrositeSectionPublications from './MicrositeSectionPublications'
import MicrositeSectionRss          from './MicrositeSectionRss'
import MicrositeSectionSubscribe    from './MicrositeSectionSubscribe'

const MicrositeSectionSwitch = memo(({section, micrositeId, micrositeType}) => {
    switch (section.page_template) {
        case 'bio':
            return <MicrositeSectionBio section={section}/>
        case 'overview':
            return <MicrositeSectionOverview section={section}/>
        case 'people':
            return (
                <MicrositeSectionPeople
                    section={section}
                    micrositeId={micrositeId}
                    micrositeType={micrositeType}
                />
            )
        case 'publications':
            return (
                <MicrositeSectionPublications
                    section={section}
                    micrositeId={micrositeId}
                    micrositeType={micrositeType}
                />
            )
        case 'news_items':
            return (
                <MicrositeSectionNews
                    section={section}
                    micrositeId={micrositeId}
                    micrositeType={micrositeType}
                />
            )
        case 'events':
            return (
                <MicrositeSectionEvents
                    section={section}
                    micrositeId={micrositeId}
                    micrositeType={micrositeType}
                />
            )
        case 'case_studies':
            return (
                <MicrositeSectionCaseStudies
                    section={section}
                    micrositeId={micrositeId}
                    micrositeType={micrositeType}
                />
            )
        case 'custom':
            return (
                <MicrositeSectionCustom
                    section={section}
                    micrositeId={micrositeId}
                    micrositeType={micrositeType}
                />
            )
        case 'blog_posts':
            return (
                <MicrositeSectionBlog
                    section={section}
                    micrositeId={micrositeId}
                    micrositeType={micrositeType}
                />
            )
        case 'subscribe':
            return <MicrositeSectionSubscribe section={section}/>
        case 'gallery':
            return <MicrositeSectionGallery section={section}/>
        case 'blog':
            return <MicrositeSectionRss section={section} micrositeId={micrositeId} micrositeType={micrositeType}/>
        default:
            return null
    }
})

MicrositeSectionSwitch.displayName = 'MicrositeSectionSwitch'

export default MicrositeSectionSwitch