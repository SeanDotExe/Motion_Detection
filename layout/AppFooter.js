import getConfig from 'next/config';
import React, { useContext } from 'react';
import { Image } from 'primereact/image';
import { LayoutContext } from './context/layoutcontext';

const AppFooter = () => {
    const { layoutConfig } = useContext(LayoutContext);
    const contextPath = getConfig().publicRuntimeConfig.contextPath;
    

    return (
        <div className="layout-footer">
            <img src={`${contextPath}/demo/images/galleria/Frame 1team.png`} alt="Team" width={1100}/>
            {/* <img src={`${contextPath}/layout/images/logo-${layoutConfig.colorScheme === 'light' ? 'dark' : 'white'}.svg`} alt="Logo" height="20" className="mr-2" /> */}
            {/* <span className="font-medium ml-2">Motion Detection</span> */}
        </div>
    );
};

export default AppFooter;
