import { CloudLightning } from "lucide-react";
import SidebarMenu from "./SidebarMenu";
import { sidebarMenuItems } from "./sidebarMenuItems";

const Sidebar = () => {
    return (
        <div className="w-18 h-full py-4 flex flex-col justify-start items-center bg-lime-500">
            <CloudLightning size={48} strokeWidth={3} />
            <div className="w-full flex flex-col justify-start items-center flex-1 mt-10">
                {sidebarMenuItems.map((item) => (
                    <SidebarMenu Icon={item.Icon} name={item.name} />
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
