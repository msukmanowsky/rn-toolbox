A collection of tools for my React Native projects.

# Installation

```
npm i --save git://github.com/msukmanowsky/rn-toolbox.git
```

# Tools

## scutwind

Like Tailwind, but customized for me:

```javascript
import { View } from "react-native";
import { scutwind as sw } from "rn-toolbox";


const Thing = () => (
  <View style={sw("flex-grow mx-4 bg-gray-100")} />
);
```
