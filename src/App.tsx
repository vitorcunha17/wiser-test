import React, { Suspense } from 'react';
import Routes from './routes';
import { Provider } from 'react-redux';
import { store, history } from 'store';
import Loading from './pages/Loading';

function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<Loading />}>
        <Routes history={history} />
      </Suspense>
    </Provider>
  );
}

export default App;
