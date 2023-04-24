import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

const pageState = atom({
    key: 'pageState',
    default: 0,
    effects_UNSTABLE: [persistAtom],
});

export { pageState };
