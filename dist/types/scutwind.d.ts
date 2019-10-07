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
declare const defaultConfig: IConfig;
declare let styles: {
    (styleOrStyles: string | string[]): any;
    styles: {
        [x: string]: any;
    };
};
export { defaultConfig, styles };
//# sourceMappingURL=scutwind.d.ts.map