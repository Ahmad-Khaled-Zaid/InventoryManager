


export default function AddInvoice(){
    return(
        <div>
            <table class="text-sm text-left text-gray-500 dark:text-gray-400 mt-20 border-collapse border "  >
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr class="bg-green-500">
                <th scope="col" class="p-4 ">
                  <div class="flex items-center">
                  </div>
                </th>
                <th scope="col" class="py-3 px-6 text-white">
                 Item Code 
                </th>
                <th scope="col" class="py-3 px-6 text-white">
                  Item Name 
                </th>
                <th scope="col" class="py-3 px-6 text-white">
                  Item price
                </th>
                <th scope="col" class="py-3 px-6 text-white">
                  No of Items
                </th>
                <th scope="col" class="py-3 px-6 text-white">
                  Total Amount
                </th>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
        </div>
    )
}