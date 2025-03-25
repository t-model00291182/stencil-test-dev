import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'mct-components',
  globalStyle: 'src/styles/global.scss',
  sourceMap: true,
  devServer: {
    reloadStrategy: 'pageReload',
    port: 4444,
  },
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [
          { src: 'pages' },
      ]
  },
  ],
  plugins: [
    sass( {
        includePaths: [ 'node_modules', 'styles' ],
    } )
],
  testing: {
    browserHeadless: "shell",
  },
};
