import React from 'react';
import PropTypes from 'proptypes';
import Table from 'terra-table';
import Instance from "../../models/Instance";
import InstanceSection from "../Instance/InstanceSection";

class Board extends React.Component {
  static propTypes = {
    instances: PropTypes.arrayOf(PropTypes.instanceOf(Instance)),
    onAddComment: PropTypes.func,
    onEditCommentClick: PropTypes.func,
    onDeleteComment: PropTypes.func,
    onUpdateComment: PropTypes.func,
    onInstanceTitleChange: PropTypes.func,
    onColorChange: PropTypes.func,
  };

  static defaultProps = {
    instances: [],
    onEditCommentClick: () =>{},
    onAddComment: () => {},
    onDeleteComment: () => {},
    onUpdateComment: () => {},
    onInstanceTitleChange: () => {},
    onColorChange: () => {},
  };

  render() {
    return (
      <Table style={{border: '0'}}>
        <Table.Rows>
          <Table.Row style={{border: 0}}>
            {
              this.props.instances
                .map(instance => (
                  <Table.Cell
                    content={
                      <InstanceSection
                        instance={instance}
                        onAddComment={(comment) => this.props.onAddComment(instance.id, comment)}
                        onEditCommentClick={(commentId) => this.props.onEditCommentClick(instance.id, commentId)}
                        onDeleteComment={(commentId) => this.props.onDeleteComment(instance.id, commentId)}
                        onUpdateComment={(comment) => this.props.onUpdateComment(instance.id, comment)}
                        onInstanceTitleChange={(title) => this.props.onInstanceTitleChange(instance.id, title)}
                        onColorChange={(colorCode, colorType) => this.props.onColorChange(instance.id, colorCode, colorType)}
                      />
                    }
                    key={instance.id}
                    style={{width: `${100/this.props.instances.length}%`}}
                  />
                ))
            }
          </Table.Row>
        </Table.Rows>
      </Table>
    )
  }
}

export default Board;