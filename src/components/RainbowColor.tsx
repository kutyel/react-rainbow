import * as _ from "lodash";
import * as React from "react";

interface RainbowColor { color: (x: number) => string; }

export default function RainbowColor(props: RainbowColor) {
    return <tr>
        {_.range(256).map((x: number) =>
            <td style={{ backgroundColor: `rgb(${props.color(x)})` }} key={x}></td>)}
    </tr>;
}
