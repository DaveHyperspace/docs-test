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
  sidebar: { defaultMenuCollapseLevel: 1, toggleButton: true },
};

export default config;
