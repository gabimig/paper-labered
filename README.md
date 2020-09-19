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

## User guide

### PaperLabeled

Displays a material-ui Paper with a label in the top margin

#### props

| Prop name | Type | Description | Default value |
| ------------- | ------------- | ------------- | ------------- |
| title | string | Title that will be shown in the top margin of the Paper  | '' |
| labelComp | React.ReactElement | React component that will be shown in the top margin of the Paper instead of the title. This option will make title prop disabled. | undefined |
| paperProps | PaperProps | Properties of the Material UI Papper | undefined |
| labelClass | string | CSS class name for the label | '' |
| labelClassContainer | string | CSS class name for the label container | '' |
