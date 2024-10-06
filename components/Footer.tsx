export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Rajambal Cottons</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Finest cotton sarees since 1950</p>
          </div>
          <div className="w-full md:w-1/3 text-center mt-4 md:mt-0">
            <p className="text-sm text-gray-600 dark:text-gray-400">&copy; 2023 Rajambal Cottons. All rights reserved.</p>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 mr-4">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}