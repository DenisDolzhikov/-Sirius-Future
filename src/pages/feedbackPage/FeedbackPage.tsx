import { useDocumentTitle } from "usehooks-ts";

const FeedbackPage = () => {
  useDocumentTitle('Проверка связи');
  return (
    <div>
      <h1>
        FeedbackPage
      </h1>
    </div>
  )
}

export { FeedbackPage }