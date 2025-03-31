

function Landing() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-maincolor">
        {/* Logo/Title */}
        <h1 className="text-secondary text-3xl font-bold mb-6">T H I N K I F Y</h1>
  
        {/* Login Form */}
        <div className="bg-white p-8 rounded-lg shadow-md w-80">
          <form className="flex flex-col gap-4">
            <input
              className="bg-[#123456] text-white text-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
              type="email"
              name="email"
              id="email"
              required
              placeholder="Email"
            />
  
            <input
              className="bg-[#123456] text-white text-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
              type="password"
              name="password"
              id="password"
              required
              placeholder="Password"
            />
  
            <button
              type="submit"
              className="bg-secondary text-white p-2 rounded-md hover:bg-opacity-80 transition"
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    );
  }
  
  export default Landing;
  