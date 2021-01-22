import Header from '@/layout/Header';
import Footer from '@/layout/Footer';

export default function Layout({children}:{children: any}): JSX.Element{
    return(<>
        <Header />
        <main className="grid justify-center grid-cols-1 gap-10 bg-gray-50 justify-items-center">
        {children}
        </main>
        <Footer />
    </>)
}
