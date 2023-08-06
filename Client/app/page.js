export default function Home() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-3 gap-5 mb-5">
        <div className="p-2 rounded-md col-span-3 bg-white"></div>
      </div>
      <div className="grid grid-cols-3 gap-5 mb-5">
        <div className="p-2 rounded-md col-span-1 bg-white"></div>
        <div className="p-2 rounded-md col-span-2 bg-white"></div>
      </div>
      <div className="grid grid-cols-3 gap-5 mb-5">
        <div className="p-2 rounded-md col-span-1 bg-white"></div>
        <div className="p-2 rounded-md col-span-1 bg-white"></div>
        <div className="p-2 rounded-md col-span-1 bg-white"></div>
      </div> 
      <div className="grid grid-cols-3 gap-5 mb-5">
        <div className="p-2 rounded-md col-span-2 bg-white"></div>
        <div className="p-2 rounded-md col-span-1 bg-white"></div>
      </div>
    </div>
  );
}
