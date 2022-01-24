import PropTypes           from 'prop-types'
import React               from 'react'
import ButtonIconText      from 'Shared/ButtonIconText'
import Img                 from 'Shared/Img'
import RichText            from 'Shared/RichText'
import {longArrowAltRight} from 'variables/iconLibrary'
import Widget              from '../Widget'
import WidgetTitle         from '../WidgetTitle'
import {
    callToActionWidgetStyle,
    featuredContentWidgetStyle
}                          from './styles'

const CallToActionWidget = ({title, text, url, buttonTitle, buttonLabel, image, theme}) =>
    <Widget theme={{...callToActionWidgetStyle, ...theme}}>
        {title && (
            <WidgetTitle theme={featuredContentWidgetStyle.heading}>{title}</WidgetTitle>
        )}
        {image && (
            <Img image={image} theme={callToActionWidgetStyle.image}/>
        )}
        {text && (
            <RichText children={text} theme={{...callToActionWidgetStyle.excerpt}}/>
        )}
        {url && (
            <ButtonIconText
                url={url}
                label={buttonLabel || 'Read More'}
                theme={{...callToActionWidgetStyle.button, ...theme.button}}
                title={buttonTitle}
                icon={longArrowAltRight}
            />
        )}
    </Widget>

CallToActionWidget.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    url: PropTypes.string,
    buttonTitle: PropTypes.string,
    buttonLabel: PropTypes.string,
    image: PropTypes.object,
    theme: PropTypes.object,
}

CallToActionWidget.defaultProps = {
    theme: {
        button: {}
    },
}

export default CallToActionWidget