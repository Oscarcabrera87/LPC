import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import { Provider } from 'react-redux'
import { ConfigureStore } from './redux/configureStore'

// pages
import Home from './pages/Home'
import About from './pages/About'
import Main from './pages/database/Main'
import Faq from './pages/help/Faq'
import Contact, { contactAction } from './pages/help/Contact'
import CardDetail, { cardDetailsLoader } from './pages/database/CardDetail'
import NotFound from './pages/NotFound'
import CardsError from "./pages/database/CardsError";

// layouts
import RootLayout from './layouts/RootLayout'
import HelpLayout from './layouts/HelpLayout'
import DatabaseLayout from './layouts/DatabaseLayout'

const store = ConfigureStore()

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />} >
      <Route index element={<Home />} />
      <Route path='database' element={<DatabaseLayout />} errorElement={<CardsError />}>
        <Route
          index
          element={<Main />}
        />
        <Route
          path=':id'
          element={<CardDetail />}
          loader={cardDetailsLoader}
        />
      </Route>
      <Route path='about' element={<About />} />
      <Route path='help' element={<HelpLayout />}>
        <Route path='faq' element={<Faq />} />
        <Route path="contact" element={<Contact />} action={contactAction} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Route>
  )
)

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}
export default App

