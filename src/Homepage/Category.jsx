
import img1 from './1.jpg'
import img2 from './2.jpg'
import img3 from './3.jpg'
import img4 from './4.jpg'
const Category = () => {
    return (
        <div className="my-10 max-w-[1100px] mx-auto">
            <h2 className="text-4xl font-bold text-center my-5">Recipe Categories</h2>
            <p className="text-center">Welcome to our Recipes Category, where you can explore an extensive collection of mouth-watering dishes from around the world. We have organized our recipes into categories to make it easy for you to find the perfect dish for any occasion.</p>
            <div className="grid md:grid-cols-4 lg:grid-cols-5 my-10 gap-8 text-center">
                <div>
                    <img className='rounded-full w-60' src={img1} alt="" />
                    <p className='text-2xl font-bold'>Beef</p>
                </div>
                <div>
                    <img className='rounded-full w-60' src={img2} alt="" />
                    <p className='text-2xl font-bold'>Chicken</p>
                </div>
                <div>
                    <img className='rounded-full w-60' src={img4} alt="" />
                    <p className='text-2xl font-bold'>Appetizers</p>
                </div>
                <div>
                    <img className='rounded-full w-60' src={img3} alt="" />
                    <p className='text-2xl font-bold'>Vegetarian</p>
                </div>
                <div>
                    <img className='rounded-full w-60' src={img4} alt="" />
                    <p className='text-2xl font-bold'>Desserts</p>
                </div>
               
            </div>
        </div>
    );
};

export default Category;