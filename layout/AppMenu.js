import getConfig from 'next/config';
import React, { useContext } from 'react';
import AppMenuitem from './AppMenuitem';
import { LayoutContext } from './context/layoutcontext';
import { MenuProvider } from './context/menucontext';
import Link from 'next/link';

const AppMenu = () => {
    const { layoutConfig } = useContext(LayoutContext);
    const contextPath = getConfig().publicRuntimeConfig.contextPath;
    const model = [
        {
            label: 'Home',
            items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/' },
            { label: 'Edit Data', icon: 'pi pi-fw pi-pencil', to: '/pages/Editdata'}
        ]
           
        },

        {
            label: 'Settings',
            items: [
                { label: 'Account', icon: 'pi pi-fw pi-user', to: '/pages/changepass'},
                {
                    label: 'View Source',
                    icon: 'pi pi-fw pi-search',
                    url: 'https://github.com/SeanDotExe/Motion_Detection.git',
                    target: '_blank'
                },
                { label: 'Logout', icon: 'pi pi-fw pi-sign-out', to: '/pages/logout'},
            ]
        }
    ];

    return (
        <MenuProvider>
            <ul className="layout-menu">
                {model.map((item, i) => {
                    return !item.seperator ? <AppMenuitem item={item} root={true} index={i} key={item.label} /> : <li className="menu-separator"></li>;
                })}

            </ul>
        </MenuProvider>
    );
};

export default AppMenu;
