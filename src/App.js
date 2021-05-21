import HomePage from './containers/HomePage';

import { PokemonProvider } from './context/pokemonContext';

import GlobalStyles from './theme/globalStyles';
import { ThemeProvider } from 'styled-components';
import { Theme } from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <PokemonProvider>
        <GlobalStyles />
        <HomePage />
      </PokemonProvider>
    </ThemeProvider>
  );
}

export default App;
