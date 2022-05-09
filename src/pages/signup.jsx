import { useForm } from "react-hook-form";
import { MdPassword, MdEmail } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

export default function SignUp() {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="App">
      <div className="main-page">
        <div className="box">
          <div className="leftBox">
          <img src="/signup.jpg" alt="image" />

          </div>
          <div className="rightBox">
            <div className="page-display">
              <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Sign Up</h2>
                <div>
                  <FaUserCircle size={20} />
                  <input
                    type="text"
                    placeholder="Your FullName"
                    errors={errors?.username?.message}
                    {...register("username", {
                      required: "Name is required."
                    })}
                  />
                </div>
                <p>{errors?.username?.message}</p>
                <div>
                  <MdEmail size={20} />
                  <input
                    type="text"
                    placeholder="Your Email"
                    errors={errors?.email?.message}
                    {...register("email", {
                      required: "Email is required."
                    })}
                  />
                </div>
                <p>{errors?.email?.message}</p>

                <div>
                  <MdPassword size={20} />
                  <input
                    type="password"
                    placeholder="Your Password"
                    errors={errors?.password?.message}
                    {...register("password", {
                      required: "Password is required."
                    })}
                  />
                </div>
                <p>{errors?.password?.message}</p>
                <button type="submit">Register</button>
                <a href={"http://localhost:3000/login"}>Login here</a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
