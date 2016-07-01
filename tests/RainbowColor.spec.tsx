import test from "ava";
import * as React from "react";
import { range } from "lodash";
import { shallow } from "enzyme";

import RainbowColor from "../src/components/RainbowColor";

const wrapper = shallow(<RainbowColor color={(r: number) => `${r},0,0`} />);

test("rainbow color must contain 256 cells", t => {
    t.is(wrapper.find("td").length, 256);
});

test("each cell should have its index as key", t => {
    range(256).forEach(index => {
        t.is(wrapper.children().get(index).key, index.toString());
    });
});
