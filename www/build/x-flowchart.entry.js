import { r as registerInstance, h } from './core-2198c2d1.js';

const MyComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
        * The tree array for the flowchart
        * ["root name", [child name,[greatchild name], child name]]
        *                                   |root name|
        *           |child name|            |child name|                |child name|
        *                                 |greatchild name|
        */
        this.treeArray = [];
    }
    getHTML(treeStr, lastPart, testArray) {
        var fLen = testArray.length;
        treeStr += "<ul>";
        for (var i = 0; i < fLen; i++) {
            if (typeof (testArray[i]) == "string") {
                if (i != 0) {
                    treeStr += "</li>";
                }
                treeStr += "<li><a href='#'>" + testArray[i] + "</a>";
            }
            else {
                treeStr = this.getHTML(treeStr, lastPart, testArray[i]);
            }
        }
        treeStr += "</li>";
        treeStr += "</ul>";
        return treeStr;
    }
    makeTree() {
        let treeStr = "";
        let lastPart = [];
        let testArray = JSON.parse(this.tree);
        treeStr = this.getHTML(treeStr, lastPart, testArray);
        return treeStr;
    }
    render() {
        return (h("div", { class: "tree", innerHTML: this.makeTree() }));
    }
    static get style() { return "/*Now the CSS*/\n            * {margin: 0; padding: 0;}\n\n            .tree ul {\n                padding-top: 20px; position: relative;\n                \n                transition: all 0.5s;\n                -webkit-transition: all 0.5s;\n                -moz-transition: all 0.5s;\n            }\n\n            .tree li {\n                float: left; text-align: center;\n                list-style-type: none;\n                position: relative;\n                padding: 20px 5px 0 5px;\n                \n                transition: all 0.5s;\n                -webkit-transition: all 0.5s;\n                -moz-transition: all 0.5s;\n            }\n\n            /*We will use ::before and ::after to draw the connectors*/\n\n            .tree li::before, .tree li::after{\n                content: \'\';\n                position: absolute; top: 0; right: 50%;\n                border-top: 1px solid #ccc;\n                width: 50%; height: 20px;\n            }\n            .tree li::after{\n                right: auto; left: 50%;\n                border-left: 1px solid #ccc;\n            }\n\n            /*We need to remove left-right connectors from elements without \n            any siblings*/\n            .tree li:only-child::after, .tree li:only-child::before {\n                display: none;\n            }\n\n            /*Remove space from the top of single children*/\n            .tree li:only-child{ padding-top: 0;}\n\n            /*Remove left connector from first child and \n            right connector from last child*/\n            .tree li:first-child::before, .tree li:last-child::after{\n                border: 0 none;\n            }\n            /*Adding back the vertical connector to the last nodes*/\n            .tree li:last-child::before{\n                border-right: 1px solid #ccc;\n                border-radius: 0 5px 0 0;\n                -webkit-border-radius: 0 5px 0 0;\n                -moz-border-radius: 0 5px 0 0;\n            }\n            .tree li:first-child::after{\n                border-radius: 5px 0 0 0;\n                -webkit-border-radius: 5px 0 0 0;\n                -moz-border-radius: 5px 0 0 0;\n            }\n\n            /*Time to add downward connectors from parents*/\n            .tree ul ul::before{\n                content: \'\';\n                position: absolute; top: 0; left: 50%;\n                border-left: 1px solid #ccc;\n                width: 0; height: 20px;\n            }\n\n            .tree li a{\n                border: 1px solid #ccc;\n                padding: 5px 10px;\n                text-decoration: none;\n                color: #666;\n                font-family: arial, verdana, tahoma;\n                font-size: 11px;\n                display: inline-block;\n                \n                border-radius: 5px;\n                -webkit-border-radius: 5px;\n                -moz-border-radius: 5px;\n                \n                transition: all 0.5s;\n                -webkit-transition: all 0.5s;\n                -moz-transition: all 0.5s;\n            }\n\n            /*Time for some hover effects*/\n            /*We will apply the hover effect the the lineage of the element also*/\n            .tree li a:hover, .tree li a:hover+ul li a {\n                background: #c8e4f8; color: #000; border: 1px solid #94a0b4;\n            }\n            /*Connector styles on hover*/\n            .tree li a:hover+ul li::after, \n            .tree li a:hover+ul li::before, \n            .tree li a:hover+ul::before, \n            .tree li a:hover+ul ul::before{\n                border-color:  #94a0b4;\n            }"; }
};

export { MyComponent as x_flowchart };
