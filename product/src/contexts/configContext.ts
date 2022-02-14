import React from 'react';

const ConfigContext = React.createContext<{FEATURE_LIST?: {[key: string]: Boolean }}>({});

export const ConfigProvider = ConfigContext.Provider;

export default ConfigContext;