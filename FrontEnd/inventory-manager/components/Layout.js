const Layout = ({ children }) => {
    return <div className="layout">
        <div className="header"></div>
        <div className="sideBar"></div>
        <div className="mainContent">
            {children}
        </div>
    </div>
}
export default Layout