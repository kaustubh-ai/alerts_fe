import {AuthLayout} from '@/pages/AuthLayout.jsx'
import {Home} from '@/pages/Home.jsx'
import {SignIn} from '@/pages/SignIn.jsx'
import {SignUp} from '@/pages/SignUp.jsx'
import {ErrorComponent} from '@/ui/ErrorComponent.jsx'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {createBrowserRouter, Navigate, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
	{
		element: <AuthLayout/>, errorElement: <ErrorComponent/>,
		children: [
			{path: 'signin', element: <SignIn/>, errorElement: <ErrorComponent/>},
			{path: 'signup', element: <SignUp/>, errorElement: <ErrorComponent/>},
		]
	},
	
	{path: '/dashboard', element: <Home/>, errorElement: <ErrorComponent/>},
	{path: '*', element: <Navigate to='/signin'/>, errorElement: <ErrorComponent/>}
])

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 600 * 1000,
			retry: false
		}
	}
})

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router}/>
		</QueryClientProvider>
	)
}

export default App
