export interface IDataInterface {
    img: string;
    link: string;
    title: string;
    description:string;
    category: string;
}

export interface IStoreInterface{
    news: { news: IDataInterface[] };
    search: { searchText: string };
    sort: { sortBy: string };
    catsort: { catsort: string }
}