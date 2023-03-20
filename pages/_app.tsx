import type { AppProps } from 'next/app';
import NavBar from '@/src/components/organisms/navBar';
import Layout from '@/src/theme/layout';

import '@/styles/global.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <NavBar />
            <Component {...pageProps} />
        </Layout>
    );
}
