import Footer from '../components/footer';

export default function BasicLayout({children}) {
    return (
        <>
            {children}
            <Footer/>
        </>
    )
}