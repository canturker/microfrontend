import React from 'react';

export type IConfigContext = {
    API_URL?:string,
    PROJECT_LANG?: string,
    FEATURE_LIST?: {[key: string]: Boolean }
};

const ConfigContext = React.createContext<IConfigContext>({});

export const ConfigProvider = ConfigContext.Provider;

export default ConfigContext;