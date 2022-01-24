export const searchPortalVariants = {
    open: {
        opacity: 1,
        height: 'auto',
        transition: {
            duration: .5
        },
        transitionEnd: {overflow: 'visible'}
    },
    closed: {
        opacity: 0,
        height: 0,
        overflow: 'hidden',
        transition: {duration: .5}
    }
}

export const searchPortalCloseVariants = {
    open: {
        opacity: 1,
        transition: {
            duration: .5,
            delay: .5,
        }
    },
    closed: {
        opacity: 0
    }
}