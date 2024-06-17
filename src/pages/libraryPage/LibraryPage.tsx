import { useDocumentTitle } from "usehooks-ts";

const LibraryPage = () => {
  useDocumentTitle('Библиотека');
  
  return (
    <div>
      <h1>
        LibraryPage
      </h1>
    </div>
  )
}

export { LibraryPage }