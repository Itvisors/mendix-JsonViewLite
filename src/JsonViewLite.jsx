/* eslint-disable sort-imports */
import { createElement } from "react";

import { JsonViewLiteComponent } from "./components/JsonViewLiteComponent";
import "./ui/JsonViewLite.css";

export function JsonViewLite(props) {
    const { jsonAttr, expandAll, useDarkStyles } = props;
    if (!jsonAttr.value) {
        return null;
    }
    let jsonObject = null;
    try {
        jsonObject = JSON.parse(jsonAttr.value);
    } catch (error) {
        const message = props.name + " JSON data error: " + error.message;
        return (
            <div>
                <span className="json-view-lite-widget-error">{message}</span>
            </div>
        );
    }
    return (
        <JsonViewLiteComponent
            jsonData={jsonObject}
            expandAll={!!expandAll.value}
            useDarkStyles={!!useDarkStyles.value}
            widgetName={props.name}
        />
    );
}
