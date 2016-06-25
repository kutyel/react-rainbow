import * as React from "react";

import RainbowColor from "./RainbowColor";

export default class Rainbow extends React.Component<any, {}> {
    render() {
        return <table>
            <tbody>
                <RainbowColor color={(r: number) => `${r},0,0`} />
                <RainbowColor color={(o: number) => `${o},${Math.ceil(o / 2)},0`} />
                <RainbowColor color={(y: number) => `${y},${y},0`} />
                <RainbowColor color={(g: number) => `0,${g},0`} />
                <RainbowColor color={(z: number) => `0,${z},${z}`} />
                <RainbowColor color={(b: number) => `0,0,${b}`} />
                <RainbowColor color={(p: number) => `${p},0,${p}`} />
            </tbody>
        </table>;
    }
}
