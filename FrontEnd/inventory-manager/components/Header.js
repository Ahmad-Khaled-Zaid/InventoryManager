export default function Header(props) {
    // funtion that will update the count
    return (
        <header className="flex justify-between p-4 bg-green-600 text-gray-50">
            <h1 className="text-3xl font-bold">
                Inventer
            </h1>
            <div>
                <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <p>New Invoice</p>
                </button>
                <button type="submit" class="px-4 py-2.5 ml-2 text-sm font-medium text-white bg-gray-400 rounded-full border border-gray-400 hover:bg-gray-600 ">
                    <p>Admin</p>
                </button>
            </div>
             
        </header>
    )
}

