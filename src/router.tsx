import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import { Layout } from './components/layout/Layout';
import { LoginPage } from './pages/loginPage/LoginPage';
import { HomePage } from './pages/homePage/HomePage';
import { SchedulePage } from './pages/schedulePage/SchedulePage';
import { PaymentPage } from './pages/paymentPage/PaymentPage';
import { AdventagesPage } from './pages/adventagesPage/AdventagesPage';
import { SimulatorsPage } from './pages/simulatorsPage/SimulatorsPage';
import { LibraryPage } from './pages/libraryPage/LibraryPage';
import { FeedbackPage } from './pages/feedbackPage/FeedbackPage';
import { SettingsPage } from './pages/settingsPage/SettingsPage';
import { QuestionsPage } from './pages/questionsPage/QuestionsPage';
import { ErrorPage } from './pages/errorPage/ErrorPage';
import { NotFoundPage } from './pages/notFoundPage/NotFoundPage';

import { useAppSelector } from './hooks/useAppSelector';


const IsLoggedIn = () => useAppSelector(state => state.auth.isLoggedIn);

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />} errorElement={<ErrorPage />}>
    {/* <Route index element={IsLoggedIn() ? <HomePage /> : <LoginPage />} /> */}
    <Route index element={<HomePage />} />
    <Route path='schedule' element={<SchedulePage />} />
    <Route path='payment' element={<PaymentPage />} />
    <Route path='adventage' element={<AdventagesPage />} />
    <Route path='simulators' element={<SimulatorsPage />} />
    <Route path='library' element={<LibraryPage />} />
    <Route path='feedback' element={<FeedbackPage />} />
    <Route path='settings' element={<SettingsPage />} />
    <Route path='questions' element={<QuestionsPage />} />
    <Route path='*' element={<NotFoundPage />} />
  </Route>
));

export default router;