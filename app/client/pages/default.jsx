import Link from "next/link";

export default function Default() {
  return (
    <div className="p-20 justify-items-center">
      <h1>Please Install Metamask to continue</h1>
      <Link href="/Home">
        <button
          className="py-2 px-3 bg-blue-600 text-neutral-200 
            rounded-md font-semibold w-fit hover:bg-blue-500 cursor-pointer"
        >
          Back to Homepage
        </button>
      </Link>
    </div>
  );
}
