import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Preview from "./Preview";

const Editor = () => {
  const initial = `# Let's get started!
## Start typing and change this
[Look at this corgi!](https://media.istockphoto.com/photos/pretty-cute-corgi-dog-wearing-royal-costume-crown-on-white-background-picture-id1193592505?s=612x612)\\
  
\`This is marked library within react with dangerouslySetInnerHTML\`

  ~~~ 
  It's a little different if you want to do multiple lines 
  of code in the same block, this needs tilde symbols!
  ~~~

  Since this is HTML we can do all the regular tags like lists
  - First Item of my list!
  - Aaaand the Second
  - We can even add inner tags like **bold!**
  > Blockquote is another useful tag we can use when rendering

  And finally we can add images, like that corgi I linked earlier!

  ![Corgi Image](https://media.istockphoto.com/photos/pretty-cute-corgi-dog-wearing-royal-costume-crown-on-white-background-picture-id1193592505?s=612x612)`;

  const [input, setInput] = useState(initial);
  return (
    <div class="editor">
      <h1>Type in the box below:</h1>
      <TextField
        id="editor"
        value={input}
        multiline
        rows={5}
        sx={{ width: 800, paddingTop: 5 }}
        onChange={(event) => setInput(event.target.value)}
      />
      <Preview input={input} />
    </div>
  );
};
export default Editor;
