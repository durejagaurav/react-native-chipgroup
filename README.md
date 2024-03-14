## Installation

```
  npm i react-native-chipgroup
```

## Getting started

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

| Prop name        | Type             | Default value                          | Description                                                                                                                                                             |
| ---------------- | ---------------- | -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| data | [] | null | [{label:'Male', value:'male'}, {label:'Female', value:'female'}]