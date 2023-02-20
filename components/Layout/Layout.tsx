import Header from "../Header/Header"

interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
    <div className="container">
        <Header />
        { children }
    </div>
    </>
  )
}

export default Layout