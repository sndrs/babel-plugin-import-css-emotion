const { readFileSync } = require('fs');

const { transform } = require('babel-core');

const {
    convertCssForEmotion,
} = require('css-in-js-generator/lib/convertCssForEmotion');

module.exports = function() {
    return {
        visitor: {
            ImportDeclaration: {
                exit: function(path) {
                    const importPath = path.node.source.value;

                    if (importPath.endsWith('.css')) {
                        const cssSrc = readFileSync(importPath, 'utf8');
                        const emotionSrc = convertCssForEmotion(cssSrc).replace(
                            /export/g,
                            ''
                        );
                        path.replaceWith(transform(emotionSrc).ast);
                    }
                },
            },
        },
    };
};
