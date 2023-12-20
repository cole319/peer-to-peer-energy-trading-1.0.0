export default function AddListing() {
  return (
    <div className="px-40 py-10 bg-slate-900 min-h-screen">
      <h1 className="text-2xl text-neutral-200 font-semibold pb-10">
        Add details of Electricity Units below
      </h1>
      <form
        className="space-y-4"
        //   onSubmit={onSubmit}
      >
        <div>
          <h1>Units</h1>
          <input
            type="text"
            placeholder="Enter Number of Units"
            className="px-2 py-1 rounded-sm bg-neutral-200 w-full sm:w-2/5"
            // value={text}
            //   onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div>
          <h1>Price/Units (wei)</h1>
          <input
            type="text"
            placeholder="Enter wei (integer)"
            className="px-2 py-1 rounded-sm bg-neutral-200 w-full sm:w-2/5"
            // value={day}
            //   onChange={(e) => setDay(e.target.value)}
          />
        </div>
        <div>
          <h1>Listing Period (days)</h1>
          <input
            type="text"
            placeholder="Enter number of days"
            className="px-2 py-1 rounded-sm bg-neutral-200 w-full sm:w-2/5"
            // value={day}
            //   onChange={(e) => setDay(e.target.value)}
          />
        </div>

        <input
          type="submit"
          value="Add Details"
          className="py-2 px-3 bg-blue-600 text-neutral-200 
            rounded-md font-semibold w-fit hover:bg-blue-500 cursor-pointer"
        />
      </form>
    </div>
  );
}
