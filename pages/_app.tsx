import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import NavBar from '@/src/components/organisms/navBar';
import Layout from '@/src/theme/layout';

import '@/styles/global.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
    if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
        (async () => {
            await import('@/src/mocks');
        })();
    }

    return (
        <RecoilRoot>
            <Layout>
                <NavBar />
                <Component {...pageProps} />
            </Layout>
        </RecoilRoot>
    );
}
