import { CookiesProvider } from 'react-cookie'
import { QueryClientProvider } from 'react-query'
import { QueryClient } from 'react-query'
import Router from './shared/Router'
import { Provider } from 'react-redux'
import store from './redux/config/configStore'

function App() {
  const queryClient = new QueryClient()

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
