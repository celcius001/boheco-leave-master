interface NavigationProps {
  login: boolean;
}

const logout = () => {
  sessionStorage.clear();
  window.location.href = "/";
};

const Navigation = ({ login }: NavigationProps) => {
  return (
    <nav className="bg-white shadow-md dark:bg-gray-800">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* LEFT */}
        <div>
          {/* Home Link */}
          <a
            href="/"
            className="text-lg font-semibold text-gray-800 dark:text-white"
          >
            Home
          </a>
        </div>
        {/* RIGHT */}
        <div className="flex items-center justify-center gap-4">
          {/* Login Link */}
          {login ? (
            <a
              href="/"
              className="text-lg font-semibold text-gray-800 dark:text-white"
              onClick={logout}
            >
              Sign Out
            </a>
          ) : (
            <a
              href="/login"
              className="text-lg font-semibold text-gray-800 dark:text-white"
            >
              Sign In
            </a>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
