import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [response, setResponse] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("token");
    if (auth) {
      navigate("/Home");
    }
  }, []);

  const submitData = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError(true);
      return false;
    }
// calling login API
    await axios
      .post(`http://localhost:5000/api/login`, {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.status === 400) {
          console.log(res.data.message);
          setResponse(res.data.message);
        } else {
          setResponse(res.data.message);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("username", res.data.username);
          navigate("/Home");
        }
      })
      .catch((error) => {
        setResponse(error.message);
        console.log(error);
      });
  };
  console.log("in response: ", response);

  return (
    <>
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
                  <h1 className="fs-4 card-title fw-bold mb-4">Login</h1>
                  <form
                    onSubmit={(e) => {
                      submitData(e);
                    }}
                  >
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="form2Example1"
                        placeholder="Email Address"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                      />
                      {/* <label className="form-label" for="form2Example1">Email address</label> */}
                      {error && !email && (
                        <span style={{ color: "red", fontSize: "16px" }}>
                          Enter valid email
                        </span>
                      )}
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form2Example2"
                        placeholder="Password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        name="password"
                      />
                      {error && !password && (
                        <span style={{ color: "red", fontSize: "16px" }}>
                          Enter password
                        </span>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary btn-block mb-4"
                    >
                      Sign in
                    </button>
                    <div className="text-center">
                      <p>
                        Don't have an account? <a href="Signup">Sign Up</a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Login;
