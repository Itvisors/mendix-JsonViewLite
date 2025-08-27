/* eslint-disable sort-imports */
import { createElement } from "react";

import { JsonViewLiteComponent } from "./components/JsonViewLiteComponent";
import "./ui/JsonViewLite.css";

export function JsonViewLite(props) {
    const { jsonAttr, expandAll, useDarkStyles } = props;
    if (!jsonAttr.value) {
        return null;
    }
    const jsonObject = JSON.parse(jsonAttr.value);
    return (
        <JsonViewLiteComponent
            jsonData={jsonObject}
            expandAll={!!expandAll.value}
            useDarkStyles={!!useDarkStyles.value}
            widgetName={props.name}
        />
    );
}
