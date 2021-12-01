import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { theme } from './theme/theme';
import { ThemeProvider } from '@mui/material';
import reportWebVitals from './reportWebVitals';
import { store } from './app/store';
import { Provider } from 'react-redux';
import ReactLoading from 'react-loading';
import AppWrapper from './components/AppWrapper';

const Loading = () => <ReactLoading type={'balls'} color={'#FFC0CB'} height={'20%'} width={'20%'} />;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<Loading />}>
          <AppWrapper />
        </Suspense>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
