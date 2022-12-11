
type Props={
  onChange:(val:string)=>void
}
export function TypeInput(props:Props) {

  
  return (
    <select
    onChange={e=>props.onChange(e.target.value)}
      className="px-4 py-2 text-gray-300 bg-gray-700 rounded-md"
    >
      <option>Text</option>
      <option>Select</option>
      <option>Multi Select</option>
      <option>Date</option>
    </select>
  );
}
