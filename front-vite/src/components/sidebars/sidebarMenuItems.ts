import {
    ChartNoAxesCombined,
    Home,
    Plus,
    Settings,
    type LucideIcon,
} from "lucide-react";

export interface SIDEBAR_MENU_ITEMS_TYPE {
    Icon: LucideIcon;
    name: string;
}

export const sidebarMenuItems: SIDEBAR_MENU_ITEMS_TYPE[] = [
    { Icon: Home, name: "Home" },
    { Icon: ChartNoAxesCombined, name: "Chart" },
    { Icon: Plus, name: "Add Book Record" },
    { Icon: Settings, name: "Setting" },
];
