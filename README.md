## Installation

```
  npm i react-native-chipgroup
```

## Usage

```JavaScript
import { FilterTags } from 'react-native-chipgroup';

const filterData = [
    { label: 'All', value: 'all' },
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' }
  ]

<FilterTags
    data={filterData}
    renderLabel={(item) => item.label}
    onSelect={(item) => console.log(item)}
/>
```

## Props

| Prop name            | Type                                                | Default value          | Description                                                                                      |
|----------------------|-----------------------------------------------------|------------------------|--------------------------------------------------------------------------------------------------|
| data                 | `any[]`                                             | -                      | An array of items to display as tags.                                                           |
| onSelect             | `(item: any, index: number) => void`                | -                      | A function called when a tag is selected. It receives the selected item and its index.         |
| renderLabel          | `(item: any) => string`                             | -                      | A function used to render the label of each tag.                                                 |
| containerStyle       | `StyleProp<ViewStyle>` or `undefined`               | -                      | Optional styling for the container of the Tag component.                                          |
| style                | `StyleProp<ViewStyle>` or `(selected: boolean) => StyleProp<ViewStyle>` or `undefined` | -     | Optional styling for the tags. It can be either a style object or a function.                   |
| labelStyle           | `StyleProp<TextStyle>` or `(selected: boolean) => StyleProp<TextStyle>` or `undefined` | -   | Optional styling for the label of the tags. It can be either a style object or a function.       |
| defaultSelectedIndex | `number` or `undefined`                             | `0`                    | The default index of the selected tag.                                                          |
