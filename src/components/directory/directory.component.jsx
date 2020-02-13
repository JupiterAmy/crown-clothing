import React from 'react';
import sectionsArray from './directory.data';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

export default class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: sectionsArray
        };
    };

    render() {
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({title, imageUrl, id, size}) => 
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>)
                }
            </div>
        );
    }
};