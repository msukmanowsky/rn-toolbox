interface IConfig {
    rem: number;
    breakpoints: {
        [key: string]: number;
    };
    spacing: {
        [key: string]: number;
    };
    fontSizes: {
        [key: string]: number;
    };
    letterSpacing: {
        [key: string]: number;
    };
    colors: {
        [key: string]: string | {
            [key: number]: string;
        };
    };
    borderRadius: {
        [key: string]: number;
    };
}
declare const styles: {
    (styleOrStyles: string | string[]): any;
    styles: {
        [x: string]: any;
    };
    defaultConfig: IConfig;
};
export default styles;
//# sourceMappingURL=scutwind.d.ts.map