// ==UserScript==
// @name       Correct the Injustice Part 2
// @version    0.1
// @description  Swifty Dream
// @include      http*
// @copyright  2012+, You
// ==/UserScript==

walk(document.body);

function walk(node) 
{
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
            if(node.parentElement.tagName.toLowerCase() != "script") {
                handleText(node);
            }
			break;
	}
}

function handleText(textNode) {
    var v = textNode.nodeValue;
    console.log(v);
    v = v.replace(/Taylor Swift/gi,"National Treasure Taylor Swift");
    v = v.replace(/Taylor Alison Swift/gi,"National Treasure Taylor Alison Swift");
    textNode.nodeValue = v;
}


