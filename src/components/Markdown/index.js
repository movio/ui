import React, { PropTypes } from 'react';
import ReactMarkdown from 'react-markdown';
import classnames from 'classnames';
import CodeRenderer from './CodeRenderer';

import styles from 'components/Markdown/markdown.css';

const Markdown = ({ source, className, overrideMarkdownStyle }) =>
  <div className={classnames(className, styles.container)}>
    <ReactMarkdown
      source={source}
      className={overrideMarkdownStyle ? '' : styles.markdown}
      escapeHtml
      renderers={{
        CodeBlock: CodeRenderer,
        Code: CodeRenderer,
      }}
    />
  </div>;

Markdown.propTypes = {
  source: PropTypes.string.isRequired,
  className: PropTypes.string,
  overrideMarkdownStyle: PropTypes.bool,
};

export default Markdown;

export { styles };
