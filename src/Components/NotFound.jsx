import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className={`mt-60 flex flex-col items-center gap-4 mb-40`}>
      <h2 className="text-xl font-bold">Page not found</h2>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className={`bg-secondary-200/75 hover:bg-secondary-200/25 p-3 rounded-md transition-color duration-300`}
      >
        Go back home
      </Link>
    </section>
  );
};

export default NotFound;
