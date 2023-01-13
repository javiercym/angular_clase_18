export interface FetchallInterfaceApiResponse {
    count: number;
    next:null;
    previous:null;
    result: SmallInterfaceApi[];
}

export interface SmallInterfaceApi {
    name: string;
    url: string;
}

export interface InterfaceApi {
    userId:number;
    id: number;
    title: string;
    completed: string;
}