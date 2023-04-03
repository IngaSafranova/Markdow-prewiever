import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Preview from "./Preview";

const Editor = () => {
  const initial = `# Let's get started!
## Start typing and change this
[Look at this dog!](https://www.freepik.com/free-photo/close-up-cute-dog-lying-grass_3212180.htm#query=dog&position=5&from_view=search&track=sph)\\
  
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

  ![Dog Image](https://www.freepik.com/free-photo/close-up-cute-dog-lying-grass_3212180.htm#query=dog&position=5&from_view=search&track=sph)`;

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
