import Comment from "./Comment";
import uuid from 'uuid/v4';
import ColorCode from "./ColorCode";
import ColorType from "./ColorType";

class Instance {
  constructor(instance) {
    this.id = instance.id ? instance.id : uuid();
    this.title = instance.title;
    this.comments = instance.comments ? instance.comments.map(comment => new Comment(comment)) : [];
    this.colorCode = instance.colorCode ? instance.colorCode : ColorCode.GREEN;
    this.colorType = instance.colorType ? instance.colorType : ColorType.FILL;
  }
}

export default Instance;