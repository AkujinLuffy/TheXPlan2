const Register = () => {
    return (
      <div className="container mt-4">
        <h1 className="h2 mb-4">Register</h1>
        <form>
          <input type="text" placeholder="Name" className="form-control mb-2" />
          <input type="email" placeholder="Email" className="form-control mb-2" />
          <input type="password" placeholder="Password" className="form-control mb-2" />
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    );
  };
  
  export default Register;