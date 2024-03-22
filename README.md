## Installation

```
  npm i react-native-chipgroup
```

## Usage

```JavaScript
import { SelectChip } from 'react-native-chipgroup';

const data = [
    { label: 'All', value: 'all' },
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' }
  ]

<SelectChip
    data={data}
    renderLabel={(item) => item.label}
    onSelect={(item) => console.log(item)}
/>
```

## Props

### Chip

| Prop name            | Type                                                | Required | Default value          | Description                                                                                      |
|----------------------|-----------------------------------------------------|----------|------------------------|--------------------------------------------------------------------------------------------------|
| mode                 | `'flat' \| 'outlined'`                             | No       | `'flat'`               | The mode of the chip, either `'flat'` or `'outlined'`.                                          |
| children             | `ReactNode`                                         | No       | -                      | The content of the chip.                                                                         |
| onPress              | `() => void`                                        | No       | -                      | A function called when the chip is pressed.                                                     |
| leftIcon             | `ReactNode`                                         | No       | -                      | An icon to be displayed on the left side of the chip.                                           |
| rightIcon            | `ReactNode`                                         | No       | -                      | An icon to be displayed on the right side of the chip.                                          |
| isCloseIcon          | `Boolean`                                           | No       | -                      | Determines whether to show a close icon on the chip.                                            |
| onClose              | `() => void`                                        | No       | -                      | A function called when the close icon is pressed.                                               |
| containerStyle       | `StyleProp<ViewStyle>` or `undefined`               | No       | -                      | Optional styling for the container of the Chip component.                                        |
| style                | `StyleProp<ViewStyle>` or `(selected: boolean) => StyleProp<ViewStyle>` or `undefined` | No | - | Optional styling for the chip.                                                                   |
| labelStyle           | `StyleProp<TextStyle>` or `(selected: boolean) => StyleProp<TextStyle>` or `undefined` | No | - | Optional styling for the label of the chip.                                                      |

### SelectChip

| Prop name            | Type                                                | Required | Default value          | Description                                                                                      |
|----------------------|-----------------------------------------------------|----------|------------------------|--------------------------------------------------------------------------------------------------|
| data                 | `any[]`                                             | Yes      | -                      | An array of items to display as tags.                                                           |
| onSelect             | `(item: any, index: number) => void`                | No       | -                      | A function called when a tag is selected. It receives the selected item and its index.         |
| renderLabel          | `(item: any) => string`                             | Yes      | -                      | A function used to render the label of each tag.                                                 |
| containerStyle       | `StyleProp<ViewStyle>` or `undefined`               | No       | -                      | Optional styling for the container of the Tag component.                                          |
| style                | `StyleProp<ViewStyle>` or `(selected: boolean) => StyleProp<ViewStyle>` or `undefined` | No | - | Optional styling for the tags. It can be either a style object or a function.                   |
| labelStyle           | `StyleProp<TextStyle>` or `(selected: boolean) => StyleProp<TextStyle>` or `undefined` | No | - | Optional styling for the label of the tags. It can be either a style object or a function.       |
| defaultSelectedIndex | `number` or `undefined`                             | No       | `0`                    | The default index of the selected tag.                                                          |
