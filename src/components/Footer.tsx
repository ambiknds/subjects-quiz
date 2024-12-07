
export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-2 mt-auto">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <p className="text-gray-300 hover:text-white transition-colors duration-300">
            © {new Date().getFullYear()} Class Quiz Platform
          </p>
         
        </div>
      </div>
    </footer>
  );
}