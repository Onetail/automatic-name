import NameService from "./app/service/name";

declare class AutomaticName {
    private nameService: NameService;
    createNewName(...languages): Promise<NameService>;
    getSpacing(): string;
    setSpacing(spacing): NameService;
    getTag(): string;
    setTag(tag): NameService;
    getUsername(): string;
    getFullname(spacing): string;
    getUsernameWithTag(type, ...params): Promise<string>;
    getFullnameWithTag(type, ...params): Promise<string>;
}

export as namespace AutomaticName;