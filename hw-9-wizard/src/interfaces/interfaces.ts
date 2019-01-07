export interface IChoice {
    brand: string;
    model: string;
    fuel: string;
    transmission: string;

    [key: string]: string;
}

export interface IData {
    brand: {
        Opel: string[];
        Citroen: string[];
        Ford: string[];
        [key: string]: string[];
    },
    fuel: string[];
    transmission: string[];
}

export interface IStepsProps {
    changeEnabled: () => void;
    renderData: any;
}