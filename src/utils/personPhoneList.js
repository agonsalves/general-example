let numbers = []
export const personPhoneList = (post) => {
    if (post.office_location)
        post.office_location.forEach(item => {
            if (numbers.length < 4) {
                numbers.push({
                    type: 'type-office',
                    url: item.slug,
                    label: item.post_title,
                    number: item.office_phone
                })
            }
        })

    if (post.alternate_phone_2 && post.is_mobile_public && numbers.length < 4)
        numbers.push({
            type: 'type-phone',
            label: 'Mobile',
            number: post.alternate_phone_2
        })

    if (post.has_alternate_phone && post.alternate_phone_1 && numbers.length < 4)
        numbers.push({
            type: 'type-phone',
            label: post.alternate_phone_1_label,
            number: post.alternate_phone_1
        })

    return numbers
}