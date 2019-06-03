import uuid from 'uuid/v4'

class Comment {
  constructor(comment) {
    this.id = comment.id ? comment.id: uuid();
    this.displayValue = comment.displayValue;
    this.ownerId = comment.ownerId;
    this.isEditMode = comment.isEditMode || false;
  }
}

export default Comment;