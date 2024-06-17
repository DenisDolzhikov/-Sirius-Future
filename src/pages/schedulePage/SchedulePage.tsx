import { Suspense, lazy } from "react";
import Preloader from "../../components/preloader/Preloader";
const MonthView = lazy(() => import('./monthView/MonthView'));

const SchedulePage = () => {

  return (
    <div>
      <Suspense fallback={<Preloader />}>
        <MonthView />
      </Suspense>
    </div>
  )
}

export { SchedulePage }