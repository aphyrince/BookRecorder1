import type { SIDEBAR_MENU_ITEMS_TYPE } from "./sidebarMenuItems";

const SidebarMenu = ({ Icon, name }: SIDEBAR_MENU_ITEMS_TYPE) => {
    return (
        <button
            title={name}
            className="w-full grid place-items-center py-4 bg-transparent duration-300 hover:bg-lime-100/50 text-black/80 hover:text-black"
        >
            <Icon size={48} />
        </button>
    );
};

export default SidebarMenu;
