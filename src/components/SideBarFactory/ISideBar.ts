// SidebarInterface.ts
export interface SidebarProps {
    title: string;
    icons: React.ElementType[]; // Tipos de los íconos
    labels: string[];
    paths: string[];
}


export interface SidebarInterface {
    render(): JSX.Element;
}
