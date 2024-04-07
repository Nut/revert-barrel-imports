import React from "react";

import { Foo, Bar } from "../dto";
// import { Foo } from "../dto/foo.dto";
// import { Bar } from "../dto/bar.dto";
import { La } from "../enum";

import "./button.component.scss";

interface Props {
  foo: Foo;
  t: Bar;
}

export const Test = ({ foo }: Props) => {
  return <div>{foo.bar}</div>;
};
