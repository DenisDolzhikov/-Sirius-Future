import { Suspense, useEffect } from "react";
import { MonthComponentContainer, MonthView } from "./monthView/MonthView";
import { Preloader } from "../../components/preloader/Preloader";

const SchedulePage = () => {

  return (
    <div>
      <MonthComponentContainer />
    </div>

    // <div>
    // <Suspense fallback={<Preloader />}>
    //   <Await resolve={<MonthView />} >
    //     <MonthView />
    //   </Await>
    // </Suspense>
    // <MonthView />
    // </div>
  )
}

export { SchedulePage }