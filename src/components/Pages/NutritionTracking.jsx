// Nutrition tracking
// Nutrition tracking
import React, { useState, useEffect } from 'react';


const NutritionTracking = () => {
  const [foodData, setFoodData] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [caloriesGained, setCaloriesGained] = useState(0);
  const [caloriesReduced, setCaloriesReduced] = useState(0);
  const [currentWeight, setCurrentWeight] = useState(0);
  const [targetWeight, setTargetWeight] = useState(0);
  const [dailyCaloriesGoal, setDailyCaloriesGoal] = useState(0);
  const [weeklyWeights, setWeeklyWeights] = useState([]);
  const [fetchingData, setFetchingData] = useState(false); // State to control data fetching
  const apiKey = '0fa3f58ee10dbd236b3ba8b16c83f7c8';

  useEffect(() => {
    const fetchFoodData = async () => {
      try {
        const response = await fetch(`https://api.spoonacular.com/food/products/search?query=${searchQuery}&apiKey=${apiKey}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setFoodData(data);
        if (data && data.products && data.products.length > 0) {
          const calories = data.products[0].nutrition ? data.products[0].nutrition.calories : 0;
          if (calories > dailyCaloriesGoal) {
            setCaloriesGained(caloriesGained + calories - dailyCaloriesGoal);
          } else {
            setCaloriesReduced(caloriesReduced + dailyCaloriesGoal - calories);
          }
        }
      } catch (error) {
        console.error('Error fetching food data:', error);
      }
    };

    if (fetchingData) {
      fetchFoodData();
    }

    // Clean-up function to stop fetching when component unmounts
    return () => {
      setFetchingData(false);
    };
  }, [fetchingData, searchQuery, apiKey, dailyCaloriesGoal]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFetchingData(true);
  };

  const handleSaveGoals = (newGoals) => {
    setDailyCaloriesGoal(parseInt(newGoals.dailyCalories));
    setTargetWeight(parseInt(newGoals.targetWeight));
  };

  const handleWeightChange = (e) => {
    setCurrentWeight(parseInt(e.target.value));
  };

  const handleWeeklyWeightSubmit = (e) => {
    e.preventDefault();
    setWeeklyWeights([...weeklyWeights, currentWeight]);
    setCurrentWeight(0); // Reset current weight after submission
  };

  const handleFoodEatenSubmit = (food) => {
    setSearchQuery(food);
  };

  return (
    <div>
      <h1>Fitness Tracking App</h1>
      <div>
        <h2>Nutrition Tracker</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter food eaten"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
        {foodData && foodData.products ? (
          <div>
            <h3>Search Results</h3>
            <ul>
              {foodData.products.map((product) => {
                const calories = product.nutrition ? product.nutrition.calories : 0;
                return (
                  <li key={product.id}>
                    <strong>{product.title}</strong>: {calories} calories
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          <p>No data found.</p>
        )}
      </div>
      <div>
        <h2>Goal Setting</h2>
        <GoalSetting onSave={handleSaveGoals} />
      </div>
      {dailyCaloriesGoal > 0 && (
        <div>
          <h2>Calories Tracking</h2>
          <p>Calories Gained: {caloriesGained}</p>
          <p>Calories Reduced: {caloriesReduced}</p>
        </div>
      )}
      {targetWeight > 0 && (
        <div>
          <h2>Weight Tracking</h2>
          <form onSubmit={handleWeeklyWeightSubmit}>
            <label htmlFor="currentWeight">Current Weight (in kg):</label>
            <input
              type="number"
              id="currentWeight"
              value={currentWeight}
              onChange={handleWeightChange}
            />
            <button type="submit">Submit Weekly Weight</button>
          </form>
          <p>Target Weight: {targetWeight} kg</p>
          <p>Weight Difference: {targetWeight - currentWeight} kg</p>
          <h3>Weekly Weight Trend</h3>
          <ul>
            {weeklyWeights.map((weight, index) => (
              <li key={index}>Week {index + 1}: {weight} kg</li>
            ))}
          </ul>
        </div>
      )}
      <div>
        <h2>Food Eaten Submission</h2>
        <FoodEatenForm onSubmit={handleFoodEatenSubmit} />
      </div>
    </div>
  );
};

const GoalSetting = ({ onSave }) => {
  const [targetWeight, setTargetWeight] = useState('');
  const [dailyCalories, setDailyCalories] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ targetWeight, dailyCalories });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="targetWeight">Target Weight (in kg):</label>
          <input
            type="number"
            id="targetWeight"
            value={targetWeight}
            onChange={(e) => setTargetWeight(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="dailyCalories">Daily Calories Goal:</label>
          <input
            type="number"
            id="dailyCalories"
            value={dailyCalories}
            onChange={(e) => setDailyCalories(e.target.value)}
          />
        </div>
        <button type="submit">Save Goals</button>
      </form>
    </div>
  );
};

const FoodEatenForm = ({ onSubmit }) => {
  const [food, setFood] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(food);
    setFood('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter food eaten"
        value={food}
        onChange={(e) => setFood(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default NutritionTracking;
