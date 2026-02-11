import { CloudLightning } from "lucide-react";
import SidebarMenu from "./SidebarMenu";
import { sidebarMenuItems } from "./sidebarMenuItems";

const Sidebar = ({
    pageHandler,
}: {
    pageHandler: (pageNum: number) => void;
}) => {
    return (
        <div className="w-18 h-full py-4 flex flex-col justify-start items-center bg-lime-500">
            <CloudLightning size={48} strokeWidth={3} />
            <div className="w-full flex flex-col justify-start items-center flex-1 mt-10">
                {sidebarMenuItems.map((item, index) => (
                    <SidebarMenu
                        Icon={item.Icon}
                        name={item.name}
                        handleClick={() => {
                            pageHandler(index);
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
