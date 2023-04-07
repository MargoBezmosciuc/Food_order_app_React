import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    img: "https://cdn.pixabay.com/photo/2023/03/16/13/54/clown-7856744_960_720.jpg",
    name: 'Adult',
    description: 'up 18 years old ',
    price: 21.99,
  },
  {
    id: 'm2',
    img: " https://thumbs.dreamstime.com/z/child-clown-red-nose-multicolored-wig-balls-children-white-background-86481912.jpg",
    name: 'Child 0-4 years old',
    description: 'Between 0-4years old',
    price: 16.5,
  },
  {
    id: 'm3',
    img:"https://cdn.pixabay.com/photo/2017/01/31/23/07/boy-2028007_960_720.png",
    name: 'Child 5-12 years old',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    img: "https://cdn.pixabay.com/photo/2023/03/16/13/55/clown-7856748_960_720.jpg",
    name: 'Teenagers 13-17 years old',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];





const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      img= {meal.img}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;