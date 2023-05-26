import React from 'react';
import SectionTitle from '../../../componants/Sectiontitle';
import MenuItem from '../../../shared/MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item=> item.category === 'popular');
    return (
        <div className='mb-12'>
            <SectionTitle
                heading={"From Our Menu"}
                subHeading={"Popular Items"}
            ></SectionTitle>
            
        </div>
    );
};

export default PopularMenu;