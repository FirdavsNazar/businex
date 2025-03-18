import React from 'react';
import {Link} from 'react-router-dom'

function BlogItem(props) {
    const blogURL = `/blog/${props.title.split(' ').join('-').toLocaleLowerCase()}?id=${props.id}`;
    return (
        <div className={props.cols ? props.cols : 'col-md-6 col-lg-4'}>
            <div className="blog-item">
                {
                    props.thumb ? (
                        <figure className="blog-thumb">

                        {/* new one, catalogue added
{props.id >= 8 && props.id <= 17 && props.catalogueLink ? (
  <a href={props.catalogueLink} target="_blank" rel="noopener noreferrer">
    <img src={require('../../assets/img/' + props.thumb)} alt={props.title} />
  </a>
) : (
  <Link to={`${process.env.PUBLIC_URL + blogURL}`}>
    <img src={require('../../assets/img/' + props.thumb)} alt={props.title} />
  </Link>
)} */}
                                {/* old one */}
                            <Link to={`${process.env.PUBLIC_URL + blogURL}`}>
                                <img src={require('../../assets/img/' + props.thumb)} alt={props.title} />
                            </Link>
                        </figure>
                    ) : null
                }
                <div className="blog-content">
                    <h2 className="h5"><Link to={`${process.env.PUBLIC_URL + blogURL}`}>{props.title}</Link></h2>
                    <p>{props.excerpt}</p>

                    <div className="blog-meta">
                        <Link to={`${process.env.PUBLIC_URL + blogURL}`}> {props.postBy}</Link>
                        <Link to={`${process.env.PUBLIC_URL + blogURL}`}>{props.date}</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogItem;