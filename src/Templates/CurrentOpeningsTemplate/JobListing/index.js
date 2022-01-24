import PropTypes            from 'prop-types'
import React                from 'react'
import BulletedList         from 'Shared/BulletedList'
import Div                  from 'Shared/Div'
import ExpandingDescription from 'Shared/ExpandingDescription'
import H3                   from 'Shared/H3'
import LinkSwitch           from 'Shared/LinkSwitch'
import RichText             from 'Shared/RichText'
import {intersperse}        from 'utils/helpers'
import {jobListingStyle}    from './styles'

const JobListing = ({title, category, locations, description, continued, applyUrl, contactEmail, theme}) =>
    <Div theme={{...jobListingStyle, ...theme}}>
        <H3 theme={{...jobListingStyle.title, ...theme.title}}>{title}</H3>
        {category && (
            <Div theme={{...jobListingStyle.category, ...theme.category}}>{category}</Div>
        )}
        {locations && (
            <Div theme={{...jobListingStyle.offices, ...theme.offices}}>
                {intersperse(locations.map(item =>
                    <React.Fragment key={item.slug}>
                        {item.post_title}
                    </React.Fragment>
                ), '; ')}
            </Div>
        )}
        <ExpandingDescription
            description={description}
            continued={
                <>
                    <RichText children={continued}/>
                    {(applyUrl || contactEmail) && (
                        <BulletedList theme={{...jobListingStyle.applyLinks}}>
                            {applyUrl && (
                                <li>
                                    <LinkSwitch
                                        theme={{...jobListingStyle.applyOnline, ...theme.applyOnline}}
                                        url={applyUrl}
                                        children={'Click here'}
                                    />
                                    <span> to apply</span>
                                </li>
                            )}
                            {contactEmail && (
                                <li>
                                    <span>For more information: Please email </span>
                                    <LinkSwitch
                                        theme={{...jobListingStyle.email, ...theme.email}}
                                        url={`mailto:${contactEmail}`}
                                        children={`${contactEmail}`}
                                    />
                                </li>
                            )}
                        </BulletedList>
                    )}
                </>
            }
        />
    </Div>

JobListing.propTypes = {
    title: PropTypes.string.isRequired,
    category: PropTypes.string,
    locations: PropTypes.array,
    description: PropTypes.string,
    continued: PropTypes.string,
    applyUrl: PropTypes.string,
    contactEmail: PropTypes.string,
    theme: PropTypes.object,
}

JobListing.defaultProps = {
    theme: {
        title: {},
        offices: {},
        description: {},
        expandButton: {},
        applyOnline: {},
        email: {}
    },
}

export default JobListing