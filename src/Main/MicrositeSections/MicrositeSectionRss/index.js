import PropTypes               from 'prop-types'
import React, {
    memo,
    useEffect,
    useState
}                              from 'react'
import {queryApi}              from 'redux/sagas'
import Parser                  from 'rss-parser'
import Div                     from 'Shared/Div'
import {decodeEntities}        from 'utils/helpers'
import ArchiveListingWrapper   from 'Main/ArchiveListingWrapper'
import {archiveListingStyle}   from 'Main/ArchiveListingWrapper/styles'
import MicrositeSection        from 'Main/MicrositeSections/MicrositeSectionContainer'
import MicrositeSectionHeading from '../MicrositeSectionHeading'
import {blogRssListingStyle}   from './styles'

const MicrositeSectionRss = memo(({section}) => {
    const [feed, setFeed] = useState(null)

    async function parseRss(url) {
        try {
            let xml = await queryApi('/?proxy=' + encodeURIComponent(url))

            if (xml.content && xml.content.length > 0) {
                const parser = new Parser()

                await parser.parseString(xml.content, (error, feed) => {
                    setFeed(feed)
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (section.feed_url)
            parseRss(section.feed_url)
    })

    return (
        <MicrositeSection url={section.slug}>
            <MicrositeSectionHeading>{section.post_title}</MicrositeSectionHeading>
            {(feed?.items?.slice(0, 3).map(item =>
                <ArchiveListingWrapper
                    theme={blogRssListingStyle}
                    url={item.link}
                    key={item.guid}
                >
                    <Div
                        theme={{
                            ...archiveListingStyle.title,
                            ...blogRssListingStyle.title
                        }}>
                        {item.title}
                    </Div>
                    <Div theme={{...archiveListingStyle.excerpt, ...blogRssListingStyle.excerpt}}>
                        {decodeEntities(item.contentSnippet)}
                    </Div>
                </ArchiveListingWrapper>
            )) || <Div>Loading</Div>
            }
        </MicrositeSection>
    )
})

MicrositeSectionRss.displayName = 'MicrositeSectionRss'

MicrositeSectionRss.propTypes = {
    section: PropTypes.object.isRequired
}

export default MicrositeSectionRss