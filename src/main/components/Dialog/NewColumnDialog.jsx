import React from 'react';
import PropTypes from 'proptypes';
import DialogModal from 'terra-dialog-modal';
import Input from 'terra-form-input';
import ActionHeader from 'terra-action-header';
import DialogFooter from "./DialogFooter";

class NewColumnDialog extends React.Component {
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
        ariaLabel="New Column"
        onRequestClose={this.props.onCancel}
        header={
          <ActionHeader
            title="New Column"
          />
        }
        footer={
          <DialogFooter
            onCancel={this.props.onCancel}
            onOk={() => this.props.onOk(this.state.inputValue)}
            okButtonText="Ok"
            cancelButtonText="Cancel"
          />
        }
      >
        <Input
          defaultValue={this.state.inputValue}
          onChange={(event) => {this.setState({inputValue: event.target.value})}}
        />
      </DialogModal>
    )
  }
}

export default NewColumnDialog;