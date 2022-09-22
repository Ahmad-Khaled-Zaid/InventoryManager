export default function Header(props) {
    const logout = () => {
        localStorage.removeItem("accessToken")
        window.location.href = '/Login'
    }
    return (
        <header className="flex justify-between px-4 py-3 bg-green-500 text-gray-50 dark:bg-gray-800">
            <div className="flex justify-between font-serif text-3xl font-bold">
                <img className='items-center mr-1 rounded-lg' width={65} src="https://icon-library.com/images/inventory-management-icon/inventory-management-icon-7.jpg" />
                <div className="mt-3">
                    <p> INVENTER </p>
                    <p className="font-sans text-xs font-bold text-green-800"> Management System </p>
                </div>
            </div>
            <div>
                <button onClick={logout} type="submit" className="inline-block px-8 py-2 mt-2 font-semibold text-white bg-green-500 border-2 border-white rounded-full hover:bg-white hover:border-green-500 hover:text-green-500 ">
                    <p>Logout</p>
                </button>
            </div>
        </header>
    )
}


