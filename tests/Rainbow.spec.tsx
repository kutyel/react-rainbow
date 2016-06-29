import test from "ava";
import * as React from "react";
import { shallow } from "enzyme";

import Rainbow from "../src/components/Rainbow";
import RainbowColor from "../src/components/RainbowColor";

test("rainbow must contain 7 colors", t => {
    const wrapper = shallow(<Rainbow />);
    t.is(wrapper.find(RainbowColor).length, 7);
});
