type EnvironmentTypes = 'production' | 'development';
type ApiAddressTypes = {
    development: string | undefined;
    production: string | undefined;
};

export const env = <EnvironmentTypes>(
    (process.env.NEXT_PUBLIC_NEXT_ENV
        ? process.env.NEXT_PUBLIC_NEXT_ENV
        : 'development')
);
export const apiAddress: ApiAddressTypes = {
    development: process.env.NEXT_PUBLIC_API_DEVELOPMENT,
    production: process.env.NEXT_PUBLIC_API_PRODUCTION,
};
