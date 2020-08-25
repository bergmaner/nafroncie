import React from "react"
import Highlight, {defaultProps} from "prism-react-renderer"
import theme from "prism-react-renderer/themes/vsDark"
import styled from "styled-components"

const CodeContainer = styled.div`
background: rgb(30, 30, 30);
position: relative;
padding: 1rem .75rem;
border-radius: .25rem;
:not(:last-child) {
    margin-top: 2rem;
}
pre[class*=language-]:before {
    background: #000;
    border-radius: 0 0 .25rem .25rem;
    color: #fff;
    font-size: 16px;
    letter-spacing: .025rem;
    padding: .5rem 1rem;
    position: absolute;
    right: 1rem;
    text-align: right;
    text-transform: uppercase;
    top: 0;
}
pre[class~=language-css]:before {
    content: "css";
    background: #264de4;
    color: #fff;
}
pre[class~=language-html]:before {
    content: "html";
    background: #e34c26;
    color: #fff;
}
pre[class~=language-js]:before {
    content: "js";
    background: #F0DB4F;
    color: #323330;
}
`

export const Code = ({codeString, language, ...props}) => {
    return(
        <Highlight
        {...defaultProps}
        code={codeString}
        language={language}
        theme={theme}
        >
           {({ className, style, tokens, getLineProps, getTokenProps }) => (
               <CodeContainer>
      <pre className={className} style={style}>
        {tokens.map((line, i) => (
          <div {...getLineProps({ line, key: i })}>
            {line.map((token, key) => (
              <span {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </pre>
      </CodeContainer>
    )}
        </Highlight>
    )
}
export default Code