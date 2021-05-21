import React from 'react';
import HomePage from './containers/HomePage';

import GlobalStyles from './theme/globalStyles';
import { ThemeProvider } from 'styled-components';
import { Theme } from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
