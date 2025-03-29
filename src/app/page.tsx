import Image from "next/image";


export default function Home() {
  return (
    <div className="container bg-gray-400">
      
      <div className="bg-maincolor text-[#45adff]"> T H I N K I F Y</div>
      {/* LOG IN FORM */}
      <div className="container flex justify-center">
      <form className="bg-maincolor" action="">
        <label htmlFor="email">Email: </label>
        <input className="" type="email" name="email" id="email" required />
        <br />
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" id="password" required />
        <br />
        <button type="submit">Log in</button>
      </form>
      </div>
    </div>
  );
}
