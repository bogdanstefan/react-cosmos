/* eslint-env browser */

import ReactQuerystringRouter from 'react-querystring-router';
import ComponentPlayground from 'react-component-playground';
import getComponentFixtures from './get-component-fixtures';

const getTitleForFixture = (params) => {
  let title = 'React Cosmos';

  // Set document title to the name of the selected fixture
  if (params.component && params.fixture) {
    title = `${params.component}:${params.fixture} – ${title}`;
  }

  return title;
};

module.exports = (components, fixtures) =>
  new ReactQuerystringRouter.Router({
    container: document.body.appendChild(document.createElement('div')),
    defaultProps: {
      components: getComponentFixtures(components, fixtures),
    },
    getComponentClass: () => ComponentPlayground,
    onChange: (params) => {
      document.title = getTitleForFixture(params);
    },
  });
