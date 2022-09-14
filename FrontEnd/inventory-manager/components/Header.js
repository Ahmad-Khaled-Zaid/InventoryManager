export default function Header(props) {
    // funtion that will update the count
    return (
        <header className="flex justify-between p-4 bg-green-600 text-gray-50">
            <h1 className="text-3xl font-bold">
                Inventer
            </h1>
            <div>
                <button type="submit" class="inline-block px-4 py-2 font-semibold border-2 border-white rounded-full hover:bg-white hover:text-green-600 mx-3">
                    <p>New Invoice</p>
                </button>
                <button type="submit" class="inline-block px-4 py-2 font-semibold border-2 border-white rounded-full hover:bg-white hover:text-green-600">
                    <p>Admin</p>
                </button>
            </div>
             
        </header>
    )
}

