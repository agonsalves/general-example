import React                              from 'react'
import {
    bar_memberships_fieldset,
    education_fieldset,
    languages_fieldset
}                                         from '../../../.storybook/data/bioInfoSubheadsData'
import {Decorator as WithCustomProviders} from '../../../.storybook/decorators/withCustomProviders'
import MicrositeSectionBio          from './MicrositeSectionBio'
import MicrositeSectionBlog         from './MicrositeSectionBlog'
import MicrositeSectionCaseStudies  from './MicrositeSectionCaseStudies'
import MicrositeSectionCustom       from './MicrositeSectionCustom'
import MicrositeSectionEvents       from './MicrositeSectionEvents'
import MicrositeSectionGallery      from './MicrositeSectionGallery'
import MicrositeSectionNews         from './MicrositeSectionNews'
import MicrositeSectionOverview     from './MicrositeSectionOverview'
import MicrositeSectionPeople       from './MicrositeSectionPeople'
import MicrositeScrollController    from '../../Controllers/MicrositeScrollController'
import {
    event_related_Posts,
    news_related_Posts,
    publication_related_posts,
    related_people
}                                   from '../../../.storybook/data/archiveListingData'
import MicrositeSectionPublications from './MicrositeSectionPublications'
import MicrositeSectionRss          from './MicrositeSectionRss'
import MicrositeSectionSubscribe    from './MicrositeSectionSubscribe'

const micrositeSectionBioData = {
    micrositeId: '34',
    micrositeType: 'people',
    section:
        {
            full_content: '<p>Michael understands that a business&rsquo;s proprietary information and technology are the keys to establishing an edge in today&rsquo;s marketplace. With this reality squarely in mind, he strategically litigates a variety of intellectual property matters involving copyright, trademark, <a href="http://google.com">licensing disputes</a>, patent infringement, defamation and rights of publicity claims, among others.</p>\r\n\r\n<p class="Body">Equally committed to pro bono service, Michael has represented asylum seekers before the Immigration Court, and helped develop recommendations for Americans with Disabilities Act (ADA) compliance on behalf of the Digital Public Library of America. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
            id: '3777',
            microsite: '/michael-b-adelman',
            page_template: 'custom',
            post_name: 'michael-b-adelma',
            post_title: 'Michael B Adelman',
            post_type: 'person',
            slug: '/michael-b-adelman',
            info_arrangement: [
                'bar_memberships_fieldset',
                'education_fieldset',
                'custom_categories',
                'languages_fieldset'

            ],
            bar_memberships_fieldset,
            education_fieldset,
            languages_fieldset,
            widgets: [{
                post_title: 'pullquote #1',
                template: {
                    name: 'Pullquote',
                    type: 'pullquote',
                    class: '\\Pullquote',
                    id: 4
                },
                visible: true,
                widget_attribution: 'Johnny Baskin',
                widget_attribution_title: 'Lawyer',
                widget_quote: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip&nbsp;</p>'
            }]
        }

}

export const bioSection = () =>
    <MicrositeSectionBio {...micrositeSectionBioData} />

const micrositeSectionOverviewData = {
    micrositeId: '3933',
    micrositeType: 'practice-area',
    section:
        {
            full_content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p><p>\n' +
                'In recent years, Pryor Cashman has developed a cutting edge real estate litigation practice, representing clients ranging from commercial and residential owners and developers to hotel owners and operators to large corporations and tenants in all varieties of disputes. In particular, our real estate litigation group is nationally recognized for its representation of hotel owners in disputes with hotel management companies, securing in one case a judgment in excess of $50 million</p>',
            id: '4152',
            page_template: 'Overview',
            post_name: 'subscribe',
            post_title: 'Subscribe',
            post_type: 'microsite-page',
            slug: '/litigation',
        }
}

export const overviewSection = () =>
    <MicrositeSectionOverview {...micrositeSectionOverviewData} />

const micrsoiteSectionPeopleData = {
    micrositeId: "3393",
    micrositeType: "practice-area",
    section:
        {
            base_slug: "/michael-b-adelman/publications",
            child_type: "person",
            id: "3375",
            microsite: "/litigation",
            page_template: "people",
            post_name: "people",
            post_title: "People",
            post_type: "microsite-page",
            query_name: "practice_area_people",
            slug: "/litigation/people",
            total: 2,
            related_people: related_people
        }
}

export const peopleSection = () =>
    <MicrositeSectionPeople {...micrsoiteSectionPeopleData} />

