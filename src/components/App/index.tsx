import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../../styles/global';
import { defaultTheme } from '../../styles/themes/default';
import { ContactsList } from '../ContactsList';
import { Header } from '../Header';
import { Container } from './styles';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Container>
        <Header />
        <ContactsList />
      </Container>
    </ThemeProvider>
  );
}

export default App;
