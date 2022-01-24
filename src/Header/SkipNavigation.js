import React  from 'react'
import styled from 'styled-components'
import {
    absolute,
    hidden,
    none,
    themer
}             from 'utils/themer'

const hideVisually = {
    border: none,
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    margin: -1,
    overflow: hidden,
    padding: 0,
    position: absolute,
    whiteSpace: 'no-wrap',
    width: 1,
}

const AnchorLink = styled.a`${themer(hideVisually)}`

const SkipNavigation = () => <AnchorLink href="#page-title" aria-label="Skip to Content">Skip Navigation</AnchorLink>

export default SkipNavigation