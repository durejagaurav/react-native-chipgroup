## React Native Chipgroup

`react-native-chipgroup` is a library that provides custom React Native components for creating interactive chip elements and selectable chip groups. These components are designed to enhance user interaction in React Native applications by offering intuitive and customizable UI elements.

### The library includes the following components:

- **Chip**: A versatile chip component that supports different modes, custom icons, and actions.
- **SelectChip**: A group of selectable chips allowing users to choose from a set of options, with customizable styling and selection handling.

## Installation

Using npm:
```
  npm i react-native-chipgroup
```

**Note**: [react-native-responsive-dimensions](https://www.npmjs.com/package/react-native-responsive-dimensions) is a required dependency for `react-native-chipgroup`. Make sure to install it for proper functionality.


## Basic Usage

```JavaScript
import React from 'react';
import { View } from 'react-native';
import { Chip, SelectChip } from 'react-native-chipgroup';

const data = [
  { label: 'Option 1', value: 1 },
  { label: 'Option 2', value: 2 },
  { label: 'Option 3', value: 3 }
];

const App = () => {

  const handleSelect = (item, index) => {
    console.log(`Selected: ${item.value} at index ${index}`);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <Chip
        mode="outlined"
        onPress={() => console.log('Chip pressed')}
        isCloseIcon={true}
        onClose={() => console.log('Close icon pressed')}
      >
        Example Chip
      </Chip>

      <SelectChip
        data={data}
        onSelect={handleSelect}
        renderLabel={(item) => item.label}
        defaultSelectedIndex={0}
        containerStyle={{ marginTop: 20 }}
      />

    </View>
  );
};

export default App;

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
| style                | `StyleProp<ViewStyle>` or `(selected: boolean) => StyleProp<ViewStyle>` or `undefined` | No | - | Optional styling for the chip. It can be either a style object or a function.                                                                   |
| labelStyle           | `StyleProp<TextStyle>` or `(selected: boolean) => StyleProp<TextStyle>` or `undefined` | No | - | Optional styling for the label of the chip. It can be either a style object or a function.                                                      |

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

## License

The library is released under the ISC license. For more information see the License Tab.