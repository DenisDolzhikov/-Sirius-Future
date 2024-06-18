// import { Suspense, lazy } from "react";
// const MonthView = lazy(() => import('./monthView/MonthView'));
import { useNavigation } from "react-router-dom";
import { MonthView } from "./monthView/MonthView";
import { Preloader } from "../../components/preloader/Preloader";

const SchedulePage = (): JSX.Element => {
  const navigation = useNavigation();
  const pageLoading = navigation.state === 'loading';

  console.log(pageLoading);
  

  return (
    <div>
      {pageLoading ? (
        <Preloader />
      ) : (
        <MonthView />
      )}
    </div>
  )
}

// const SchedulePage = () => {

//   return (
//     <div>
//       <Suspense fallback={<Preloader />}>
//         <MonthView />
//       </Suspense>
//     </div>
//   )
// }

export { SchedulePage }