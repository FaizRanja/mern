import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { Fragment, useState } from "react";
import { Link , useNavigate } from "react-router-dom";

const SignIn = () => {
  const [formData, setformData] = useState({});
  const [error, seterror] = useState(null);
  const [loader, setLoader] = useState(false); 

  const navigate=useNavigate()

  const handleonChange = (event) => {
    setformData({ ...formData, [event.target.id]: event.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return seterror("Please fill out all fields.");
    }
    try {
      setLoader(true);
      seterror(null);
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === "false") {
        return seterror(data.message);
      }
      setLoader(false);

      if(res.ok){
        navigate('/')
      }

    } catch (error) {
      seterror(error.message);
      setLoader(false);
    }
  };
  return (
    <Fragment>
      <div className="min-h-screen mt-20">
        <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row  md:items-center gap-5">
          {/* left side  */}
          <div className=" flex-1 ">
            <Link to={"/"} className="    font-bold dark:text-white  text-4xl ">
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500  via-purple.500 to-pink-500 rounded-lg text-white ">
                Babu's
              </span>
              Blog
            </Link>
            <p className="text-sm mt-5 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              praesentium aut voluptas nostrum provident voluptatibus modi ipsa
              hic harum laudantium?
            </p>
          </div>
          {/* right  */}
          <div className="flex-1">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div>
                <Label value="Your email" />
                <TextInput
                  placeholder="email"
                  type="text"
                  id="email"
                  onChange={handleonChange}
                />
              </div>
              <div>
                <Label value="Your password" />
                <TextInput
                  placeholder="**********"
                  type="password"
                  id="password"
                  onChange={handleonChange}
                />
              </div>
              <Button
                gradientDuoTone="purpleToPink"
                type="submit"
                disabled={loader}
              >
                 {loader ? (
                <>
                  <Spinner size='sm' />
                  <span className='pl-3'>Loading...</span>
                </>
              ) : (
                'Sign Up'
              )}
              </Button>
            </form>
            <div className="flex gap-2 text-sm mt-5">
              <span>Dont  have an account?</span>
              <Link to={"/sign-up"} className="text-blue-500">
                Sign in
              </Link>
            </div>
            {error && (
              <Alert className="mt-5 " color="failure">
                {error}
              </Alert>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SignIn;