const micrositeSectionPublicationsData = {
    micrositeId: "34",
    micrositeType: "people",
    section:
        {
            base_slug: "/michael-b-adelman/publications",
            child_type: "publication",
            id: "3375",
            microsite: "/michael-b-adelman",
            page_template: "publications",
            post_name: "publications",
            post_title: "Publications",
            post_type: "microsite-page",
            query_name: "person_publications",
            slug: "/michael-b-adelman/publications",
            total: 2,
            related_posts: publication_related_posts
        }
}

export const publicationsSection = () =>
    <MicrositeSectionPublications {...micrositeSectionPublicationsData} />

const micrositeSectionNewsData = {
    micrositeId: "34",
    micrositeType: "people",
    section:
        {
            base_slug: "/michael-b-adelman/publications",
            child_type: "news-item",
            id: "3378",
            microsite: "/michael-b-adelman",
            page_template: "news_items",
            post_name: "news",
            post_title: "News",
            post_type: "microsite-page",
            query_name: "person_news_items",
            slug: "/michael-b-adelman/news",
            total: 2,
            related_posts: news_related_Posts
        }
}

export const newsSection = () =>
    <MicrositeSectionNews {...micrositeSectionNewsData} />

const micrositeSectionEventsData = {
    micrositeId: "34",
    micrositeType: "people",
    section:
        {
            base_slug: "/michael-b-adelman/events",
            child_type: "event",
            id: "3377",
            microsite: "/michael-b-adelman",
            page_template: "events",
            post_name: "events",
            post_title: "Events",
            post_type: "microsite-page",
            query_name: "person_events",
            slug: "/michael-b-adelman/events",
            total: 3,
            visible: true,
            related_posts: event_related_Posts
        }
}

export const eventsSection = () =>
    <MicrositeSectionEvents
        {...micrositeSectionEventsData }/>

const micrositeSectionCaseStudiesData = {
    micrositeId: "34",
    micrositeType: "people",
    section:
        {
            base_slug: "/michael-b-adelman/experience",
            child_type: "case-study",
            id: "4153",
            microsite: "/michael-b-adelman",
            page_template: "case_studies",
            post_title: "Experience",
            post_type: "microsite-page",
            slug: "/michael-b-adelman/experience",
            related_posts: [{

                microsite: "/michael-b-adelman",
                id: 4191,
                orderby_date: "2020-06-03 00:00:00",
                full_content: "<p>Nisi quis eleifend quam adipiscing vitae proin sagittis. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Sagittis eu volutpat odio facilisis. Diam sit amet nisl suscipit adipiscing bibendum est ultricies integer.",
                post_name: "lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit-sed-do-eiusmod-tempor-incididunt-ut-labore-et-dolore-magna-aliqua-ut-enim-ad-minim-veniam-quis-nostrud-exercitation-ullamco-laboris-nisi-ut-a",
                post_title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
                post_type: "case-study",
                thumbnail_teaser: {
                    height: "342",
                    width: "555",
                    url: "http://mako2-gjtest.gjassets.com/content/uploads/2020/02/photo1-default-thumbnail-teaser-thumbnail-teaser-4223.jpg"
                }

            },
                {

                    microsite: "/michael-b-adelman",
                    id: 4209,
                    orderby_date: "2020-06-03 00:00:00",
                    full_content: "<p>Nisi quis eleifend quam adipiscing vitae proin sagittis. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Sagittis eu volutpat odio facilisis. Diam sit amet nisl suscipit adipiscing bibendum est ultricies integer. Ac placerat vestibulum lectus mauris. Sem et tortor consequat id porta nibh venenatis cras sed. Odio morbi quis commodo odio aenean sed adipiscing diam. Egestas sed sed risus pretium. At lectus urna duis convallis convallis tellus id interdum velit. Magna etiam...",
                    post_name: "lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit-sed-do-eiusmod-tempor-incididunt-ut-labore-et-dolore-magna-aliqua-ut-enim-ad-minim-veniam-quis-nostrud-exercitation-ullamco-laboris-nisi-ut-a",
                    post_title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
                    post_type: "case-study"

                }
            ]
        }
}

export const caseStudiesSection = () =>
    <MicrositeSectionCaseStudies {...micrositeSectionCaseStudiesData} />

