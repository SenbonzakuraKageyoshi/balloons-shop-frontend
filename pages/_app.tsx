import React from 'react';
import Layout from '@/components/Layout/Layout';
import { Provider } from 'react-redux';
import store from '@/redux/store';
import type { AppProps } from 'next/app';
import { fetchUser } from '@/redux/userSlice/userSlice';
import '@/styles/globals.scss';
import { getToken } from '@/utils/tokenActions';
import { isAuth } from '@/utils/isAuth';

const App = ({ Component, pageProps }: AppProps) => {

  const { user } = store.getState();

  React.useEffect(() => {
    if(!isAuth(user)){
      store.dispatch(fetchUser(getToken()!));
    }
  }, [])


  return(
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default App
