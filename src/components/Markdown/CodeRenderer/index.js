import React from 'react';
import Lowlight from 'react-lowlight';
import js from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml';
import json from 'highlight.js/lib/languages/json';

Lowlight.registerLanguage('javascript', js);
Lowlight.registerLanguage('html', xml); // no html syntax support but xml is pretty close
Lowlight.registerLanguage('json', json);

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
