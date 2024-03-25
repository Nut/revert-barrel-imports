import React from "react";

import { Foo } from "../dto";

interface Props {
  foo: Foo;
}

export const Test = ({ foo }: Props) => {
  return <div>{foo.bar}</div>;
};
