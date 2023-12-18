import {FC} from 'react';

import {typeOfData} from '../../utils/typeOfData';
import {ItemValue} from './itemValue';

export type SectionProps = {
    section: Record<string, unknown>
    schema: Record<string, unknown>
}

export const Section: FC<SectionProps> = ({section, schema}) => {
    const dataType = typeOfData(section.data);

    return <div className="mt-4">
        {!!section.title && <h3 className="font-bold">{section.title as string}</h3>}
        {
            (dataType === 'string' || dataType === 'number') 
                ? <div>{section.data as string}</div>
                : <ItemValue value={section.data} type={schema} />
        }
    </div>
}