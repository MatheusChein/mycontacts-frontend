import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { RoutesComponent } from '../../Routes';
import { Header } from '../Header';

import GlobalStyles from '../../styles/global';
import { defaultTheme } from '../../styles/themes/default';
import { Container } from './styles';
import { ToastContainer } from '../Toast/ToastContainer';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <ToastContainer />

        <Container>
          <Header />
          <RoutesComponent />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
