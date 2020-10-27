/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export const BlogPost = (props) => (
    <div className="col-md-10 blog-main">
        {props.items.map(item => (
            <div className="card flex-md-row mb-4 shadow-sm h-md-250">
                <img className="card-img-right flex-auto d-none d-lg-block" data-src="holder.js/200x250?theme=thumb" alt="Card image cap" />
                <div className="card-body d-flex flex-column align-items-start">
                    <strong className="d-inline-block mb-2 text-primary">{item.section}</strong>
                    <h3 className="mb-0">
                        <a className="text-dark" href="#">{item.title}</a>
                    </h3>
                    <div className="mb-1 text-muted">{item.data}</div>
                    <p className="card-text mb-auto">{item.content}</p>
                    <a href="#">Continue reading</a>
                </div>
            </div>
        ))}
    </div>
);