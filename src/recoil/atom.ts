import { atom } from 'recoil';

const pageState = atom({
    key: 'pageState',
    default: 0,
});

export { pageState };
