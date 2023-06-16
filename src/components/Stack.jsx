function Stack() {
  return (
    <div className=" w-306 lg:w-1080 lg:h-16 flex flex-col gap-2">
      <p className="font-bold lg:text-2xl text-base text-indoor">
        European Indoor Athletics Championships Tickets
      </p>
      <ul className="flex p-0 w-80 h-6 lg:text-sm text-xs list-disc gap-7 [&>*:last-child]:text-athletics">
        <li className="list-none">Home</li>
        <li>Sports</li>
        <li>Athletics Championships</li>
      </ul>
    </div>
  );
}

export default Stack;
