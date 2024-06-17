import { useDocumentTitle } from "usehooks-ts";

const NotFoundPage = () => {
  useDocumentTitle('Страница не найдена :(');

  return (
    <div>
      <h1>
        Page not found 404
      </h1>
    </div>
  )
}

export { NotFoundPage };