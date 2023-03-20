import React from 'react';

import LinkButtonList, {
    LinkButtonListProps,
} from '@/src/components/organisms/linkButtonList';

export default function HomeTemplate({ buttonData }: LinkButtonListProps) {
    return <LinkButtonList buttonData={buttonData} />;
}
