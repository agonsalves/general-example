import React                              from 'react'
import Div                                from 'Shared/Div'
import {black}                            from 'utils/themer'
import {Decorator as WithCustomProviders} from '../../../.storybook/decorators/withCustomProviders'
import FeaturedItems                      from './FeaturedItems'
import {persistentHeaderFeaturedStyle}    from './styles'

const items =
    [
        {
            full_content: '<p>Crown Shy, the brainchild and first solo restaurant of former Eleven Madison Park and Nomad Chef James Kent and his partner, managing director of Del Posto, Jeffrey Katz, has opened in lower Manhattan. Located at 70 Pine Street between Pearl and William Streets, the restaurant is housed in the Cities Services Tower, a landmarked, Art Deco skyscraper that also houses residential apartment units.</p>\r\n\r\n<p><a class="rubycontent-page-link r...',
            post_name: 'crown-shy-debuts-at-rose-associates-70-pine-street',
            post_title: 'Crown Shy Debuts at Rose Associates’ 70 Pine Street',
            id: 1930,
            post_type: 'news-item',
            slug: '/michael-b-adelman/news/crown-shy-debuts-at-rose-associates-70-pine-street',
            thumbnail_teaser: {
                height: '342',
                url: 'https://mako2-gjtest.gjassets.com/content/uploads/2020/08/1-default-thumbnail-teaser-thumbnail-teaser-1930.jpg',
                width: '555'
            },
            visible: true
        },
        {
            full_content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit metus at dolor tempus, et dictum dui blandit. Ut vitae odio sed dolor vehicula consectetur. Donec bibendum magna nec purus semper, eu luctus massa aliquet. Fusce sed ullamcorper neque. Donec sodales sollicitudin quam sit amet dictum. Nulla facilisi. Mauris venenatis lorem nisl. Nullam a tellus a sem imperdiet suscipit sit amet sit amet elit. In sagittis convallis felis vitae suscipit. Curabitur porta odio nec nunc porta p...</p>',
            post_name: 'aliquam-dolores-turpis-net-tincidunt-eu-lectus-velouse-euismodes-scelerisque',
            post_title: 'Aliquam dolores turpis net, tincidunt eu lectus velouse, euismodes scelerisque',
            id: 4239,
            post_type: 'blog-post',
            slug: 'michael-b-adelman/biologics-blog/aliquam-dolores-turpis-net-tincidunt-eu-lectus-velouse-euismodes-scelerisque',
            visible: true
        }
    ]

export const featuredItemsStory = () => <FeaturedItems items={items} theme={persistentHeaderFeaturedStyle}/>

const TYPE = 'snapshot'
export default {
    title: `Microsites/FeaturedItems-${TYPE}`,
    component: FeaturedItems,
    decorators: [(story) => <WithCustomProviders><Div
        theme={{backgroundColor: black}}>{story()}</Div></WithCustomProviders>]

}