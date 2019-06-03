import React from 'react';
import PropTypes from 'proptypes';
import TerraHeader from 'terra-clinical-header';
import Spacer from 'terra-spacer';
import Button from 'terra-button';
import IconSettings from 'terra-icon/lib/icon/IconSettings';
import Title from "../Title/Title";
import NewColumnDialog from "../Dialog/NewColumnDialog";

class Header extends React.Component{
  static propTypes = {
    onAddColumnClick: PropTypes.func,
    title: PropTypes.string,
    onTitleChange: PropTypes.func,
    onSettingsClick: PropTypes.func,
  };
  static defaultProps = {
    onAddColumnClick: () => {},
    title: '',
    onTitleChange: () => {},
    onSettingsClick: () => {},
  };

  state = {
    isNewColumnDialogOpen: false,
  };

  onNewColumnDialogOk = (value) => {
    this.props.onAddColumnClick(value);
    this.onNewColumnDialogCancel();
  };

  onNewColumnDialogCancel = (value) => {
    this.setState({isNewColumnDialogOpen: false})
  };

  render() {
    return (
      <Spacer>
        {
          this.state.isNewColumnDialogOpen &&
          <NewColumnDialog
            onOk={this.onNewColumnDialogOk}
            onCancel={this.onNewColumnDialogCancel}
          />
        }
        <TerraHeader
          startContent={
            <Spacer>
              <Title
                displayValue={this.props.title}
                onChange={this.props.onTitleChange}
              />
            </Spacer>
          }
          endContent={
            <Spacer>
              <Button
                text="Add Column"
                onClick={() => this.setState({isNewColumnDialogOpen: true})}
                variant="emphasis"
              />
              <Button
                text="Settings"
                onClick={this.props.onSettingsClick}
                icon={<IconSettings/>}
                variant="de-emphasis"
              />
            </Spacer>
          }
        >
        </TerraHeader>
      </Spacer>
    )
  }
}

export default Header;