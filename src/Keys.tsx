import { IItem } from './index';
import { useState } from 'react';

export function Keys(props: { initialData: IItem[]; sorting: 'ASC' | 'DESC' }) {
    const [name, setName] = useState('');
    const [id, setId] = useState(-1);
    if (props.sorting === 'DESC') {
        props.initialData.sort((item1, item2) => item2.id - item1.id);
    } else {
        props.initialData.sort((item1, item2) => item1.id - item2.id);
    }
    return (
        <div>
            {props.initialData.map((item: IItem) => {
                if (item.id !== id)
                    return (
                        <p
                            key={item.id}
                            onClick={() => {
                                setId(item.id);
                            }}
                        >
                            {item.name}
                        </p>
                    );
                else
                    return (
                        <input
                            defaultValue={item.name}
                            key={item.id}
                            onChange={(change) => {
                                setName(change.currentTarget.value);
                            }}
                            onKeyDown={(keyName) => {
                                if (keyName.key === 'Enter') {
                                    item.name = name;
                                    setId(-1);
                                }
                                if (keyName.key === 'Escape') setId(-1);
                            }}
                        ></input>
                    );
            })}
        </div>
    );
}
