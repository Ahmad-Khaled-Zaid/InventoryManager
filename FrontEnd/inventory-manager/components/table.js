
export default function Table(props) {
  return (
    <div class="flex flex-col">
      <div class="overflow-x-auto ">
        <div class="py-4 inline-block min-w-full">
          <div class="overflow-hidden">
            <table class="max-w- text-center ml-72 ">
              <thead class="border-b bg-gray-50">
                <tr>
                  {Object.keys(props.data[0]).map((key) => (
                    <th>{key}</th>
                  ))}
                </tr>
              </thead >
              <tbody>
                {data.map(object => {
                  return (
                    <tr>
                {Object.values(object).map(value=>{
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