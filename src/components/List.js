import React from 'react';

export default function List(props) {
    return (
        <ul>
            {props.items.map((item) => (
                <li key={item.id} style={{ margin: '1rem' }}>
                    <span
                        style={{
                            marginRight: '1rem',
                            textDecoration: item.complete
                                ? 'line-through'
                                : 'none',
                        }}>
                        {item.name}
                    </span>
                    <button
                        onClick={() => props.remove(item)}
                        style={{ cursor: 'pointer', marginRight: '10px' }}>
                        X
                    </button>
                    {props.toggle && (
                        <button
                            onClick={() => props.toggle(item)}
                            style={{ cursor: 'pointer' }}>
                            {item.complete ? 'undone' : 'done'}
                        </button>
                    )}
                </li>
            ))}
        </ul>
    );
}
