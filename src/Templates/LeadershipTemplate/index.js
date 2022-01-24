import PropTypes         from 'prop-types'
import React             from 'react'
import Div               from 'Shared/Div'
import Img               from 'Shared/Img'
import RichText          from 'Shared/RichText'
import LinkSwitch        from 'Shared/LinkSwitch'
import PostContent       from 'Main/PostContent'
import PageTitle         from 'Main/PageTitle'
import {leadershipStyle} from './styles'

const LeadershipTemplate = ({post}) =>
    <PostContent post={post}>
        <PageTitle>{post.post_title}</PageTitle>
        <RichText isFirstParagraphLarge>
            {post.full_content}
        </RichText>

        {post.leadership_entries && (
            <Div theme={leadershipStyle.executives}>
                {post.leadership_entries.map((executive, index) =>
                    <LinkSwitch
                        key={`executiveLink-${index}`}
                        url={executive.link_url}
                        theme={leadershipStyle.executives.item}
                    >
                        <Div key={`executive-${index}`}>
                            {executive.photo && (
                                <Img
                                    theme={leadershipStyle.executives.image}
                                    image={executive.photo}
                                />
                            )}
                            <Div theme={leadershipStyle.executives.name}>{executive.name}</Div>
                            <Div theme={leadershipStyle.executives.title}>{executive.title}</Div>
                        </Div>
                    </LinkSwitch>
                )}
            </Div>
        )}

    </PostContent>

LeadershipTemplate.propTypes = {
    post: PropTypes.object.isRequired,
}

export default LeadershipTemplate