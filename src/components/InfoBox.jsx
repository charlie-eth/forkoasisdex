import React, { PureComponent } from "react";
import { PropTypes } from "prop-types";

import styles from "./InfoBox.scss";
import CSSModules from "react-css-modules/dist/index";
import FlexBox from "./FlexBox";

const propTypes = PropTypes && {
  children: PropTypes.node,
  color: PropTypes.string,
  size: PropTypes.string,
  justifyContent: PropTypes.string,
  vertical: PropTypes.bool,
  fullWidth: PropTypes.bool,
  noBorder: PropTypes.bool,
  hidden: PropTypes.bool
};

const defaultProps = {
  color: "default",
  size: "md",
  className: ""
};

export class InfoBox extends PureComponent {
  render() {
    const {
      color,
      size,
      className,
      fullWidth,
      noBorder,
      ...props
    } = this.props;
    return (
      <FlexBox
        hidden={this.props.hidden}
        className={
         `${styles.box}
          ${styles[color]}
          ${!noBorder? styles[size]: styles['sm']}
          ${className}
          ${fullWidth ? styles.fullWidth : ""}
          ${noBorder ? styles.noBorder: ''}
          `
        }
        {...props}
      >
        {this.props.children}
      </FlexBox>
    );
  }
}

InfoBox.displayName = "InfoBox";
InfoBox.propTypes = propTypes;
InfoBox.defaultProps = defaultProps;
export default CSSModules(InfoBox, styles);
