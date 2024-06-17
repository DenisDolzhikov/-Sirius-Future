import { useDocumentTitle } from "usehooks-ts";
import { Preloader } from "../../components/preloader/Preloader"

const HomePage = () => {
  useDocumentTitle('Главная');
  
  return (
    <div>
      <h1>
        <Preloader />
        HomePage
      </h1>  
    </div>
  )
}

export { HomePage }