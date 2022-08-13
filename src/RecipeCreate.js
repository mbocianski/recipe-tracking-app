import React, { useState } from "react";


function RecipeCreate({createRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  const initialFormState = {
    name:"",
    cuisine:"",
    photo:"",
    ingredients:"",
    preparation:""
  }

  const [formData, setFormData] = useState({...initialFormState});

  const handleChange = ({target}) => {
    setFormData({
      ...formData,
      [target.name]: target.value
    })
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(formData);
    setFormData({...initialFormState});
  }

  

  return (
    <form onSubmit={(handleSubmit)} name="create">
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name">
                <input 
                  id="name" 
                  name="name" 
                  type="text"
                  required={true}
                  onChange={handleChange}
                  placeholder="Name"
                  value={formData.name} />
              </label>
            </td>
            <td>
              <label htmlFor="cuisine">
                <input 
                  id="cuisine" 
                  name="cuisine" 
                  type="text"
                  required={true}
                  onChange={handleChange}
                  placeholder="Cuisine"
                  value={formData.cuisine} />
              </label>
            </td>
            <td>
              <label htmlFor="photo">
                <input 
                  id="photo" 
                  name="photo" 
                  type="url"
                  required={true}
                  onChange={handleChange}
                  placeholder="URL"
                  value={formData.photo} />
              </label>
            </td>
            <td className="textarea">
              <label htmlFor="ingredients">
                <textarea
                  id="ingredients" 
                  name="ingredients" 
                  required={true}
                  onChange={handleChange}
                  placeholder="Ingredients"
                  rows={2}
                  value={formData.ingredients} />
              </label>
            </td>
            <td className="textarea">
              <label htmlFor="name">
              <textarea
                  id="preparation" 
                  name="preparation" 
                  required={true}
                  onChange={handleChange}
                  placeholder="preparation"
                  rows={2}
                  value={formData.preparation} />
              </label>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
