/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react';
import { IntlProvider } from 'react-intl';
import { SolidityCompiler } from './lib/solidity-compiler'; // eslint-disable-line
import zhJson from './lib/locales/zh';
import { CompilerClientApi } from './compiler';

const remix = new CompilerClientApi();

export const App = () => {
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    remix.client.isLoaded = true;
    remix.client.onload(() => {
      setIsLoad(true);
    });
  }, []);
  return isLoad ? (
    <IntlProvider locale="zh" messages={zhJson}>
      <SolidityCompiler api={remix} />
    </IntlProvider>
  ) : null;
};

export default App;
