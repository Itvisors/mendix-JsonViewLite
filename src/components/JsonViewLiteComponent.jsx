/* eslint-disable sort-imports */
import { JsonView, allExpanded, collapseAllNested, darkStyles, defaultStyles } from "react-json-view-lite";
import { createElement } from "react";

import "react-json-view-lite/dist/index.css";

export function JsonViewLiteComponent({ jsonData, expandAll, useDarkStyles, widgetName }) {
    const className = widgetName + " json-view-lite-widget";
    return (
        <div className={className}>
            <JsonView
                data={jsonData}
                shouldExpandNode={expandAll ? allExpanded : collapseAllNested}
                style={useDarkStyles ? darkStyles : defaultStyles}
            />
        </div>
    );
}
