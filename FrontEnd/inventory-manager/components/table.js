
export default function Table(data) {

  const url = 'https://jsonplaceholder.typicode.com/albums'
  const { gittingData } = useState([]);

  const fetcher = url => axios.get(url, config).then(res => gittingData = res.data)
  const { data, error } = useSWR(url, fetcher)
  return (
    <div class="flex flex-col">
      <div class="overflow-x-auto ">
        <div class="py-4 inline-block min-w-full">
          <div class="overflow-hidden">
            <table class="max-w- text-center ml-72 ">
              <thead class="border-b bg-gray-50">
                <tr>
                  {Object.keys(data[0]).map((key) => (
                    <th>{key}</th>
                  ))}
                </tr>
              </thead >
              <tbody>
                {data.map(object => {
                  return (
                    <tr>
                      {Object.values(object).map(value => {
                        return <td>{value}</td>
                      })}
                    </tr>
                  )
                })}

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}