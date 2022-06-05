import React from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  // to get id from the link parameters
  const { id } = useParams();
  const [loading, setLoading] = React.useState(true);
  const [cocktail, setCocktail] = React.useState(null);

  const fetchDrink = React.useCallback(async () => {

    setLoading(true);

    try {
      const response = await fetch(`${url}${id}`);
      const data = await response.json();
      if (data.drinks) {
        setCocktail(data.drinks[0])
      }
      else {
        setCocktail(null);
      }
      setLoading(false);

    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [id]);

  React.useEffect(() => { fetchDrink() }, [id, fetchDrink]);

  if (loading) {
    return <Loading></Loading>
  }

  if (!cocktail) {
    return <h2 className="section-title">Cannot find the cocktail details</h2>;
  }

  const ingredients = [
    cocktail.strIngredient1,
    cocktail.strIngredient2,
    cocktail.strIngredient3,
    cocktail.strIngredient4,
    cocktail.strIngredient5,
    cocktail.strIngredient6,
    cocktail.strIngredient7,
    cocktail.strIngredient8,
    cocktail.strIngredient9,
    cocktail.strIngredient10,
    cocktail.strIngredient11,
    cocktail.strIngredient12,
    cocktail.strIngredient13,
    cocktail.strIngredient14,
    cocktail.strIngredient15
  ]

  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary" >back home</Link>
      <h2 className="section-title">{cocktail.strDrink}</h2>
      <div className="drink">
        <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink}></img>
        <div className="drink-info">
          <p><span className="drink-data">Name: </span>{cocktail.strDrink}</p>
          <p><span className="drink-data">Category: </span>{cocktail.strCategory}</p>
          <p><span className="drink-data">Info:</span> {cocktail.strAlcoholic}</p>
          <p><span className="drink-data">Glass: </span>{cocktail.strGlass}</p>
          <p><span className="drink-data">Instructions: </span>{cocktail.strInstructions}</p>
          <p><span className="drink-data">Ingredient: </span>
            {
              ingredients.filter(item => item !== null).join(', ')
            }
          </p>
        </div>
      </div>
    </section>
  )
}

export default SingleCocktail
