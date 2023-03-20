declare module '*module.css' {
    const styles: {
        [className: string]: string;
    };
    export default styles;
}

declare module '*.png' {
    const value: any;
    export default value;
}
