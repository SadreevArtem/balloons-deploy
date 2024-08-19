import clsx from "clsx";
import { category, CategoryName } from "../../static";



type Props = {
    currentTab: string;
    setTab: (tab: CategoryName) => void;
}


export const Tabs: React.FC<Props> = ({currentTab,setTab }) => {
  return (
    <>
      <div className="flex">
      <ul className="flex gap-4">
          {category.map((item) => <li className={clsx({"border-b-4 border-green-600": currentTab===item.categoryName}, "cursor-pointer")} onClick={()=>setTab(item.categoryName)} key={item.categoryName}>{item.value}</li>)}
        </ul>
      </div>
     
    </>
  );
};