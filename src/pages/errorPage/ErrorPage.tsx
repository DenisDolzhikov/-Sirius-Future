import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { useDocumentTitle } from "usehooks-ts";

const ErrorPage = () => {
  const error = useRouteError();
  useDocumentTitle('Упс, ошибка');

  if (isRouteErrorResponse(error)) {
    return (
      <section>
        <h1>{error.status}</h1>
        <h2>{error.data.message || 'Something goes wrong!'}'</h2>
        <h3>{error.data.reason}</h3>
      </section>
    )
  }

  throw error;
};

export { ErrorPage };