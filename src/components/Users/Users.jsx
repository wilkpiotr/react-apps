import React from 'react';
import './Users.css';

const Users = () => {
  return (<section className="section Users project">
  <div className="container">
    <h1 className="title">Users React App</h1>
    <div>
      <h2 class="subtitle">Users List Screen</h2>
      <div class="add-user">
        <a class="button is-success"> {/* After click we show Add user form */}
          <span>Add user</span>
          <span class="icon is-small">
            <i class="fas fa-plus"></i>
          </span>
        </a>
      </div>
      {/* Table with list of users */}
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Last name</th>
            <th>User type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Endie</td>
            <td>Doe</td>
            <td>Admin</td>
            <td>
                <a class="button is-primary"> 
                  <span>Edit</span> {/* After click we show Edit user form */}
                  <span class="icon is-small">
                    <i class="fas fa-pen-square"></i>
                  </span>
                </a> 
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Rob</td>
            <td>Williams</td>
            <td>Customer</td>
            <td>
                <a class="button is-primary">
                  <span>Edit</span>
                  <span class="icon is-small">
                    <i class="fas fa-pen-square"></i>
                  </span>
                </a> 
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>John</td>
            <td>Wayne</td>
            <td>Admin</td>
            <td>
              <a class="button is-primary">
                <span>Edit</span>
                <span class="icon is-small">
                  <i class="fas fa-pen-square"></i>
                </span>
              </a> 
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>David</td>
            <td>O'Tool</td>
            <td>Moderator</td>
            <td>
                <a class="button is-primary">
                  <span>Edit</span>
                  <span class="icon is-small">
                    <i class="fas fa-pen-square"></i>
                  </span>
                </a> 
            </td>
          </tr>
          <tr></tr>
        </tbody>
      </table>
    </div>

    {/* Screen for adding or editing user. Difference is that for edit fields should have actual values */}
    <div>
      <hr/>
      <h2 class="subtitle">Users Add/Edit Screen</h2>
        <form>
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input class="input" type="text" placeholder="User Name" /> {/* For edit we have here set value of current user as default */}
            </div>
            <p class="help is-danger">Field is required</p>
          </div>

          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input class="input" type="text" placeholder="User Lastname" /> {/* For edit we have here set value of current user as default */}
            </div>
            <p class="help is-danger">Field is required</p>
          </div>

          <div class="field">
            <label class="label">User Type</label>
            <div class="control">
              <div class="select">
                <select> {/* For edit we have here set value of current user as default */}
                  <option>Customer</option>
                  <option>Moderator</option>
                  <option>Admin</option>
                </select>
              </div>
            </div>
          </div>
          <div class="field s-grouped">
            <a class="button is-success">
              <span class="icon is-small">
                <i class="fas fa-check"></i>
              </span>
              <span>Save</span> {/* Here should be Add text for adding user and Save for edit */}
            </a>
            &nbsp;
            <a class="button is-danger">{/* Delete doesnt exists for add form */}
              <span>Delete</span> {/* After delete click we go to Delete Confirmation*/}
              <span class="icon is-small">
                <i class="fas fa-times"></i>
              </span>
            </a>
            &nbsp;
            <a class="button">
              <span>Cancel</span> {/* After click we go back to user list */}
            </a>
            &nbsp;
            {/* Below example behavior of button save during ajax call */}
            <a class="button is-success is-loading">Loading</a>
          </div>
        </form>
    </div>

    {/* Delete Confirmation screen*/}
    <div>
    <hr/>
    <h2 class="subtitle">Delete Confirmation</h2>
      <section class="hero is-medium is-light is-bold">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              Please confirm removing the user John Wayne
            </h1>
            <h2 class="subtitle">
              <div class="field s-grouped">
                <a class="button is-danger">
                  <span class="icon is-small">
                    <i class="fas fa-check"></i>
                  </span>
                  <span>Confirm</span> {/* After click delete call should run and big loader should be shown and user should go back to list */}
                </a>
                &nbsp;
                <a class="button">
                  <span>Cancel</span> {/* After click we go back to user edit screen */}
                </a>
              </div>
            </h2>
          </div>
        </div>
      </section>
    </div>  


  </div>
  </section>
  )
}

export default Users;