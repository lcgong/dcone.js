
import {
    createDObject,
    DObjectCone,
} from "./dobject";

import {
    loadNodeFromJS,
    exportNodetoJS
} from "./jsobj";


function fromJS(jsobj) {

    const root = loadNodeFromJS(jsobj);
    return createDObject(new DObjectCone(root), root, '', root);
}

function toJS(dobj) {
    return exportNodetoJS(dobj.__stub.node);

}

export {
    fromJS,
    toJS
};