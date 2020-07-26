/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './src/redux/store'

const store = createStore(reducer)

const App = (): any => {
  return (
    <Provider store={store}>
        <HomeScreen />
    </Provider>
      
  );
};

export default App;
