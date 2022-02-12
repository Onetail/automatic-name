import NameService from "./app/service/name";


export declare class Index {
  nameService: NameService
  constructor(data?: EscposArguments);
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