import React, { useState, useCallback } from "react";

import IngredientForm from "./IngredientForm";
import Search from "./Search";
import IngredientList from "./IngredientList";
import ErrorModal from "../UI/ErrorModal";

function Ingredients() {
  const [userIngredients, setUserIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  //Since search calls the API and returns all fruits so we do not need below call
  // useEffect(() => {
  //   fetch("https://react-http-9c6c6-default-rtdb.firebaseio.com/fruits.json")
  //     .then((response) => response.json())
  //     .then((responseData) => {
  //       const loadedIngredients = [];
  //       for (const key in responseData) {
  //         loadedIngredients.push({
  //           id: key,
  //           title: responseData[key].title,
  //           amount: responseData[key].amount,
  //         });
  //       }
  //       setUserIngredients(loadedIngredients);
  //     });
  // }, []);

  const filteredIngredientsHandler = useCallback((filteredIngredients) => {
    setUserIngredients(filteredIngredients);
  }, []);

  const addIngredientHandler = (ingredient) => {
    setIsLoading(true);
    fetch("https://react-http-9c6c6-default-rtdb.firebaseio.com/fruits.json", {
      method: "POST",
      body: JSON.stringify(ingredient),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        setIsLoading(false);
        return response.json();
      })
      .then((responseData) => {
        setUserIngredients((prevIngredients) => [
          ...prevIngredients,
          { id: responseData.name, ...ingredient },
        ]);
      });
  };
  const removeIngredientHandler = (ingredientId) => {
    setIsLoading(true);
    fetch(
      `https://react-http-9c6c6-default-rtdb.firebaseio.com/fruits/${ingredientId}.jon`,
      {
        method: "DELETE",
      }
    ).then((response) => {
      setIsLoading(false);
      setUserIngredients((prev) =>
        prev.filter((ingredient) => ingredient.id !== ingredientId)
      );
    }).catch(error => {
      setError(error.message);
      setIsLoading(false);
    });
  };

  const clearError = () => {
    setError(null);
  }
  return (
    <div className="App">
    {error &&  <ErrorModal onClose={clearError}>{error}</ErrorModal>}
      <IngredientForm
        onAddIngredient={addIngredientHandler}
        loading={isLoading}
      />

      <section>
        <Search onLoadIngredients={filteredIngredientsHandler} />
        <IngredientList
          ingredients={userIngredients}
          onRemoveItem={removeIngredientHandler}
        />
      </section>
    </div>
  );
}

export default Ingredients;
