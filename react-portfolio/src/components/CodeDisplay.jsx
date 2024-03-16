import React from 'react';
import styles from './CodeContainer.module.css';

const CodeDisplay = () => {
  return (
    <div className={styles.codeContainer}>
      <pre className={styles.pre}>
        <code className={styles.code}>
          import {{ getImageUrl }} from "../../utils";
          import styles from "./Hero.module.css";
          import {{ useTypewriter, Cursor }} from 'react-simple-typewriter';
          
          export const Hero = () => {{
            const [ text ] = useTypewriter({{
              words: ['Michael', 'a Developer', 'a Data Scientist'],
              loop: {{}},
            }});
          
            return (
              &lt;section&gt;
                &lt;div className={{styles.container}}&gt;
                  ...
                  Your code snippet continues here
                  ...
                &lt;/div&gt;
              &lt;/section&gt;
            );
          }};
        </code>
      </pre>
    </div>
  );
};

export default CodeDisplay;
