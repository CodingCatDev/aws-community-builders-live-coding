export default function Footer() {
  return (
    <footer className="footer bg-secondary-900 text-white relative pt-1">
      <div className="container mx-auto px-6">
        <div className="sm:flex sm:mt-8">
          <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
            <div className="flex flex-col">
              <span className="font-semibold text-xl text-gray-400 uppercase mb-2">
                AWS Community Blog
              </span>
              <span className="my-2">
                <a href="#" className="text-md">
                  link 1
                </a>
              </span>
              <span className="my-2">
                <a href="#" className="text-md">
                  link 1
                </a>
              </span>
              <span className="my-2">
                <a href="#" className="text-md">
                  link 1
                </a>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-xl text-gray-400 uppercase mt-4 md:mt-0 mb-2">
                Menu
              </span>
              <span className="my-2">
                <a href="#" className="text-md">
                  Articles
                </a>
              </span>
              <span className="my-2">
                <a href="#" className="text-md">
                  Authors
                </a>
              </span>
              <span className="my-2">
                <a href="#" className="text-md">
                  About Us
                </a>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-xl text-gray-400 uppercase mt-4 md:mt-0 mb-2">
                Contact Us
              </span>
              <span className="my-2">
                <a href="#" className="text-md">
                  link 1
                </a>
              </span>
              <span className="my-2">
                <a href="#" className="text-md">
                  link 1
                </a>
              </span>
              <span className="my-2">
                <a href="#" className="text-md">
                  link 1
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6">
        <div className="mt-16 border-t-2 border-primary-500 flex flex-col items-center">
          <div className="sm:w-2/3 text-center py-6">
            <p className="text-sm mb-2 font-thin">
              © {new Date().getFullYear()} by CodingCatDev
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
