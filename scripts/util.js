let Util = {};

Util.Redirect = function (args, func) {
    const REDIRECT_ARGUMENT_COUNT = 2;
    const DEFAULT_ARGUMENT_COUNT = 2; //Has to be last arguments

    // if (arguments.length - REDIRECT_ARGUMENT_COUNT !== args.length) {
    //     return null;
    // }
    for (let i = REDIRECT_ARGUMENT_COUNT; i < arguments.length - DEFAULT_ARGUMENT_COUNT; ++i) {
        let argsIndex = i - REDIRECT_ARGUMENT_COUNT;
        let currentArgument = args[argsIndex];
        let currentType = arguments[i];

        if (typeof (currentType) === 'object') {
            currentType = currentType.constructor;
        }
        if (typeof (currentType) === 'number') {
            currentType = 'number';
        }
        if (typeof (currentType) === 'string' && currentType !== 'number' && currentType !== 'object') {
            currentType = 'string';
        }
        if (typeof (currentType) === 'function') {
            if (!(currentArgument instanceof currentType)) {
                return null;
            }
        } else {
            if (typeof (currentArgument) !== currentType) {
                return null;
            }
        }
    }
    return [func.apply(this, args)];
}