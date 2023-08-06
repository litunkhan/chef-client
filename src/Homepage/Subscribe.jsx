import image1 from './slide1.jpg'
import image2 from './slide2.jpg'
import image3 from './slide3.jpg'
import image4 from './slide4.jpg'



const Subscribe = () => {
    return (
        <div className='max-w-[1000px] mx-auto mb-28 mt-20 '>
        <h2 className='text-4xl font-bold text-center'>
        Most Popular Recipies
        </h2>
        <p className='text-center'>
        Welcome to our Recipes section, where you can find an incredible selection of our most popular dishes from around the world. From classic comfort foods to exotic cuisines, we ve got something to satisfy every craving.
        </p>
        <div className="mt-6 grid  md:grid-cols-4 gap-5 ">
            <div className='h-[300px]' style={{backgroundImage: `url(${image1})`}}>
            <div className='w-full text-white cursor-pointer h-full opacity-0 bg-black bg-opacity-30  hover:opacity-100 duration-500'>
             <h3 className='font-bold text-3xl'>SALAD</h3>
             <p className='font-bold'>A salad is a dish consisting of mixed ingredients, frequently vegetables. They are typically served chilled or at room temperature, though some can be served warm. Condiments and salad dressings, which exist in a variety of flavors, are often used to enhance a salad.</p>
            </div>
            </div>
            <div style={{backgroundImage: `url(${image2})`}}>
            <div className='w-full text-white cursor-pointer h-full opacity-0 bg-black bg-opacity-30  hover:opacity-100 duration-500'>
            <h3 className='font-bold text-3xl'>PIZZA</h3>
             <p className='font-bold'>Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients such as various types of sausage, anchovies, mushrooms, onions, olives,</p>
            </div>
            </div>
            <div style={{backgroundImage: `url(${image3})`}}>
            <div className='w-full text-white cursor-pointer h-full opacity-0 bg-black bg-opacity-30  hover:opacity-100 duration-500'>
            <h3 className='font-bold text-3xl'>SOUP</h3>
             <p className='font-bold'>Soup is a primarily liquid food, generally served warm or hot (but may be cool or cold), that is made by combining ingredients of meat or vegetables with stock, milk, or water</p>
            </div>
            </div>
            <div style={{backgroundImage: `url(${image4})`}}>
            <div className='w-full text-white cursor-pointer h-full opacity-0 bg-black bg-opacity-30  hover:opacity-100 duration-500'>
         
            <h3 className='font-bold text-3xl'>DESSERT</h3>
             <p className='font-bold'>Dessert is a course that concludes a meal. The course consists of sweet foods, such as candy, and possibly a beverage such as dessert wine and liqueur. In some parts of the world there is no tradition of a dessert course to conclude a meal.</p>
            </div>
            </div>
           
        </div>
        </div>
    );
};

export default Subscribe;