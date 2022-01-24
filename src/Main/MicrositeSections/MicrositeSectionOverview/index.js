import PropTypes from "prop-types";
import React, { memo } from "react";
import Div from "Shared/Div";
import RichText from "Shared/RichText";
import WidgetSwitch from "Sidebars/WidgetSwitch";
import MicrositeSection from "Main/MicrositeSections/MicrositeSectionContainer";
import MicrositeSectionInner from "../MicrositeSectionInner";
import MicrositeSectionSidebar from "../MicrositeSectionSidebar";
import {
  micrositeSectionOverviewDescriptionStyle,
  micrositeSectionOverviewInfoStyle,
  micrositeSectionOverviewStyle,
} from "./styles";

const MicrositeSectionOverview = memo(({ section }) => {
  return (
    <MicrositeSection url={section.slug} theme={micrositeSectionOverviewStyle}>
      <MicrositeSectionInner>
        <Div
          theme={micrositeSectionOverviewInfoStyle(
            section.microsite_pages,
            section.widgets
          )}
        >
          <RichText
            children={section.full_content}
            theme={micrositeSectionOverviewDescriptionStyle}
          />
        </Div>
        {section.widgets && (
          <MicrositeSectionSidebar>
            {section.widgets.map((widget, index) => (
              <WidgetSwitch key={index} widget={widget} />
            ))}
          </MicrositeSectionSidebar>
        )}
      </MicrositeSectionInner>
    </MicrositeSection>
  );
});

MicrositeSectionOverview.displayName = "MicrositeSectionOverview";

MicrositeSectionOverview.propTypes = {
  section: PropTypes.object.isRequired,
};

export default MicrositeSectionOverview;
