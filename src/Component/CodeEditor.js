import React, { useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css'; 
import './CodeEditor.css';

const CodeEditor = () => {
  const [code, setCode] = useState('');

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  return (
    <div className="code-editor">
      <div className="code-input">
        <textarea
          value={code}
          onChange={handleCodeChange}
          placeholder="Enter your code here..."
        />
      </div>
      <div className="code-output">
        <pre>
          <code
            dangerouslySetInnerHTML={{
              __html: Prism.highlight(code, Prism.languages.javascript, 'javascript'),
            }}
          />
        </pre>
      </div>
    </div>
  );
};

export default CodeEditor;
