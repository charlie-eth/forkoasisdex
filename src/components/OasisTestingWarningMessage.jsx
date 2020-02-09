import React, { PureComponent } from "react";
import { PropTypes } from "prop-types";
// import ImmutablePropTypes from 'react-immutable-proptypes';

import { MSGTYPE_WARNING } from "./OasisMessage";
import OasisMessage from "./OasisMessage";

const propTypes = PropTypes && {};
const defaultProps = {};

class OasisTestingWarningMessage extends PureComponent {
  render() {
    return (
      <OasisMessage type={MSGTYPE_WARNING} heading={"Warning!"}>
        <div>
          <ul>
            <li>
              <span styleName="Circle Circle--Red">
                <span styleName="FilledCircle" />
              </span>
              <span styleName="Text">
                <div>
                  Updated to new contract and DAI on 02.09.2020<br />
                  OasisDex is never shutting down. Long live the decentralised web. Email: forkoasisdex@protonmail.ch<br />
                  Please consider donating to 0x3496A7157968f851444AfD279d6568BC8cB086a1
                </div>
              </span>
            </li>

          </ul>
        </div>
      </OasisMessage>
    );
  }
}

OasisTestingWarningMessage.displayName = "OasisTestingWarningMessage";
OasisTestingWarningMessage.propTypes = propTypes;
OasisTestingWarningMessage.defaultProps = defaultProps;
export default OasisTestingWarningMessage;
