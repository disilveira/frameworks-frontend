/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export const SectionMenu = (props) => (
    <>
        <hr />
        <div className="nav-scroller py-1 mb-2">
            <nav className="nav d-flex justify-content-between">
                {props.items.map(item => (
                    <a key={item.key} className="p-2 text-muted" href={item.link}>{item.title}</a>
                ))}
            </nav>
        </div>
        <hr />
    </>
);