import NavItem from "../../components/ui/NavItems";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-zinc-100">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-zinc-900">404</h1>
        <p className="mb-6 text-xl text-zinc-600">Oops! Page not found.</p>
        <p className="mb-8 text-zinc-500 text-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <NavItem to="/" className="text-black border-black ">
          Go Back Home
        </NavItem>
      </div>
    </div>
  );
};

export default NotFound;
