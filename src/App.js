import React from 'react';
import StdButton from './components/StdButton';

function App() {
  const [loading, setLoading] = React.useState(true);

  return (
  <div>
    <StdButton loading={loading} text="Jestem przyciskiem" radius background="#28C82D" />
  </div>
  );
}

export default App;
