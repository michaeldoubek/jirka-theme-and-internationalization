import './App.css';
import { FormattedMessage } from 'react-intl';
import SwitchLanguageButton from './components/language/SwitchLanguageButton';
import ThemeSwitcher from './components/theme/ThemeSwitcher';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <FormattedMessage id="paragraph" />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FormattedMessage id="link" />
        </a>

        <SwitchLanguageButton />
        <ThemeSwitcher />
      </header>
    </div>
  );
}

export default App;
