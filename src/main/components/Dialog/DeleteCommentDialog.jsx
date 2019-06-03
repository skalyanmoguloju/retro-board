import React from 'react';
import PropTypes from 'proptypes';
import DialogModal from 'terra-dialog-modal';
import Arrange from 'terra-arrange';
import Text from 'terra-text';
import IconWarning from 'terra-icon/lib/icon/IconWarning';
import ActionHeader from 'terra-action-header';
import Spacer from 'terra-spacer';
import DialogFooter from "./DialogFooter";

class DeleteCommentDialog extends React.Component {
  static propTypes = {
    onCancel: PropTypes.func,
    onOk: PropTypes.func,
  };

  static defaultProps = {
    onCancel: () =>{},
    onOk: () => {},
  };

  state = {
    inputValue: '',
  };

  render() {
    return (
      <DialogModal
        isOpen
        ariaLabel="Delete Comment"
        onRequestClose={this.props.onCancel}
        header={
          <ActionHeader
            title="Delete Comment"
          />
        }
        footer={
          <DialogFooter
            onCancel={this.props.onCancel}
            onOk={this.props.onOk}
            okButtonText="Yes, delete it!"
            cancelButtonText="No, keep it"
          />
        }
      >
        <Arrange
          fitStart={<IconWarning height="3em" width="3em"/>}
          fill={<Spacer marginLeft="small"><Text>Are you sure you want to delete?</Text></Spacer>}
          alignFill="center"
        />
      </DialogModal>
    )
  }
}

export default DeleteCommentDialog;