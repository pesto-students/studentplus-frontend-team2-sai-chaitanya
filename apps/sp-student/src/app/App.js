import { BrowserRouter, HashRouter} from 'react-router-dom';

import Routes from '../routes';

const App = () => {
  return (
    <HashRouter>
      <Routes />
    </HashRouter>
  );
};

export default App;
