import React from 'react';
import PropTypes from 'proptypes';
import Card from 'terra-card';
import Grid from 'terra-grid';
import Text from 'terra-text';
import Button from 'terra-button';
import Arrange from 'terra-arrange';
import Spacer from 'terra-spacer';
import IconEdit from 'terra-icon/lib/icon/IconEdit';
import { FaThumbsUp, FaComment } from 'react-icons/fa';
import 'emoji-mart/css/emoji-mart.css';
import Comment from "../../models/Comment";
import ColorCode from "../../models/ColorCode";
import ColorType from "../../models/ColorType";

const ViewCard = (props) => {
  const fontColor = props.colorType === ColorType.FILL ? "white" : "black";
  return (
    <Spacer
      marginTop="small"
      marginBottom="small"
      paddingLeft={props.colorType === ColorType.BORDER ? 'small-2' : undefined}
      style={{backgroundColor: props.colorType === ColorType.BORDER ? props.colorCode : "white" }}
    >
      <Spacer style={{backgroundColor: props.colorType === ColorType.BORDER ? "white" : undefined}}>
        <Card style={{backgroundColor: props.colorType === ColorType.FILL ? props.colorCode : "white"}}>
          <Card.Body style={{padding: "0.2em"}}>
            <Grid>
              <Grid.Row>
                <Grid.Column>
                  <Arrange
                    fill={<Text style={{color: fontColor}}>{props.comment.displayValue}</Text>}
                    fitEnd={
                      <Button
                        isCompact
                        isIconOnly
                        text="edit"
                        icon={<IconEdit style={{color: fontColor}}/>}
                        variant="utility"
                        onClick={props.onEditCommentClick}
                      />
                    }
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <Arrange
                    fill={<div />}
                    fitEnd={
                      <Spacer>
                        <Spacer marginRight="small" isInlineBlock>
                          <FaThumbsUp style={{color: fontColor, cursor: "pointer"}}/>
                          <Spacer marginLeft="small-2" isInlineBlock>
                            <Text style={{color: fontColor}} weight={700} >0</Text>
                          </Spacer>
                        </Spacer>
                        <Spacer isInlineBlock>
                          <FaComment style={{color: fontColor, cursor: "pointer"}}/>
                          <Spacer marginLeft="small-2" isInlineBlock>
                            <Text style={{color: fontColor}} weight={700} >0</Text>
                          </Spacer>
                        </Spacer>
                      </Spacer>
                    }
                    alignFitEnd="bottom"
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Card.Body>
        </Card>
      </Spacer>
    </Spacer>
  )
};

ViewCard.propTypes = {
  comment: PropTypes.instanceOf(Comment).isRequired,
  onUpdateClick: PropTypes.func,
  onEditCommentClick: PropTypes.func,
  colorCode: PropTypes.string,
  colorType: PropTypes.string,
};

ViewCard.defaultProp = {
  onUpdateClick: () => {},
  onEditCommentClick: () => {},
  colorCode: ColorCode.GREEN,
  colorType: ColorType.FILL,
};


export default ViewCard;