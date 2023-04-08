import { CookiesProvider } from 'react-cookie'
import { QueryClientProvider } from 'react-query'
import { QueryClient } from 'react-query'
import Router from './shared/Router'
import { Provider } from 'react-redux'
import store from './redux/config/configStore'
import ReactGA from 'react-ga'
import { createBrowserHistory } from 'history'


function App() {
  const queryClient = new QueryClient()

  const gaTrackingId: any = process.env.REACT_APP_GA_TRACKING_ID;
  ReactGA.initialize(gaTrackingId, {debug: false})
  ReactGA.pageview(window.location.pathname)

  const history = createBrowserHistory();
  history.listen((response) => {
    ReactGA.set({ page: response.location.pathname});
    ReactGA.pageview(response.location.pathname)
  })

  return (
    <QueryClientProvider client={queryClient}>
      <CookiesProvider>
        <Provider store={store}>
          <Router />
        </Provider>
      </CookiesProvider>
    </QueryClientProvider>
  )
}

export default App
