## Installation

```
  npm i react-native-chipgroup

```

## Getting started

```JavaScript
import { FilterTags } from 'react-native-chipgroup';

<FilterTags
    data={[{ label: 'Oneeee', value: '1' }, { label: 'Too', value: '2' }]}
    renderLabel={(item) => item.label}
    onSelect={(item) => console.log(item)}
/>
```