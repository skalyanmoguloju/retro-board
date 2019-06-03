import React from 'react';
import PropTypes from 'proptypes';
import Spacer from 'terra-spacer';
import Button from 'terra-button';
import IconAdd from 'terra-icon/lib/icon/IconAdd';
import Instance from "../../models/Instance";
import EditCard from "../Card/EditCard";
import Comment from "../../models/Comment";
import ViewCard from '../Card/ViewCard'
import Title from "../Title/Title";
import DeleteCommentDialog from "../Dialog/DeleteCommentDialog";

class InstanceSection extends React.Component{
  static propTypes = {
    instance: PropTypes.instanceOf(Instance).isRequired,
    onAddComment: PropTypes.func,
    onEditCommentClick: PropTypes.func,
    onDeleteComment: PropTypes.func,
    onUpdateComment: PropTypes.func,
    onInstanceTitleChange: PropTypes.func,
    onColorChange: PropTypes.func,
  };

  static defaultProps = {
    onEditCommentClick: () => {},
    onDeleteComment: () => {},
    onUpdateComment: () => {},
    onInstanceTitleChange: () => {},
    onColorChange: () => {},
  };

  state = {
    newComments: [],
    deleteCommentId: undefined,
  };

  onAddNewCommentButtonClick = () => {
    const {newComments} = this.state;

    newComments.push(new Comment({}));
    this.setState({newComments});
  };

  onNewCommentAdd = (id, displayValue) => {
    const updatedNewComments = this.state.newComments
      .filter(comment => comment.id !== id);

    this.setState({newComments: updatedNewComments});

    this.props.onAddComment(new Comment({id, displayValue}))
  };

  deleteNewComment = (commentId) => {
    const updatedNewComments = this.state.newComments.filter(comment => comment.id !== commentId);
    this.setState({newComments:updatedNewComments});
  };

  getAddCards = () => (
    this.state.newComments
      .map(comment => (
        <EditCard
          key={comment.id}
          comment={comment}
          isAddMode
          onSubmit={(value) => this.onNewCommentAdd(comment.id, value)}
          onDelete={() => this.deleteNewComment(comment.id)}
          colorCode={this.props.instance.colorCode}
        />)
      )
  );

  onDeleteComment = () => {
    this.props.onDeleteComment(this.state.deleteCommentId);
    this.setState({deleteCommentId: undefined});
  };

  commentCards = () => (
    this.props.instance.comments
      .map(comment => (
        comment.isEditMode
          ? (
            <EditCard
              key={comment.id}
              comment={comment}
              isAddMode={false}
              onDelete={() => this.setState({deleteCommentId: comment.id})}
              onSubmit={(value) => this.props.onUpdateComment(new Comment({...comment, displayValue: value, isEditMode: false}))}
              colorCode={this.props.instance.colorCode}
            />
          )
          : (
            <ViewCard
              key={comment.id}
              comment={comment}
              onEditCommentClick={() => this.props.onEditCommentClick(comment.id)}
              colorCode={this.props.instance.colorCode}
              colorType={this.props.instance.colorType}
            />
          )
        )
      )
  );

  render() {
    return (
      <Spacer>
        {this.state.deleteCommentId && (
          <DeleteCommentDialog
            onCancel={() => this.setState({deleteCommentId: undefined})}
            onOk={this.onDeleteComment}
          />
        )}
        <Title
          displayValue={this.props.instance.title}
          onChange={this.props.onInstanceTitleChange}
          isColorPickerVisible
          defaultColorCode={this.props.instance.colorCode}
          defaultColorType={this.props.instance.colorType}
          onColorChange={this.props.onColorChange}
        />
        <Button
          text="Add Comment"
          isIconOnly
          icon={<IconAdd/>}
          isBlock
          onClick={this.onAddNewCommentButtonClick}/>
        {this.getAddCards()}
        {this.commentCards()}
      </Spacer>
    )
  }
}

export default InstanceSection;