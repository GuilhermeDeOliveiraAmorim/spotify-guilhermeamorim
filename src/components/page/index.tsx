import { IPage } from "./IPage";
import { Table } from "./table";

function Page(props: IPage) {
  const { pageTitle } = props;

  return (
    <div className="flex flex-col h-screen p-2 gap-2">
      <div className="flex bg-background-base justify-between items-center w-full p-2">
        <h2 className="text-text-base font-black text-xl">{pageTitle}</h2>
        <div className="flex gap-2">
          <button className="text-text-base bg-background-tinted-highlight p-2 rounded-lg hover:bg-text-subdued">
            Day
          </button>
          <button className="text-text-base bg-background-tinted-highlight p-2 rounded-lg hover:bg-text-subdued">
            Week
          </button>
          <button className="text-text-base bg-background-tinted-highlight p-2 rounded-lg hover:bg-text-subdued">
            Month
          </button>
        </div>
      </div>
      <div className="flex justify-start w-full">
        <Table />
      </div>
    </div>
  );
}

export { Page };
