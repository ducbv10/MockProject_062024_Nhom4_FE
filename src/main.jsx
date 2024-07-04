import * as ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HOME_PATH, INTRO_PATH, PROFILE_PATH, SIGNIN_PATH, SIGNUP_PATH } from './constants/Routes';
import Home from './pages/Client/Home';
import './styles/main.css';
import { Header } from 'antd/es/layout/layout';

const router = createBrowserRouter([
  {
    path: INTRO_PATH,
    element: <Home />,
    errorElement: "<ErrorPage />",
  },
  {
    path: '/',
    element: "<SignIn_SignUpLayout />",
    children: [
      {
        path: SIGNIN_PATH,
        element: "<SignIn />",
      },
      {
        path: SIGNUP_PATH,
        element: "<SignUp />",
      },
    ],
  },
  {
    path: '/',
    element: (
      <Header />
    ),
    children: [
      {
        path: HOME_PATH,
        element: <Home />,
      },
      {
        path: `${PROFILE_PATH}/:userId`,
        element: (
            "<Profile />"
        ),
        children: [
          {
            path: '',
            element: "<BottomProfile />",
          },
        ],
      },
    ]
  }
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>,
)
