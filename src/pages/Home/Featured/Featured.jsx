import React from 'react';
import SectionTitle from '../../../componants/Sectiontitle';
import featuredImage from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className='pt-8 my-10 bg-fixed bg-opacity-25 bg-slate-800 featured-item text-white'>
            <SectionTitle subHeading={"check it out"} heading={"Featured Items"}></SectionTitle>
            <div className='md:flex justify-center pt-12 pb-20 px-36 items-center'>
                <div>
                    <img src={featuredImage} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>Aug 20, 2029</p>
                    <p className='uppercase'>Where can I get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident explicabo sint libero magni atque tempora earum quasi nemo aperiam enim, quis ducimus optio fugit commodi quisquam veniam? Molestias natus suscipit voluptate consectetur necessitatibus, quod autem officiis exercitationem velit consequatur accusamus esse nostrum iusto ea? Iusto, sint? Accusamus libero totam repellendus?</p>
                    <button className='btn btn-outline border-0 border-b-4'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;