import Div from "Shared/Div";
import Li from "Shared/Li";
import MotionDiv from "Shared/MotionDiv";
import Ul from "Shared/Ul";
import { TransitionAnimations } from "Controllers/TransitionController";
import { AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import React, { useContext, useEffect, useState } from "react";
import { connect } from "react-redux";
import { getCurrentPost } from "redux/selectors";
import LinkSwitch from "Shared/LinkSwitch";
import MobileMenuItem from "./MobileMenuItem";
import { mobileMenuItemStyle } from "./MobileMenuItem/styles";
import MobileMenuSearchItem from "./MobileMenuSearchItem";
import {
  mobileMenuHeaderBackgroundStyle,
  mobileMenuLinkStyle,
  mobileMenuStyle,
  mobileMenuWrapperStyle,
} from "./styles";

const MobileMenu = ({ menu, post }) => {
  const { mobileMenuAnimation } = useContext(TransitionAnimations);
  const [searchToggle, setSearchToggle] = useState(false);
  const [resetSubMenuToggle, setResetSubMenuToggle] = useState(true);

  useEffect(() => {
    setSearchToggle(false);
    setResetSubMenuToggle(true);
  }, [post, setSearchToggle]);

  const mobileMenuVariants = {
    initial: {
      height: 0,
    },
    animate: {
      height: "100vh",
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <Div
      theme={mobileMenuWrapperStyle}
      as="nav"
      aria-label="Main Site Navigation"
    >
      <AnimatePresence>
        <MotionDiv
          initial="initial"
          animate={mobileMenuAnimation}
          variants={mobileMenuVariants}
          exit={{ height: "100vh" }}
          theme={{ overflow: "hidden" }}
        >
          <Div theme={mobileMenuHeaderBackgroundStyle} />
          <Ul theme={mobileMenuStyle}>
            <Li theme={mobileMenuItemStyle}>
              <LinkSwitch url="/" theme={mobileMenuLinkStyle}>
                Home
              </LinkSwitch>
            </Li>
            <MobileMenuSearchItem
              setSearchToggle={setSearchToggle}
              searchToggle={searchToggle}
            />
            <Li theme={mobileMenuItemStyle}>
              <LinkSwitch url="/industries" theme={mobileMenuLinkStyle}>
                Industries
              </LinkSwitch>
            </Li>
            {menu?.map((item, key) => (
              <MobileMenuItem
                post={post}
                item={item}
                key={key}
                resetSubMenuToggle={resetSubMenuToggle}
              />
            ))}
          </Ul>
        </MotionDiv>
      </AnimatePresence>
    </Div>
  );
};

MobileMenu.propTypes = {
  menu: PropTypes.array.isRequired,
  post: PropTypes.object.isRequired,
};

MobileMenu.defaultProps = {
  menu: [],
};

const mapStateToProps = (state) => ({
  post: getCurrentPost(state),
});

export default connect(mapStateToProps)(MobileMenu);
