import {
  House,
  BookOpenText,
  Waves,
  Code,
} from "lucide-react";

export interface TabItem {
  title: string;
  url: string;
  isActive?: boolean;
}

export interface Tab {
  title: string;
  url: string;
  icon?: React.ReactNode;
  items?: TabItem[];
}

export interface TabsType {
  navMain: Tab[];
}

export const tabsList: TabsType = {
  navMain: [
    {
      title: "Home",
      url: "/admin",
      icon: <House />,
    },
    {
      title: "Articles",
      url: "/admin/blog",
      icon: <BookOpenText />,
      items: [
        {
          title: "Maritime Logs",
          url: "/admin/blog/maritime-logs",
          icon: <Waves />,
        },
        {
          title: "Dev Logs",
          url: "/admin/blog/dev-logs",
          icon: <Code />,
        },
      ],
    },
  ],
};
