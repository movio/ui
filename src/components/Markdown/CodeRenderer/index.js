import React from 'react';
import Lowlight from 'react-lowlight';
import js from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml';
import json from 'highlight.js/lib/languages/json';
import go from 'highlight.js/lib/languages/go';
import cs from 'highlight.js/lib/languages/cs';
import cs from 'highlight.js/lib/languages/php';
import java from 'highlight.js/lib/languages/java';

Lowlight.registerLanguage('javascript', js);
Lowlight.registerLanguage('html', xml); // no html syntax support but xml is pretty close
Lowlight.registerLanguage('json', json);
Lowlight.registerLanguage('go', go);
Lowlight.registerLanguage('c#', cs);
Lowlight.registerLanguage('php', php);
Lowlight.registerLanguage('java', java);

const CodeBlock = React.createClass({
  displayName: 'CodeBlock',
  propTypes: {
    literal: React.PropTypes.string,
    language: React.PropTypes.string,
    inline: React.PropTypes.bool,
  },

  render: function() {
    return (
      <Lowlight
        language={this.props.language || 'javascript'}
        value={this.props.literal}
        inline={this.props.inline}
      />
    );
  },
});

export default CodeBlock;
