import React, {useState, useEffect} from 'react';
import Editor from './components/Editor';

function App() {

  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');
  const [srcDoc, setsrcDoc] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setsrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
    }, 250)
    return () => clearTimeout(timeout);
  }, [html, css, js])

  return (
    <>
      <div className="pane top-pane">
        <Editor language="xml" title="HTML" value={html} onChange={setHtml} />
        <Editor language="css" title="CSS" value={css} onChange={setCss} />
        <Editor language="javascript" title="JS" value={js} onChange={setJs} />
      </div>
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

export default App;
