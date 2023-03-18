import { CookiesProvider } from 'react-cookie'
import { QueryClientProvider } from 'react-query'
import { QueryClient } from 'react-query'
import Router from './shared/Router'

function App() {
  
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <CookiesProvider>
        <Router />
      </CookiesProvider>
    </QueryClientProvider>
  )
}

export default App
