/**
 This is a custom tree like flowchart web component (block element).  It only has one attribute that aLinkcolor
 user needs to set (tree).  The tree attribute is an array that represent the nodes on the tree. For example,
 tree = ['parent', ['child1',['grandchild1'], 'child2', 'child3', ['grandchild2', 'grandchild3', ['greatgrandchild1', 'greatgrandchild2', 'greatgrandchild3'], 'grandchild4']]]
*/

import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'x-flowchart',
  styleUrl: 'x-flowchart.css',
  shadow: true
})
export class MyComponent {
  /**
  * The tree array for the flowchart
  * ["root name", [child name,[greatchild name], child name]]
  *                                   |root name|
  *           |child name|            |child name|                |child name|
  *                                 |greatchild name|
  */
  @Prop() treeArray: Array<string> = [];
  @Prop() tree: string;
  
  private getHTML(treeStr, lastPart, testArray){
    var fLen = testArray.length;
    treeStr += "<ul>";
    for (var i = 0; i < fLen; i++){
        if(typeof(testArray[i]) == "string"){
            if(i!=0){
                treeStr += "</li>";
            }
            treeStr += "<li><a href='#'>" + testArray[i] + "</a>";
        }
        else{
            treeStr = this.getHTML(treeStr, lastPart, testArray[i]);
        } 
    }
    treeStr += "</li>";
    treeStr += "</ul>"; 
    return treeStr;
  }

  private makeTree(): string {
    let treeStr = "";
    let lastPart = [];
    let testArray = JSON.parse(this.tree);
    treeStr = this.getHTML(treeStr, lastPart, testArray);
    return treeStr;
  }

  render() {
    return (<div class="tree" innerHTML={this.makeTree()}></div>);

  }
}
