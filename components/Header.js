export default function Header(props) {
    const logout = () => {
        localStorage.removeItem("accessToken")
        window.location.href = '/Login'
    }
    return (
        <header className="flex justify-between p-4 bg-green-500 text-gray-50">
            <h1 className="text-3xl font-bold">
                Inventer
            </h1>
            <div>
                <button onClick={logout} type="submit" className="inline-block px-8 py-2 font-semibold text-white bg-green-500 border-2 border-white rounded-full hover:bg-white hover:border-green-500 hover:text-green-500 ">
                    <p>Logout</p>
                </button>
            </div>
        </header>
    )
}

