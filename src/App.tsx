import { defaultCV } from "./data/defaultCV";
import { CVPreview } from "./components/Preview/CVPreview";

import "./styles/cv.css";
import "./styles/global.css";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>ATS CV Builder</h1>

        <div className="app-actions">
          <button onClick={() => window.print()}>
            Export PDF
          </button>
          <button>Export Markdown</button>
        </div>
      </header>

      <main className="preview-container">
        <CVPreview cv={defaultCV} />
      </main>
    </div>
  );
}

export default App;