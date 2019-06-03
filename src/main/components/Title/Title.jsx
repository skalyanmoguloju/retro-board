import React from 'react';
import PropTypes from 'proptypes';
import Spacer from 'terra-spacer';
import Button from 'terra-button';
import Input from 'terra-form-input';
import IconEdit from 'terra-icon/lib/icon/IconEdit';
import Text from 'terra-text';
import ColorPicker from "../ColorPicker/ColorPicker";
import ColorCode from "../../models/ColorCode";
import ColorType from "../../models/ColorType";

class Title extends React.Component {
  static propTypes = {
    displayValue: PropTypes.string,
    onChange: PropTypes.func,
    isColorPickerVisible: PropTypes.bool,
    defaultColorCode: PropTypes.string,
    defaultColorType: PropTypes.string,
    onColorChange: PropTypes.func,
  };

  static defaultProps ={
    displayValue: '',
    onChange: () => {},
    isColorPickerVisible: false,
    defaultColorCode: ColorCode.GREEN,
    defaultColorType: ColorType.FILL,
    onColorChange: () => {},
  };

  state = {
    editMode: false,
    titleText: this.props.displayValue,
    showEditIcon: false
  };

  setEditMode = (mode) => {
    this.setState({editMode: mode})
  };

  setEditIcon = (value) => {
    this.setState({showEditIcon: value})
  };

  render() {
    return (
      <Spacer>
        {this.state.editMode
          ? (
            <Spacer margin="small-2">
              <Input
                defaultValue={this.state.titleText}
                onChange={(event) => {this.setState({titleText: event.target.value})}}
              />
              <Spacer marginTop="small-2" isInlineBlock>
                <Button
                  isCompact
                  text="Save"
                  variant='emphasis'
                  onClick={() => {this.setEditMode(false); this.props.onChange(this.state.titleText)} }
                />
                <Spacer marginLeft="small-2" isInlineBlock>
                  <Button
                    isCompact
                    text="Cancel"
                    variant='de-emphasis'
                    onClick={() => this.setEditMode(false)}
                  />
                </Spacer>
              </Spacer>
            </Spacer>
          )
          : (
            <Spacer isInlineBlock>
              {this.props.isColorPickerVisible && (
                <ColorPicker
                  defaultColorType={this.props.defaultColorType}
                  defaultColorCode={this.props.defaultColorCode}
                  onColorChange={this.props.onColorChange}
                />
              )}
              <Spacer
                isInlineBlock
                onClick={() => this.setEditMode(true)}
                style={{cursor: "pointer"}}
                onMouseOver={() => this.setEditIcon(true)}
                onMouseOut={()=>this.setEditIcon(false)}

              >
                <Text weight={700} fontSize={16}>{this.props.displayValue}</Text>
                {this.state.showEditIcon && (
                  <Spacer isInlineBlock>
                    <Button
                      isCompact
                      isIconOnly
                      text="edit"
                      icon={<IconEdit />}
                      variant="utility"
                      onClick={() => this.setEditMode(true)}
                    />
                  </Spacer>
                )}
              </Spacer>
            </Spacer>
          )
        }
      </Spacer>
    )
  }
}

export default Title;