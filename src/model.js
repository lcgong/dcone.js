const AsyncFunction = Object.getPrototypeOf(async function() {}).constructor;

import {
    fromJS
} from "./common";

class Model {
    constructor() {
        this._data = fromJS({});
    }

    get data() {
        return this._data;
    }
}

function action() {
    if (arguments.length === 3 && arguments[0] instanceof Model) {
        // 兼容@action形式，并转为@action()
        return action()(...arguments);
    }

    const dobjPaths = [...arguments];

    return function(target, name, descriptor) {
        const func = descriptor.value;


        if (func instanceof AsyncFunction) {

            descriptor.value = async function(...args) {
                const dobjs = prepareDObject(this, dobjPaths);
                const ret = await func.apply(target, [...dobjs, ...args]);
                return ret;
            };
        } else {
            descriptor.value = function(...args) {
                console.log(3333244, target, target.abc)

                const ret = func.apply(target, [...dobjs, ...args]);
                return ret;
            };
        }

        return descriptor;
    }
}

function prepareDObject(model, paths) {
    let dobjs;
    if (paths.length === 0) {
        dobjs = [model.data];
    } else {
        dobjs = [];
        for (let path of paths) {

        }
    }

    return dobjs;
}

export {
    AsyncFunction,
    Model,
    action
};
