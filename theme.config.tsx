import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: <span>Hyperspace</span>,
  project: {
    link: 'https://github.com/DaveHyperspace/docs-test',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/DaveHyperspace/docs-test',
  footer: {
    text: 'Footer text here',
  },
};

export default config;
