import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../../shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertBg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaBg from '../../../assets/menu/pizza-bg.jpg'
import saladBg from '../../../assets/menu/salad-bg.jpg'
import soupBg from '../../../assets/menu/soup-bg.jpg'
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../componants/Sectiontitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soups = menu.filter(item => item.category === 'soup');
    const salads = menu.filter(item => item.category === 'salad');
    const pizzas = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    

    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            <Cover title="Our Menu" img={menuImg}></Cover>
            {/* main cover  */}
            <SectionTitle subHeading={"Don't Miss"} heading={"Today's Offer"}></SectionTitle>
            {/* offered menu items  */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert menu items  */}
            <MenuCategory items={desserts} title={"desserts"} coverImg={dessertBg}></MenuCategory>
            {/* pizza menu items */}
            <MenuCategory items={pizzas} title={"pizzas"} coverImg={pizzaBg}></MenuCategory>
            {/* salad menu  */}
            <MenuCategory items={salads} title={"salads"} coverImg={saladBg}></MenuCategory>
            {/* soup menu  */}
            <MenuCategory items={soups} title={"soups"} coverImg={soupBg}></MenuCategory>

        </div>
    );
};

export default Menu;