import HeaderMenuPanelController from 'Controllers/HeaderMenuPanelController'
import LayoutSwitch              from 'Controllers/LayoutSwitch'
import MicrositeScrollController from 'Controllers/MicrositeScrollController'
import TransitionController      from 'Controllers/TransitionController'
import PropTypes                 from 'prop-types'
import React                     from 'react'
import {HelmetProvider}          from 'react-helmet-async'
import {connect}                 from 'react-redux'
import CookieNotice              from 'Root/CookieNotice'
import GoogleAnalytics           from 'Root/GoogleAnalytics'
import IE11Notice                from 'Root/IE11Notice'
import PageFrame                 from 'Root/PageFrame'
import {isInternetExplorer}      from 'utils/flags'
import AdminBar                  from './AdminBar'

const Root = ({isInitialized, adminUrl}) => isInitialized
    ? (
        <LayoutSwitch>
            <HeaderMenuPanelController>
                <MicrositeScrollController>
                    <TransitionController>

                        <HelmetProvider>
                            {(adminUrl && (
                                <AdminBar adminUrl={adminUrl}/>
                            )) || (
                                <GoogleAnalytics/>
                            )}
                            <PageFrame/>
                            <CookieNotice/>
                            {isInternetExplorer() && (
                                <IE11Notice/>
                            )}
                        </HelmetProvider>

                    </TransitionController>
                </MicrositeScrollController>
            </HeaderMenuPanelController>
        </LayoutSwitch>
    )
    : null

Root.propTypes = {
    isInitialized: PropTypes.bool.isRequired,
    adminUrl: PropTypes.string
}

const mapStateToProps = ({site}) => ({
    isInitialized: site.isInitialized,
    adminUrl: site.adminUrl
})

export default connect(mapStateToProps)(Root)