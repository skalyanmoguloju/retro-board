import React from 'react';
import PropTypes from 'proptypes';
import Spacer from 'terra-spacer';
import SlidePanel from 'terra-slide-panel';
import Header from './Header/Header';
import Instance from "../models/Instance";
import Board from "./Board/Board";
import Comment from "../models/Comment";
import ContentContainer from 'terra-content-container';
import SettingsPanel from "./SettingsPanel/SettingsPanel";


class FunRetroContainer extends React.Component {
  state = {
    instances:[new Instance({title: 'kalyan'})],
    title: 'Header',
    showSettingsPanel: false,
  };

  onAddColumnClick = (value) => {
    if(value.trim().length>0) {
      const {instances} = this.state;
      instances.push(new Instance({title: value}))
      this.setState({instances})
    }
  };

  onAddComment = (instanceId, comment) => {
    const addComment = (instance) => {
      instance.comments.push(comment);
      return instance;
    };
    const updatedInstances = this.state.instances
      .map(instance => instance.id === instanceId
        ? addComment(instance) : instance);
    this.setState({instances: updatedInstances})
  };

  onEditCommentClick = (instanceId, commentId) => {
    const editComment = (instance) => {
      const updatedComments = instance.comments.map(comment => comment.id === commentId
        ? new Comment({...comment, isEditMode: true}) : comment);
      return new Instance({...instance, comments: updatedComments});
    };

    const updatedInstances = this.state.instances
      .map(instance => instance.id === instanceId
        ? editComment(instance) : instance);
    this.setState({instances: updatedInstances});
  };

  onDeleteComment = (instanceId, commentId) => {
    const deleteComment = (instance) => {
      const updatedComments = instance.comments
        .filter(comment => comment.id !== commentId);
      return new Instance({...instance, comments: updatedComments});
    };

    const updatedInstances = this.state.instances
      .map(instance => instance.id === instanceId
        ? deleteComment(instance) : instance);
    this.setState({instances: updatedInstances})
  };

  onColorChange = (instanceId, colorCode, colorType) => {
    const updatedInstances = this.state.instances
      .map(instance => instance.id === instanceId ? new Instance({...instance, colorCode, colorType}) : instance);
    this.setState({instances: updatedInstances})
  };

  onUpdateComment = (instanceId, comment) => {
    const updateComment = (instance) => {
      const updatedComments = instance.comments
        .map(c => comment.id === c.id ? comment : c);
      return new Instance({...instance, comments: updatedComments});
    };

    const updatedInstances = this.state.instances
      .map(instance => instance.id === instanceId
        ? updateComment(instance) : instance);
    this.setState({instances: updatedInstances})
  };

  onInstanceTitleChange = (instanceId, title) => {
    const updatedInstances = this.state.instances
      .map(instance => instance.id === instanceId ? new Instance({...instance, title}) : instance);
    this.setState({instances: updatedInstances})
  };

  render() {
    return (
      <SlidePanel
        fill
        mainContent={
          <ContentContainer
            style={{height:"100%", backgroundColor:"#ECECF0"}}
            header={
              <Header
                onAddColumnClick={this.onAddColumnClick}
                title={this.state.title}
                onTitleChange={(title) => this.setState({title})}
                onSettingsClick={() => this.setState({showSettingsPanel: true})}
              />
            }
          >
            <Board
              instances={this.state.instances}
              onAddComment={this.onAddComment}
              onEditCommentClick={this.onEditCommentClick}
              onDeleteComment={this.onDeleteComment}
              onUpdateComment={this.onUpdateComment}
              onInstanceTitleChange={this.onInstanceTitleChange}
              onColorChange={this.onColorChange}
            />
          </ContentContainer>
        }
        panelContent={
          <SettingsPanel
            onCloseSettingsPanel={() => this.setState({showSettingsPanel: false})}
          />
        }
        isOpen={this.state.showSettingsPanel}
      />
    )
  }
}

export default FunRetroContainer;