import getConfig from 'next/config';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import AppConfig from '../../../layout/AppConfig';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { LayoutContext } from '../../../layout/context/layoutcontext';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';

const LoginPage = () => {
    const [password, setPassword] = useState('');
    const [checked, setChecked] = useState(false);
    const { layoutConfig } = useContext(LayoutContext);
    const contextPath = getConfig().publicRuntimeConfig.contextPath;
    const router = useRouter();
    const containerClassName = classNames('surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden', {'p-input-filled': layoutConfig.inputStyle === 'filled'});

    return (
        <div className={containerClassName}>
            <div className="flex flex-column align-items-center justify-content-center">
                <img src={`${contextPath}/layout/images/logo-${layoutConfig.colorScheme === 'light' ? 'dark' : 'white'}.svg`} alt="Sakai logo" className="mb-5 w-6rem flex-shrink-0"/>
                <div style={{ borderRadius: '56px', padding: '0.3rem', background: 'linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)' }}>
                    <div className="w-full surface-card py-8 px-5 sm:px-8" style={{ borderRadius: '53px' }}>
                        <div className="text-center mb-5">
                            {/* <img src={`${contextPath}/demo/images/login/avatar.png`} alt="Image" height="50" className="mb-3" /> */}
                            <div className="text-900 text-3xl font-medium mb-3">Find your account</div>
                            <span className="text-600 font-medium">OTP code has been sent to your email. Please enter the OTP code</span>
                        </div>

                        <div>
                            <label htmlFor="email1" className="block text-900 text-xl font-medium mb-2">
                                OTP Code
                            </label>
                            <InputText inputid="email1" type="text" placeholder="Enter OTP code" className="w-full md:w-30rem mb-5" style={{ padding: '1rem' }} />

                            {/* <label htmlFor="password1" className="block text-900 font-medium text-xl mb-2">
                                Password
                            </label>
                            <Password inputid="password1" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" toggleMask className="w-full mb-5" inputClassName='w-full p-3 md:w-30rem'></Password> */}

                            <div className="flex align-items-center text-center justify-content-center mb-5 gap-5">
                                {/* <div className="flex align-items-center">
                                    <a className="font-medium no-underline ml-2 text-right cursor-pointer" onClick={() => router.push('/')} style={{ color: 'var(--secondary-color)' }}>
                                        Go Back
                                    </a>
                                </div>
                                <a className="font-medium no-underline ml-2 text-right cursor-pointer" onClick={() => router.push('/auth/forgot')} style={{ color: 'var(--primary-color)' }}>
                                    Forgot password?
                                </a> */}
                                <Button label="Cancel" className="w-full p-3 text-xl p-button-secondary" onClick={() => router.push('/auth/newpass')}></Button>
                                <Button label="Verify" className="w-full p-3 text-xl" onClick={() => router.push('/auth/newpass')}></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

LoginPage.getLayout = function getLayout(page) {
    return (
        <React.Fragment>
            {page}
            <AppConfig simple />
        </React.Fragment>
    );
};
export default LoginPage;
