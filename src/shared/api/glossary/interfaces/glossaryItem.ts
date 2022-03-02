export interface GlossaryItem {
    id: string;
    title: string;
    description: string;
    caseSensitive: boolean;
    translatable: boolean;
    forbidden: boolean;
    createdAt: string;
    createdBy: User;
}

interface User {
    id: string;
    fullName: string;
}