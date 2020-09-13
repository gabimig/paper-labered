# paper-labered

Material-ui Paper witch includes a title on the top margin.

### Install

```bash
npm install paperlabeled-material-ui
yarn add paperlabeled-material-ui
```

### Usage

Here's an example of basic usage:

```tsx
import React, { useState } from 'react'
import PaperLabeled from 'paperlabeled-material-ui'

function MyApp() {

  return (
    <div>
      <PaperLabeled title="Title">
        <h3>Lorem Ipsum</h3>
        <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
      </PaperLabeled>
    </div>
  );
}
```
![alt text](https://raw.githubusercontent.com/gabimig/paper-labered/master/PaperLabeled.PNG)