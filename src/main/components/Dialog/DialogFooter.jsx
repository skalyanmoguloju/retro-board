import React from 'react';
import PropTypes from 'proptypes';
import Footer from 'terra-action-footer';

import Button from 'terra-button';
import Spacer from 'terra-spacer';

const DialogFooter = (props) => (
  <Footer
    end={(
      <React.Fragment>
        <Spacer isInlineBlock marginRight="medium">
          <Button text={props.okButtonText} variant={Button.Opts.Variants.EMPHASIS} onClick={props.onOk}/>
        </Spacer>
        <Button text={props.cancelButtonText} onClick={props.onCancel}/>
      </React.Fragment>
    )}
  />
);

DialogFooter.propTypes = {
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
  okButtonText: PropTypes.string.isRequired,
  cancelButtonText: PropTypes.string.isRequired,
};

DialogFooter.defaultProps = {
  onOk: () =>{},
  onCancel: () => {},
};

export default DialogFooter;