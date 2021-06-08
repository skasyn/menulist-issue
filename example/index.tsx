import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Switch } from '../src';

const App = () => {
  return (
    <div>
      <Switch />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
