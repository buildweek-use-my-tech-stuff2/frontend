import React, {useState, useEffect} from 'react'; 
import * as yup from "yup"; 
import axios from 'axios'; 

export default function Form() {
    const [post, setPost] = useState();
    const [serverError, setServerError] = useState("");
    const [formState, setFormState] = useState({
      name: "",
      image: "",
      price: "",
      description: "",
      location: "",
      type: "",
      deposit: "",
      renter: "",
    });
  
    const [buttonDisabled, setButtonDisabled] = useState(true);
  
    const [errors, setErrors] = useState({
        name: "",
        image: "",
        price: "",
        description: "",
        location: "",
        type: "",
        deposit: "",
        renter: "",
    });
  
    const formSchema = yup.object().shape({
      name: yup.string().required("Name is a required field"), 
      image: yup.string().required("You must submit an image"),
      price: yup.string().required("You must list your price"),
      description: yup.string().required("You must enter a description"),
      location: yup.string().required("You must list the item's location"),
      type: yup.string().required("You must list the type of item"),
      deposit: yup.string().required("You must list your price"),
      renter: yup.string().required("You must list your username"),
    });
  
    useEffect(() => {
      console.log(
      );
      formSchema.isValid(formState).then(isFormValid => {
        console.log("is form valid?", isFormValid);
        setButtonDisabled(!isFormValid); 
      });
    }, [formState]);
  
    // onSubmit function
    const formSubmit = e => {
      e.preventDefault(); 
  
      axios
        .post("https://reqres.in/api/users", formState)
        .then(res => {
          setPost(res.data);
          console.log("Rental order received!");
  
          // clear state, could also use 'initialState' here
          setFormState({
            name: "",
            image: "",
            price: "",
            description: "",
            location: "",
            type: "",
            deposit: "",
            renter: "",
          });
  
          setServerError(null);
        })
        .catch(err => {

          setServerError("404 error");
        });
    };
  
    const validateChange = e => {

      yup
        .reach(formSchema, e.target.name)
        .validate(e.target.value)
        .then(inputIsValid => {

          setErrors({
            ...errors,
            [e.target.name]: ""
          });
        })
        .catch(err => {

          setErrors({
            ...errors,
            [e.target.name]: err.errors[0]
          });
        });
    };

    const inputChange = e => {
      e.persist(); 
      console.log("input changed!", e.target.value);
      console.log("name of input that fired event", e.target.name);
  
    const newFormData = {
      ...formState,
      [e.target.name]:
          e.target.name === "terms" ? e.target.checked : e.target.value 
      };
  
      validateChange(e); 
      setFormState(newFormData); 
    };
  
    return (
      <form onSubmit={formSubmit}>
        {serverError ? <p className="error">{serverError}</p> : null}
        <label htmlFor="name">
          Name<br /> 
          <input
            id="name"
            type="text"
            name="name"
            onChange={inputChange}
            value={formState.name}
          />
          {errors.name.length > 0 ? <p className="error">{errors.name}</p> : null}
        <br /> 
        </label>
        <br /> 

        <label htmlFor="image">
          ImageURL<br /> 
          <input
            id="image"
            type="text"
            name="image"
            onChange={inputChange}
            value={formState.image}
          />
          {errors.image.length > 0 ? (
            <p className="error">{errors.image}</p>
          ) : null}
          <br /> 
        </label>
        <br /> 

        <label htmlFor="price">
          Price<br /> 
          <input
            id="price"
            type="text"
            name="price"
            onChange={inputChange}
            value={formState.price}
          />
          {errors.image.length > 0 ? (
            <p className="error">{errors.price}</p>
          ) : null}
          <br /> 
        </label>
        <br /> 
        
        <label htmlFor="description">
          Item Description <br /> 
          <textarea
            name="description"
            value={formState.description}
            onChange={inputChange}
          />
          <br /> 
        </label>
        <br /> 

        <label htmlFor="location">
          Location<br /> 
          <input
            id="location"
            type="text"
            name="location"
            onChange={inputChange}
            value={formState.location}
          />
          {errors.image.length > 0 ? (
            <p className="error">{errors.location}</p>
          ) : null}
          <br /> 
        </label>
        <br /> 

        <label htmlFor="type">
          Type<br /> 
          <input
            id="type"
            type="text"
            name="type"
            onChange={inputChange}
            value={formState.type}
          />
          {errors.image.length > 0 ? (
            <p className="error">{errors.type}</p>
          ) : null}
          <br /> 
        </label>
        <br /> 

        <label htmlFor="deposit">
          Deposit<br /> 
          <input
            id="deposit"
            type="text"
            name="deposit"
            onChange={inputChange}
            value={formState.deposit}
          />
          {errors.image.length > 0 ? (
            <p className="error">{errors.deposit}</p>
          ) : null}
          <br /> 
        </label>
        <br /> 

        <label htmlFor="renter">
          Renter<br /> 
          <input
            id="renter"
            type="text"
            name="renter"
            onChange={inputChange}
            value={formState.renter}
          />
          {errors.image.length > 0 ? (
            <p className="error">{errors.renter}</p>
          ) : null}
          <br /> 
        </label>
        <br /> 

        <button type="submit" disabled={buttonDisabled}>
          Submit
        </button>
        <pre>{JSON.stringify(post, null, 2)}</pre>
      </form>
    );
  }