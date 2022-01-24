import idx                     from 'idx'
import {absoluteToRelativeUrl} from './url'

/**
 * This function contains the logic used to determine whether a nav/menu item should be marked as 'active' or not.
 *
 * @param {object} item
 * @param {object} post
 * @returns {boolean}
 */
export const isNavItemActive = (item, post) => {
    let cpt = idx(item, _ => _.customFields.current_if_post_type_matches) || ''
    let cid = idx(item, _ => _.customFields.current_if_page_id_matches) || ''

    cpt = cpt.split(',')
    cid = cid.split(',')

    let current = post.microsite && post.parentPost ? post.parentPost : post
    let currentId = current.id && current.id.toString()


    if (current.designate_as_industry === 'checked') {
        if (item.classes.includes('menu-panel-industries'))
            return true
        else if (item.classes.includes('menu-panel-services'))
            return false
    }

    return cpt.includes(current.post_type) || cid.includes(currentId) || post.slug === absoluteToRelativeUrl(item.url)
}