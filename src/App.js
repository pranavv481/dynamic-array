import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm, useFieldArray } from "react-hook-form";
import React, { Fragment } from 'react';

const UserInformation = (prop) => {
  const { register, control } = prop
  const { fields, append, remove } = useFieldArray({
    control,
    name: "users", // unique name for your Field Array
    // keyName: "id", default to "id", you can change the key name
  });
  return (
    <div className="card">
      <div className="card-header">
        User Information
      </div>
      <div className="card-body">
        {
          fields.map((item, index) => (
            <div className="form-row form-group" key={item.id}>
              <div className="col">
                <input type="text"
                  className="form-control"
                  placeholder="Enter Your First name"
                  ref={register()}
                  name={`users[${index}].firstName`}
                  defaultValue={item.firstName}
                />
              </div>
              <div className="col">
                <input type="text"
                  className="form-control"
                  placeholder="Enter Your Last name"
                  ref={register()}
                  name={`users[${index}].lastName`}
                  defaultValue={item.lastName}
                />
              </div>
              <div className="col">
                <input type="text"
                  className="form-control"
                  placeholder="Enter Your E-mail Address"
                  ref={register()}
                  name={`users[${index}].emailAddress`}
                  defaultValue={item.emailAddress}
                />
              </div>
              <div className="col">
                {/* <label for="state">Select Your State</label> */}
                <select className="form-control"
                  id="state" ref={register()}
                  name={`users[${index}].state`}
                  defaultValue={item.state}
                >
                  <option value="">Select Your State</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Assam">Assam</option>
                  <option value="Goa">Goa</option>
                  <option value="Manipur">Manipur</option>
                </select>
              </div>
                <div className="col">
                  <button className="btn btn-danger" onClick={()=>remove(index)}>Delete</button>
                </div>
            </div>
          ))
        }
        <button className="btn btn-primary" onClick={() => append({ firstName: "", lastName: "", emailAddress:"", state:"" })}>ADD USER </button>
      </div>
    </div>
  )
}
function App() {
  const { register, handleSubmit, control } = useForm();

  const basicForm = (
    <Fragment>

      <div className="form-group">
        <label htmlFor="fullname">Full Name</label>
        <input type="text" className="form-control" id="fullname" name="fullname" ref={register} />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input type="email" className="form-control" id="email" name="email" ref={register} />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input type="text" className="form-control" id="phone" name="phone" ref={register} />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" className="form-control" id="password" name="password" ref={register} />
      </div>

     

    </Fragment>
  );

  const onSubmit = (data) => {
    console.log(data);
  }


  return (
    <div className="my-5">
      <div className="card mx-auto w-75 p-5 shadow" >
        <div className="form-group">
          <form onSubmit={handleSubmit(onSubmit)} >
            {basicForm}
            <UserInformation register={register} control={control} />
            <button type="submit" className="btn btn-primary" onSubmit={handleSubmit()}>Submit Data</button>
          </form>

        </div>
      </div>

    </div>
  );
}

export default App;
