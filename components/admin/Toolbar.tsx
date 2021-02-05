import Link from 'next/link';

export default function AdminToolbar() {
    return (
        <>
        <header className="text-gray-700 bg-white border-t border-b body-font">
          <div className="container flex flex-col flex-wrap p-5 mx-auto md:items-center md:flex-row ">
            <nav className="flex flex-wrap items-center justify-center text-base ">
                <Link href="/admin/talks">
                <a className="mr-5 text-sm font-semibold text-gray-600 hover:text-gray-800">
                    Talks
                </a>
              </Link>
            </nav>
          </div>
        </header>
      </>
      
    )
}