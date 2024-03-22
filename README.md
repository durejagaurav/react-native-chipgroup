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

- **mode**: `'flat' \| 'outlined'`
  - *Required*: No
  - *Default value*: `'flat'`
  - *Description*: The mode of the chip, either `'flat'` or `'outlined'`.

- **children**: `ReactNode`
  - *Required*: No
  - *Default value*: -
  - *Description*: The content of the chip.

- **onPress**: `() => void`
  - *Required*: No
  - *Default value*: -
  - *Description*: A function called when the chip is pressed.

- **leftIcon**: `ReactNode`
  - *Required*: No
  - *Default value*: -
  - *Description*: An icon to be displayed on the left side of the chip.

- **rightIcon**: `ReactNode`
  - *Required*: No
  - *Default value*: -
  - *Description*: An icon to be displayed on the right side of the chip.

- **isCloseIcon**: `Boolean`
  - *Required*: No
  - *Default value*: -
  - *Description*: Determines whether to show a close icon on the chip.

- **onClose**: `() => void`
  - *Required*: No
  - *Default value*: -
  - *Description*: A function called when the close icon is pressed.

- **containerStyle**: `StyleProp<ViewStyle>`
  - *Required*: No
  - *Default value*: -
  - *Description*: Optional styling for the container of the Chip component.

- **style**: `StyleProp<ViewStyle>`
  - *Required*: No
  - *Default value*: -
  - *Description*: Optional styling for the chip.

- **labelStyle**: `StyleProp<TextStyle>`
  - *Required*: No
  - *Default value*: -
  - *Description*: Optional styling for the label of the chip.


## Props

| Prop name            | Type                                                | Required | Default value          | Description                                                                                      |
|----------------------|-----------------------------------------------------|----------|------------------------|--------------------------------------------------------------------------------------------------|
| data                 | `any[]`                                             | Yes      | -                      | An array of items to display as tags.                                                           |
| onSelect             | `(item: any, index: number) => void`                | No       | -                      | A function called when a tag is selected. It receives the selected item and its index.         |
| renderLabel          | `(item: any) => string`                             | Yes      | -                      | A function used to render the label of each tag.                                                 |
| containerStyle       | `StyleProp<ViewStyle>` or `undefined`               | No       | -                      | Optional styling for the container of the Tag component.                                          |
| style                | `StyleProp<ViewStyle>` or `(selected: boolean) => StyleProp<ViewStyle>` or `undefined` | No | - | Optional styling for the tags. It can be either a style object or a function.                   |
| labelStyle           | `StyleProp<TextStyle>` or `(selected: boolean) => StyleProp<TextStyle>` or `undefined` | No | - | Optional styling for the label of the tags. It can be either a style object or a function.       |
| defaultSelectedIndex | `number` or `undefined`                             | No       | `0`                    | The default index of the selected tag.                                                          |
