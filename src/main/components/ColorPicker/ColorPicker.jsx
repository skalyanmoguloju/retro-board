import React from 'react';
import PropTypes from 'proptypes';
import Grid from 'terra-grid';
import Spacer from 'terra-spacer';
import Popup from 'terra-popup';
import ColorCode from "../../models/ColorCode";
import ColorType from "../../models/ColorType";
import IconBusy from 'terra-icon/lib/icon/IconBusy';
import IconUnavailable from 'terra-icon/lib/icon/IconUnavailable';

class ColorPicker extends React.Component {
  static propTypes = {
    defaultColorCode: PropTypes.string,
    defaultColorType: PropTypes.string,
    onColorChange: PropTypes.func,
  };

  static defaultProps = {
    defaultColorCode: ColorCode.GREEN,
    defaultColorType: ColorType.FILL,
    onColorChange: () => {},
  };

  state = {
    isOpen: false,
  };

  getColorButton = (colorCode, colorType, onClickAction) => (
    <div onClick={() => onClickAction(colorCode, colorType)}>
      {
        colorType === ColorType.FILL
          ? (
            <IconBusy style={{color: colorCode}}/>
          )
          : (
            <IconUnavailable style={{color: colorCode}}/>
          )
      }
    </div>
  );

  setColorPickerNode = (node) => {
    this.linkNode = node;
  };

  getColorPickerNode = () => this.linkNode;

  togglePickerVisibility = () => {
    this.setState({isOpen: !this.state.isOpen})
  };

  onColorChange = (colorCode, colorType) => {
    this.props.onColorChange(colorCode, colorType);
    this.togglePickerVisibility()
  }

  render() {
    return (
      <Spacer isInlineBlock marginRight="small-2">
        <span
          ref={this.setColorPickerNode}
          style={{cursor: 'pointer'}}
        >
          {this.getColorButton(this.props.defaultColorCode, this.props.defaultColorType, this.togglePickerVisibility)}
        </span>
        <Popup
          isArrowDisplayed
          isOpen={this.state.isOpen}
          targetRef={this.getColorPickerNode}
          onRequestClose={() => this.setState({isOpen: false})}
          contentHeight="auto"
          contentWidth="auto"
          contentAttachment="middle left"
        >
          <Spacer margin="small">
            <Grid>
              <Grid.Row>
                <Grid.Column tiny={3}>
                  {this.getColorButton(ColorCode.GREEN, ColorType.FILL, this.onColorChange)}
                </Grid.Column>
                <Grid.Column tiny={3}>
                  {this.getColorButton(ColorCode.PINK, ColorType.FILL, this.onColorChange)}
                </Grid.Column>
                <Grid.Column tiny={3}>
                  {this.getColorButton(ColorCode.LAVENDER, ColorType.FILL, this.onColorChange)}
                </Grid.Column>
                <Grid.Column tiny={3}>
                  {this.getColorButton(ColorCode.DARK_BLUE, ColorType.FILL, this.onColorChange)}
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column tiny={3}>
                  {this.getColorButton(ColorCode.LIGHT_BLUE, ColorType.FILL, this.onColorChange)}
                </Grid.Column>
                <Grid.Column tiny={3}>
                  {this.getColorButton(ColorCode.ORANGE, ColorType.FILL, this.onColorChange)}
                </Grid.Column>
                <Grid.Column tiny={3}>
                  {this.getColorButton(ColorCode.GREEN, ColorType.BORDER, this.onColorChange)}
                </Grid.Column>
                <Grid.Column tiny={3}>
                  {this.getColorButton(ColorCode.PINK, ColorType.BORDER, this.onColorChange)}
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column tiny={3}>
                  {this.getColorButton(ColorCode.LAVENDER, ColorType.BORDER, this.onColorChange)}
                </Grid.Column>
                <Grid.Column tiny={3}>
                  {this.getColorButton(ColorCode.DARK_BLUE, ColorType.BORDER, this.onColorChange)}
                </Grid.Column>
                <Grid.Column tiny={3}>
                  {this.getColorButton(ColorCode.LIGHT_BLUE, ColorType.BORDER, this.onColorChange)}
                </Grid.Column>
                <Grid.Column tiny={3}>
                  {this.getColorButton(ColorCode.ORANGE, ColorType.BORDER, this.onColorChange)}
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Spacer>
        </Popup>
      </Spacer>
    )
  }
}

export default ColorPicker;