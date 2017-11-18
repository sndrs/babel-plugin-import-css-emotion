const { transform } = require('babel-core');

const src = `
    import _ from 'lodash';
    import './index.test.css';

    const x = red;
`;

const { code } = transform(src, { plugins: './index.js' });

test('does what you would expect it to', () => {
    expect(code).toMatchSnapshot();
});
