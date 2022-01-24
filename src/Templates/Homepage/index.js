import {
    useAnimation,
    useTransform,
    useViewportScroll
}                           from 'framer-motion'
import PropTypes            from 'prop-types'
import React, {
    useEffect,
    useMemo,
    useState
}                           from 'react'
import Div                  from 'Shared/Div'
import MotionDiv            from 'Shared/MotionDiv'
import {isInternetExplorer} from 'utils/flags'
import {sv}                 from 'utils/themer'
import useWindowDimensions  from 'utils/useWindowDimensions'
import ClientStoryListing   from './ClientStoryListing'
import {
    clientStoriesListingStyleWrapper,
    homepageStyle
}                           from './styles'

const Homepage = ({post}) => {
    const containerAnimation = useAnimation()
    const col2Animation = useAnimation()
    const {scrollY} = useViewportScroll()
    const y = useTransform(scrollY, v => Math.round(v * -.17) + 120)
    const {windowWidth} = useWindowDimensions()
    const [ieOff, setIeOff] = useState(windowWidth * -.13)

    useEffect(() => {
        setIeOff(windowWidth * -.13)
        const updateOffSet = async () => {
            return containerAnimation.start({
                y: isInternetExplorer() ? ieOff : sv(-250, .5),
                transition: {
                    duration: .7,
                    ease: 'easeOut',
                    delay: .5
                }
            })
        }

        updateOffSet()

        // eslint-disable-next-line
    }, [windowWidth, ieOff])

    const pageLoad = useMemo(() => async () => {
        await col2Animation.set({y: 100})
        containerAnimation.start({
            y: isInternetExplorer() ? ieOff : sv(-250, .5),
            transition: {
                duration: .7,
                ease: 'easeOut',
                delay: .5
            }
        })
        return col2Animation.start({
            y: 0,
            transition: {
                duration: .7,
                ease: 'easeOut', delay: .7
            }
        })

        // eslint-disable-next-line
    }, [containerAnimation, col2Animation, ieOff])

    const pageUnload = useMemo(() => async () => {
        containerAnimation.start({
            y: 0,
            transition: {
                duration: .4, ease: 'easeOut'
            }
        })
        return await col2Animation.start({
            y: 0,
            transition: {
                duration: .4,
                ease: 'easeOut', delay: .2
            }
        })
    }, [containerAnimation, col2Animation])

    useEffect(() => {
        pageLoad()

        return () => pageUnload()
    }, [pageLoad, pageUnload])

    return (
        <>
            <MotionDiv
                className="stage"
                theme={homepageStyle.stage}
                animate={containerAnimation}
            >
                <Div theme={homepageStyle.stageInner}>
                    {[1, 2, 3, 4].map((fact, i) =>
                        <MotionDiv
                            key={i}
                            style={i % 2 ? {} : {y}}
                            initial={i % 2 ? {} : {y: 100}}
                            animate={i % 2 ? {} : col2Animation}
                            theme={clientStoriesListingStyleWrapper}
                        >
                            <ClientStoryListing
                                url={post[`home_firm_fact_${fact}_link_url`]}
                                image={post[`home_firm_fact_${fact}_image`]}
                                title={post[`home_firm_fact_${fact}_headline`]}
                                description={post[`home_firm_fact_${fact}_description`]}
                                linkText={post[`home_firm_fact_${fact}_link_text`]}
                            />
                        </MotionDiv>
                    )}
                </Div>
            </MotionDiv>
        </>
    )
}


Homepage.propTypes = {
    post: PropTypes.object.isRequired,
}

export default Homepage