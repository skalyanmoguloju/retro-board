import React from 'react';
import PropTypes from 'proptypes';
import Card from 'terra-card';
import Grid from 'terra-grid';
import TextArea from 'terra-form-textarea';
import Button from 'terra-button';
import Arrange from 'terra-arrange';
import Spacer from 'terra-spacer';
import Popup from 'terra-popup';
import { FaSmile } from 'react-icons/fa';
import IconTrash from 'terra-icon/lib/icon/IconTrash';
import 'emoji-mart/css/emoji-mart.css';
import {Picker} from 'emoji-mart'
import Comment from "../../models/Comment";
import ColorCode from "../../models/ColorCode";

class EditCard extends React.Component {
  static propTypes = {
    comment: PropTypes.instanceOf(Comment).isRequired,
    isAddMode: PropTypes.bool,
    onSubmit: PropTypes.func,
    onDelete: PropTypes.func,
    colorCode: PropTypes.string,
  };

  static defaultProps = {
    isAddMode: true,
    onSubmit: () => {},
    onDelete: () => {},
    colorCode: ColorCode.GREEN,
  };

  state = {
    isEmojiOpen: false,
    text: this.props.comment.displayValue ? this.props.comment.displayValue : '',
  };

  setEmojiPickerNode = (node) => {
    this.linkNode = node;
  };

  getEmojiPickerNode = () => this.linkNode;

  onSelection = (e) => {
    if (e.unified.length <= 5){
      let emojiPic = String.fromCodePoint(`0x${e.unified}`)
      this.setState({
        text: this.state.text + emojiPic
      })
    }else {
      let sym = e.unified.split('-');
      let codesArray = [];
      sym.forEach(el => codesArray.push('0x' + el));
      let emojiPic = String.fromCodePoint(...codesArray);
      this.setState({
        text: this.state.text + emojiPic
      })
    }
  };

  onChange = (e) => {
    this.setState({
      text: e.target.value
    })
  };

  render() {
    return (
      <Spacer marginBottom="small" marginTop="small">
        <Card style={{backgroundColor: this.props.colorCode}}>
          <Spacer padding="small">
            <Card.Body style={{backgroundColor: "white", padding: "0.2em"}}>
              <Grid>
                <Grid.Row>
                  <Grid.Column>
                    <Arrange
                      fill={
                        <TextArea
                          value={this.state.text}
                          onChange={this.onChange}
                        />
                      }
                      fitEnd={
                        <Spacer marginLeft="small-2">
                          <span ref={this.setEmojiPickerNode} onClick={() => this.setState({isEmojiOpen: true})}>
                            <FaSmile style={{color: this.props.colorCode, cursor: "pointer"}}/>
                          </span>
                        </Spacer>
                      }
                    />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <Arrange
                      fill={
                        <Spacer>
                          <Button
                            isCompact
                            text={this.props.isAddMode ? 'Add' : 'Done'}
                            variant='emphasis'
                            onClick={() => this.props.onSubmit(this.state.text)}
                          />
                        </Spacer>
                      }
                      fitEnd={
                        <Spacer>
                          <Spacer isInlineBlock>
                            <Button
                              isCompact
                              isIconOnly
                              text="delete"
                              icon={<IconTrash style={{color: "red"}}/>}
                              variant="utility"
                              onClick={this.props.onDelete}
                            />
                          </Spacer>
                        </Spacer>
                      }
                      alignFitEnd="bottom"
                    />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Card.Body>
          </Spacer>
        </Card>
        <Popup
          isArrowDisplayed
          isOpen={this.state.isEmojiOpen}
          targetRef={this.getEmojiPickerNode}
          onRequestClose={() => this.setState({isEmojiOpen: false})}
          contentHeight="auto"
          contentWidth="auto"
          contentAttachment="middle left"
          data-rule-result-popup
        >
          <Picker showPreview={false} title="" showSkinTones={false} onSelect={this.onSelection}/>
        </Popup>
      </Spacer>
    )
  }
}

export default EditCard;