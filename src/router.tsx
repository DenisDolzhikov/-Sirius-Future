import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { lazy } from 'react';

import { Layout } from './components/layout/Layout';
import { LoginPage } from './pages/loginPage/LoginPage';
import { HomePage } from './pages/homePage/HomePage';
import { SchedulePage } from './pages/schedulePage/SchedulePage';
// const SchedulePage = lazy(() => import('./pages/schedulePage/SchedulePage.tsx'));
import { PaymentPage } from './pages/paymentPage/PaymentPage';
import { AdventagesPage } from './pages/adventagesPage/AdventagesPage';
import { SimulatorsPage } from './pages/simulatorsPage/SimulatorsPage';
import { LibraryPage } from './pages/libraryPage/LibraryPage';
import { FeedbackPage } from './pages/feedbackPage/FeedbackPage';
import { SettingsPage } from './pages/settingsPage/SettingsPage';
import { QuestionsPage } from './pages/questionsPage/QuestionsPage';
import { ReferalPage } from './pages/referalPage/ReferalPage';
// import { ErrorPage } from './pages/errorPage/ErrorPage';
import { NotFoundPage } from './pages/notFoundPage/NotFoundPage';

import { RequireAuth } from './hooks/requireAuth';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* <Route index element={IsLoggedIn() ? <HomePage /> : <LoginPage />} /> */}
      {/* <Route index element={<HomePage />} /> */}
      <Route index path="/login" element={<LoginPage />} />
      <Route path="/*" element={<NotFoundPage />} />
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <RequireAuth>
              <HomePage />
            </RequireAuth>
          }
        />
        <Route
          path="schedule"
          element={
            <RequireAuth>
              <SchedulePage />
            </RequireAuth>
          }
        />
        <Route
          path="payment"
          element={
            <RequireAuth>
              <PaymentPage />
            </RequireAuth>
          }
        />
        <Route
          path="adventage"
          element={
            <RequireAuth>
              <AdventagesPage />
            </RequireAuth>
          }
        />
        <Route
          path="simulators"
          element={
            <RequireAuth>
              <SimulatorsPage />
            </RequireAuth>
          }
        />
        <Route 
          path="library" 
          element={
            <RequireAuth>
              <LibraryPage />
            </RequireAuth>
          } 
        />
        <Route 
          path="feedback" 
          element={
            <RequireAuth>
              <FeedbackPage />
            </RequireAuth>
          } 
        />
        <Route 
          path="settings" 
          element={
            <RequireAuth>
              <SettingsPage />
            </RequireAuth>
          } 
        />
        <Route 
          path="questions" 
          element={
            <RequireAuth>
              <QuestionsPage />
            </RequireAuth>
          } 
        />
        <Route 
          path="referal" 
          element={
            <RequireAuth>
              <ReferalPage />
            </RequireAuth>
          } 
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Route>
  )
);

export default router;


// import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

// import { Layout } from './components/layout/Layout';
// import { LoginPage } from './pages/loginPage/LoginPage';
// import { HomePage } from './pages/homePage/HomePage';
// import { SchedulePage } from './pages/schedulePage/SchedulePage';
// import { PaymentPage } from './pages/paymentPage/PaymentPage';
// import { AdventagesPage } from './pages/adventagesPage/AdventagesPage';
// import { SimulatorsPage } from './pages/simulatorsPage/SimulatorsPage';
// import { LibraryPage } from './pages/libraryPage/LibraryPage';
// import { FeedbackPage } from './pages/feedbackPage/FeedbackPage';
// import { SettingsPage } from './pages/settingsPage/SettingsPage';
// import { QuestionsPage } from './pages/questionsPage/QuestionsPage';
// import { ReferalPage } from './pages/referalPage/ReferalPage';
// import { ErrorPage } from './pages/errorPage/ErrorPage';
// import { NotFoundPage } from './pages/notFoundPage/NotFoundPage';

// import { RequireAuth } from './hooks/requireAuth';


// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       {/* <Route index element={IsLoggedIn() ? <HomePage /> : <LoginPage />} /> */}
//       {/* <Route index element={<HomePage />} /> */}
//       <Route index path="/login" element={<LoginPage />} />
//       <Route
//         index
//         element={
//           <RequireAuth>
//             <HomePage />
//           </RequireAuth>
//         }
//       />
//       <Route
//         path="schedule"
//         element={
//           <RequireAuth>
//             <SchedulePage />
//           </RequireAuth>
//         }
//       />
//       <Route
//         path="payment"
//         element={
//           <RequireAuth>
//             <PaymentPage />
//           </RequireAuth>
//         }
//       />
//       <Route
//         path="adventage"
//         element={
//           <RequireAuth>
//             <AdventagesPage />
//           </RequireAuth>
//         }
//       />
//       <Route
//         path="simulators"
//         element={
//           <RequireAuth>
//             <SimulatorsPage />
//           </RequireAuth>
//         }
//       />
//       <Route 
//         path="library" 
//         element={
//           <RequireAuth>
//             <LibraryPage />
//           </RequireAuth>
//         } 
//       />
//       <Route 
//         path="feedback" 
//         element={
//           <RequireAuth>
//             <FeedbackPage />
//           </RequireAuth>
//         } 
//       />
//       <Route 
//         path="settings" 
//         element={
//           <RequireAuth>
//             <SettingsPage />
//           </RequireAuth>
//         } 
//       />
//       <Route 
//         path="questions" 
//         element={
//           <RequireAuth>
//             <QuestionsPage />
//           </RequireAuth>
//         } 
//       />
//       <Route 
//         path="referal" 
//         element={
//           <RequireAuth>
//             <ReferalPage />
//           </RequireAuth>
//         } 
//       />
//       <Route path="*" element={<NotFoundPage />} />
//     </Route>
//   )
// );

// export default router;