const micrositeSectionBlogData = {
    micrositeId: '34',
    micrositeType: 'people',
    section:
        {
            base_slug: '/michael-b-adelman/biologics-blog',
            child_type: 'blog-post',
            id: '4234',
            microsite: '/michael-b-adelman',
            page_template: 'blog_posts',
            post_name: 'biologics-blog',
            post_title: 'Biologics Blog',
            post_type: 'microsite-page',
            query_name: 'person_blog_posts',
            slug: '/michael-b-adelman/biologics-blog',
            total: 2,
            related_posts: [{
                bp_authors: [{
                    alternate_title: 'Big Law Guy',
                    email: 'madelman@pryorcashman.com',
                    id: 34,
                    phone: '212.326.3251',
                    position: [{
                        id: 33,
                        term: 'Associate'
                    }],
                    post_name: 'michael-b-adelman',
                    post_title: 'Michael B Adelman',
                    post_type: 'person',
                    slug: '/michael-b-adelman'
                }],
                microsite: '/michael-b-adelman',
                date: '2020-06-03 00:00:00',
                full_content: '<p>In April 2018, the Securities and Exchange Commission (SEC)&nbsp;reached a $35 million settlement with Altaba, Inc. over charges that the company misled investors by failing to disclose a massive 2014 cyber breach.&nbsp;The settlement against Altaba, formerly known as Yahoo! Inc., came just a few months after the SEC published new guidance on cybersecurity disclosures.&nbsp;</p>\r\n\r\n<p>While this SEC enforcement action was the first of its kind, it, along with the release of the 2018 guidance ...',
                slug: '/michael-b-adelman/biologics-blog/aliquam-dolores-turpis-net-tincidunt-eu-lectus-velouse-euismodes-scelerisque',
                post_name: 'aliquam-dolores-turpis-net-tincidunt-eu-lectus-velouse-euismodes-scelerisque',
                post_title: 'Aliquam dolores turpis net, tincidunt eu lectus velouse, euismodes scelerisque.',
                post_type: 'blog-post',
                thumbnail_teaser: {
                    height: '342',
                    width: '555',
                    url: 'https://mako2-gjtest.gjassets.com/content/uploads/2020/05/photo1-default-thumbnail-teaser-thumbnail-teaser-4239.jpg'
                },
            },
                {
                    bp_authors: [{
                        alternate_title: 'Big Law Guy',
                        email: 'madelman@pryorcashman.com',
                        id: 34,
                        phone: '212.326.3251',
                        position: [{
                            id: 33,
                            term: 'Associate'
                        }],
                        post_name: 'michael-b-adelman',
                        post_title: 'Michael B Adelman',
                        post_type: 'person',
                        slug: '/michael-b-adelman'
                    }],
                    microsite: '/michael-b-adelman',
                    date: '2020-06-03 00:00:00',
                    full_content: '<p>In April 2018, the Securities and Exchange Commission (SEC)&nbsp;reached a $35 million settlement with Altaba, Inc. over charges that the company misled investors by failing to disclose a massive 2014 cyber breach.&nbsp;The settlement against Altaba, formerly known as Yahoo! Inc., came just a few months after the SEC published new guidance on cybersecurity disclosures.&nbsp;</p>\r\n\r\n<p>While this SEC enforcement action was the first of its kind, it, along with the release of the 2018 guidance ...',
                    slug: '/michael-b-adelman/biologics-blog/aliquam-dolores-turpis-net-tincidunt-eu-lectus-velouse-euismodes-scelerisque',
                    post_name: 'aliquam-dolores-turpis-net-tincidunt-eu-lectus-velouse-euismodes-scelerisque',
                    post_title: 'Aliquam dolores turpis net, tincidunt eu lectus velouse, euismodes scelerisque.',
                    post_type: 'blog-post',
                    thumbnail_teaser: {
                        height: '342',
                        width: '555',
                        url: 'http://mako2-gjtest.gjassets.com/content/uploads/2020/07/alVzhgl-default-thumbnail-teaser-thumbnail-teaser-4262.jpg'
                    },
                }
            ]
        }
}

export const blogSection = () =>
    <MicrositeSectionBlog {...micrositeSectionBlogData} />

const micrositeSectionCustomData = {
    micrositeId: '34',
    micrositeType: 'people',
    section:
        {
            full_content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            id: '3777',
            microsite: '/michael-b-adelman',
            page_template: 'custom',
            post_name: 'custom-Page',
            post_title: 'Custom Page',
            post_type: 'microsite-page',
            query_name: 'person_news_items',
            slug: '/michael-b-adelman/news',
            widgets: [{
                post_title: 'pullquote #1',
                template: {
                    name: 'Pullquote',
                    type: 'pullquote',
                    class: '\\Pullquote',
                    id: 4
                },
                visible: true,
                widget_attribution: 'Johnny Baskin',
                widget_attribution_title: 'Lawyer',
                widget_quote: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip&nbsp;</p>'
            }]
        }
}

export const customPageSection = () =>
    <MicrositeSectionCustom {...micrositeSectionCustomData} />


