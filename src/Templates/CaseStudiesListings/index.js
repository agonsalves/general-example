import PropTypes        from 'prop-types'
import React            from 'react'
import CaseStudyListing from 'Main/CaseStudyListing'
import Div              from 'Shared/Div'
import RichText         from 'Shared/RichText'
import PostContent      from 'Main/PostContent'
import {
    archiveListingCaseStudyListingsStyle,
    archiveListingCaseStudyListingStyle,
    caseStudyListingsHeadingStyle
}                       from './styles'

const CaseStudiesListings = ({post}) =>
    <PostContent post={post}>
        {post.full_content && (
            <RichText theme={caseStudyListingsHeadingStyle}>
                {post.full_content}
            </RichText>
        )}
        <Div theme={archiveListingCaseStudyListingsStyle}>
            {post.related_posts.map(experience =>
                experience.featured_case_study && (
                    <CaseStudyListing
                        key={experience.slug}
                        url={experience.slug}
                        title={experience.post_title}
                        image={experience.thumbnail_teaser}
                        theme={archiveListingCaseStudyListingStyle}
                    />
                )
            )}
        </Div>
    </PostContent>

CaseStudiesListings.propTypes = {
    post: PropTypes.object.isRequired
}

export default CaseStudiesListings