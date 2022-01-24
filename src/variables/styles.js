import {getScrollbarWidth} from '../utils/getScrollBarWidth'

export const breakpointUpperLimit = {
    mobile: 768,
    tablet: 1024,
    desktop: 1280,
    small: 1680,
    large: 1920
}

export const colorPalette = {
    gray: '#F6F6F6',
    lightGray: '#E5E5E5',
    blue: '#013A51',
    lightBlue: '#4B7383',
    lightGrayBlue: '#CCE5EC',
    lightOffBlue: '#CCE5ED',
    offBlue: '#809CA8',
    yellow: '#F99C03',
    darkGray: '#999999',
    darkerGray: '#23282d'
}

export const globals = {
    colors: {
        adminBarColor: colorPalette.darkerGray,
        archiveDateAndTypeColor: colorPalette.offBlue,
        archiveDetailIconColor: colorPalette.blue,
        borderColor: colorPalette.lightGray,
        bulletColor: colorPalette.lightBlue,
        buttonColor: colorPalette.yellow,
        buttonHoverColor: colorPalette.lightBlue,
        cardBackgroundColor: colorPalette.gray,
        cardBackgroundHoverColor: colorPalette.yellow,
        cookieBackgroundColor: colorPalette.darkGray,
        datalistIconColor: colorPalette.blue,
        footerSocialColor: colorPalette.blue,
        firmHighlightsArrowColor: colorPalette.lightGrayBlue,
        hamburgerColor: colorPalette.blue,
        headingColor: colorPalette.blue,
        inputBackgroundColor: colorPalette.gray,
        iconWrapperColor: colorPalette.lightOffBlue,
        linkColor: colorPalette.lightBlue,
        linkHoverColor: colorPalette.yellow,
        linkActiveColor: colorPalette.yellow,
        mobileMicrositeToggleBackgroundColor: colorPalette.yellow,
        mobilePersistentHeaderBackgroundColor: colorPalette.lightGrayBlue,
        micrositeMenuItem: colorPalette.blue,
        paginationColor: colorPalette.blue,
        paginationAltColor: colorPalette.offBlue,
        personMarqueeBackgroundColor: colorPalette.lightGrayBlue,
        personIconBackgroundColor: colorPalette.lightGrayBlue,
        persistentHeaderBackgroundColor: colorPalette.blue,
        placeholderColor: colorPalette.lightBlue,
        resourceIconColor: colorPalette.lightBlue,
        sliderButtonBackgroundColor: colorPalette.gray,
        sliderButtonBackgroundHoverColor: colorPalette.blue,
        textButtonColor: colorPalette.blue,
        textColor: colorPalette.lightBlue,
        micrositeDetailTypeColor: colorPalette.offBlue,
        micrositeDetailCloseBackgroundColor: colorPalette.blue,
        micrositeDetailCloseBackgroundHoverColor: colorPalette.yellow,
        micrositeDetailHeaderColor: colorPalette.gray
    },
    fonts: {
        body: `acumin-pro, sans-serif`,
        heading: `"kepler-std", serif`
    },
    style: {
        buttonHeight: 64,
        dividingBorder: `2px solid ${colorPalette.lightGray}`,
        fieldSetHeight: 64 + 2,
        globalSearchClosedMarginLeft: 5,
        globalSearchIconWidth: 60,
        globalSearchIconHeight: 60,
        headerHeight: 155,
        headingLetterSpacing: '3px',
        headerZ: 20,
        homepageMarqueeHeight: 790,
        imageHoverOpacity: .7,
        inputBorderRadius: 60,
        inputBorderWidth: 2,
        inputHeight: 64,
        inputPaddingLeft: 28,
        inputLabelShrinkRatio: .7,
        layoutScalingValue: .45,
        mainTopGutter: 80,
        marqueeHeight: 510,
        micrositeMenuHeight: 99,
        mobileHeaderHeight: 58,
        mobileMicrositeHeaderHeight: 58,
        paddingLeft: 85,
        persistentHeaderHeight: 125,
        personMarqueeHeight: 510,
        personMarqueeMobileHeight: 320,
        personMarqueeMobileHeightNoImage: 160,
        peopleSearchMarqueeHeight: 430,
        globalSearchMarqueeHeight: 510,
        practiceMarqueePaddingBottom: 150,
        practiceMarqueePersistentOffset: 200,
        archiveListingPaddingBottom: 165
    },
    bodyFontSize: {
        mobile: 18,
        desktop: 15,
        small: 16,
        large: 18
    },
    headerHeight: {
        mobile: 60,
        desktop: 130
    },
    marqueeHeight: {
        person: 750,
        personSub: 580
    },
    zIndex: {
        overlay: 20
    },
    resetBody: () => {
        document.body.style.overflow = 'auto'
        document.body.style.overflowX = 'hidden'
        document.body.style.paddingRight = '0px'
    },
    hideBodyOverflow: () => {
        document.body.style.overflow = 'hidden'
        document.body.style.paddingRight = getScrollbarWidth() + 'px'
    }


}

// MIXINS

export const genericMobileContainerStyles = {
    mobile: {
        flexDirection: 'column',
        position: 'relative',
        minWidth: '100%',
        width: '100%',
        padding: '30px 25px 0 25px',
        boxSizing: 'border-box',
        minHeight: 400,
        zIndex: 0,
        borderRadius: 0
    }
}