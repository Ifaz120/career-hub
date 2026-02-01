import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 px-4 text-center">
      <div id="error-page" className="space-y-6">
        <h1 className="text-7xl md:text-9xl font-extrabold text-primary opacity-20">
          {error.status || "404"}
        </h1>
        
        <div className="space-y-2">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800">Oops!</h2>
          <p className="text-gray-600 text-lg">Sorry, an unexpected error has occurred.</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-inner border border-gray-200 inline-block">
          <p className="text-red-500 font-mono italic">
            {error.statusText || error.message}
          </p>
        </div>

        <div className="pt-6">
          <Link to="/">
            <button className="btn btn-primary px-10 text-white">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}