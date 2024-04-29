const Form = () => {
  const handleBtn = () => {
    alert("form not working yet");
  };
  return (
    <>
      <section className="">
        <div className="  border bg-white    dark:bg-black m-auto w-[400px] flex border-white items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-8">
          <div className="xl:mx-auto xl:w-full shadow-md p-4 xl:max-w-sm 2xl:max-w-md">
            <div className="mb-2 flex justify-center"></div>
            <h2 className="text-center text-2xl font-bold leading-tight text-black dark:text-white">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600 dark:text-white">
              Don't have an account? Create a free account
            </p>
            <form className="mt-8" method="POST" action="">
              <div className="space-y-5">
                <div>
                  <label className="text-base font-medium text-gray-900 dark:text-white">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      placeholder="Email"
                      type="email"
                      className=" dark:text-white flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label className="text-base font-medium text-black dark:text-white">
                      Password
                    </label>
                    <a
                      onClick={handleBtn}
                      className="text-sm font-semibold text-black hover:underline dark:text-white cursor-not-allowed"
                      title=""
                      href="#"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <div className="mt-2">
                    <input
                      placeholder="Password"
                      type="password"
                      className=" dark:text-white flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                </div>
                <div>
                  <button
                    onClickCapture={handleBtn}
                    className=" border border-gray-300 inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80 cursor-not-allowed"
                    type="button"
                  >
                    Get started
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Form;