const imageGalleryImageLarge = {
    height: '1000',
    width: '1000'
}
const imageGalleryImageSmall = {
    height: '400',
    width: '440'
}
const micrositeSectionGalleryData = {
    micrositeId: '34',
    micrositeType: 'people',
    section:
        {
            full_content: '<p>Community Snapshots</p>',
            child_type: 'gallery',
            id: '4162',
            microsite: '/michael-b-adelman',
            page_template: 'gallery',
            post_title: 'Gallery',
            post_type: 'microsite-page',
            slug: '/michael-b-adelman/gallery',
            gallery_images: [{
                image_large: {
                    imageGalleryImageLarge,
                    url: 'http://mako2-gjtest.gjassets.com/content/uploads/2020/07/58Kwblu-default-microsite-gallery-large-gallery-images-1-image-large-4162.jpg'
                },
                image_small: {
                    imageGalleryImageSmall,
                    url: 'http://mako2-gjtest.gjassets.com/content/uploads/2020/07/58Kwblu-default-microsite-gallery-small-gallery-images-1-image-small-4162.jpg'
                }
            },
                {
                    image_large: {
                        imageGalleryImageLarge,
                        url: 'http://mako2-gjtest.gjassets.com/content/uploads/2020/07/alVzhgl-default-microsite-gallery-large-gallery-images-2-image-large-4162.jpg'
                    },
                    image_small: {
                        imageGalleryImageSmall,
                        url: 'http://mako2-gjtest.gjassets.com/content/uploads/2020/07/alVzhgl-default-microsite-gallery-large-gallery-images-2-image-large-4162.jpg'
                    }
                },
                {
                    image_large: {
                        imageGalleryImageLarge,
                        url: 'http://mako2-gjtest.gjassets.com/content/uploads/2020/07/Best-Architecture-HD-Wallpapers-default-microsite-gallery-large-gallery-images-3-image-large-4162.jpg'
                    },
                    image_small: {
                        imageGalleryImageSmall,
                        url: 'http://mako2-gjtest.gjassets.com/content/uploads/2020/07/Best-Architecture-HD-Wallpapers-default-microsite-gallery-large-gallery-images-3-image-large-4162.jpg'
                    }
                },
                {
                    image_large: {
                        imageGalleryImageLarge,
                        url: 'http://mako2-gjtest.gjassets.com/content/uploads/2020/07/6VXkrU0-default-microsite-gallery-large-gallery-images-4-image-large-4162.jpg'
                    },
                    image_small: {
                        imageGalleryImageSmall,
                        url: 'http://mako2-gjtest.gjassets.com/content/uploads/2020/07/6VXkrU0-default-microsite-gallery-large-gallery-images-4-image-large-4162.jpg'
                    }
                },
                {
                    image_large: {
                        imageGalleryImageLarge,
                        url: 'http://mako2-gjtest.gjassets.com/content/uploads/2020/07/6e7lu7Q-default-microsite-gallery-large-gallery-images-5-image-large-4162.jpg'
                    },
                    image_small: {
                        imageGalleryImageSmall,
                        url: 'http://mako2-gjtest.gjassets.com/content/uploads/2020/07/6e7lu7Q-default-microsite-gallery-large-gallery-images-5-image-large-4162.jpg'
                    }
                }

            ]
        }
}

export const gallerySection = () =>
    <MicrositeSectionGallery {...micrositeSectionGalleryData} />

const micrositeSectionRssData = {
    micrositeId: '34',
    micrositeType: 'people',
    section:
        {
            feed_url: 'https://www.greatjakes.com/feed/?post_type=publication',
            id: '3639',
            microsite: '/michael-b-adelman',
            page_template: 'blog',
            post_name: 'blog',
            post_title: 'Blog',
            post_type: 'microsite-page',
            slug: '/michael-b-adelman/blog',
        }
}

export const RSSFeedSection = () =>
    <MicrositeSectionRss {...micrositeSectionRssData} />


const micrositeSectionSubscribeData = {
    micrositeId: '34',
    micrositeType: 'people',
    section:
        {
            full_content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>\r\n',
            id: '4152',
            microsite: '/michael-b-adelman',
            page_template: 'subscribe',
            post_name: 'subscribe',
            post_title: 'Subscribe',
            post_type: 'microsite-page',
            slug: '/michael-b-adelman/news',
            subscribe_button_label: 'Subscribe',
            subscribe_button_url: 'http://google.com'
        }
}

export const subscribeSection = () =>
    <MicrositeSectionSubscribe {...micrositeSectionSubscribeData} />


export default {
    title: `Main/Microsite Sections`,
    decorators: [(story) =>
        <WithCustomProviders><MicrositeScrollController>{story()}</MicrositeScrollController></WithCustomProviders>
    ]
};