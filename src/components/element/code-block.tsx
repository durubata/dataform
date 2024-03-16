import React from "react";
import { Highlight, themes } from "prism-react-renderer"

export const CodeBlock = (props: any) => {
  const { onFocus, type, onChange, value, onBlur, placeholder, className, keyPath } = props;

  const _className = className + ` `;
  const language = 'javascript'
  const theme = 'dracula'

  return (
    <Highlight code={value} language={language} theme={themes[theme]} >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre style={style} id={keyPath} className={_className}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              <span className='mx-1 w-10 inline-block text-right'>{i + 1}</span>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
