import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [response, setResponse] = useState("");
  const navigate = useNavigate();

  const insertData = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError(true);
      return false;
    }

    console.log("Input Data ", name, email, password);
    try {
      // calling Sign up API to register user
      let result = await axios.post(`http://localhost:5000/api/signup`, {
        name: name,
        email: email,
        password: password,
      });
      console.log("Result from Signup API: ", result);

      if (result.data.status === 401) {
        setResponse(result.data.message);
        navigate("/Signup");
      } else if (result.data.status === 400) {
        setResponse(result.data.message);
        navigate("/Signup");
      } else if (result.data.status === 201) {
        setResponse(result.data.message);
        navigate("/Login");
      } else {
        setResponse("Try again");
      }
    } catch (error) {
      setResponse(error.message);
    }
  };

  return (
    <section className="h-100">
      <div className="container h-100">
        <div className="row justify-content-sm-center h-100">
          <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
            <div className="text-center my-5">
              <img
                src="https://www.lms.org/wp-content/uploads/lmslogo.png"
                alt="logo"
                width="150"
              />
            </div>
            {!response ? (
              " "
            ) : (
              <div className="container" style={{ width: "420px" }}>
                <div
                  className="alert alert-danger d-flex align-items-center"
                  role="alert"
                >
                  <div>{response}</div>
                </div>
              </div>
            )}
            <div className="card shadow-lg">
              <div className="card-body p-5">
                <h1 className="fs-4 card-title fw-bold mb-4">Signup</h1>
                <form
                  onSubmit={(e) => {
                    insertData(e);
                  }}
                >
                  <div className="form-outline mb-4">
                    <input
                      type="name"
                      id="form2Example1"
                      placeholder="User Name"
                      className="form-control"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      name="name"
                    />
                    {error && !name && (
                      <span style={{ color: "red", fontSize: "16px" }}>
                        Enter valid name
                      </span>
                    )}
                    <br />
                    <input
                      type="email"
                      id="form2Example1"
                      placeholder="Email Address"
                      className="form-control"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      name="email"
                    />
                    {error && !email && (
                      <span style={{ color: "red", fontSize: "16px" }}>
                        Enter valid email
                      </span>
                    )}
                    <br />

                    <input
                      type="password"
                      id="form2Example2"
                      placeholder="Password"
                      className="form-control"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      name="password"
                    />
                    {error && !password && (
                      <span style={{ color: "red", fontSize: "16px" }}>
                        Enter valid password
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    name="signup"
                    className="btn btn-primary btn-block mb-4"
                  >
                    Sign up
                  </button>
                  <div className="text-center">
                    <p>
                      Have an account? <a href="Login">Sign In</a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Signup;
