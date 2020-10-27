/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export const Aside = (props) => (
    <aside className="col-md-2 blog-sidebar">
        <div className="p-3">
            <h4 className="font-italic">Arquivos</h4>
            <ol className="list-unstyled mb-0">
                {props.items.map(item => (
                    <li key={item.key}><a href={item.link}>{item.mes} {item.ano}</a></li>
                ))}
            </ol>
        </div>
    </aside>
);