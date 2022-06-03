import PdfPreview from "./components/pdf"
import pdf from "./Javascript.pdf"
import './App.css'

function App() {

  return (
    <div className="App">
      <PdfPreview prfUrl={pdf} />
    </div>
  )
}

export default App
