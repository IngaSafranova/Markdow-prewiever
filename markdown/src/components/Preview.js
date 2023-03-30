import React from 'react';
import { marked } from 'marked';

const Preview = (props) => {
  marked.setOptions({ breaks: true });
  let markedInput = marked(props.input);
  return (
    <div id="preview" dangerouslySetInnerHTML={{ __html: markedInput }}></div>
  );
};
export default Preview;
