import { createElement } from "react";

import { HelloWorldSample } from "./components/HelloWorldSample";
import "./ui/JsonViewLite.css";

export function JsonViewLite({ sampleText }) {
    return <HelloWorldSample sampleText={sampleText} />;
}
