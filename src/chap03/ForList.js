import React from 'react';

export default function ForList({src}) {
    return (
        <dl>
            {
                src.map(elem => (
                    <>
                        <dt>
                            <a href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}`}>
                                {elem.title}({elem.price}円)
                            </a>
                        </dt>
                        <dd>{elem.summary}</dd>
                    </>
                ))
            }
        </dl>
    )
}