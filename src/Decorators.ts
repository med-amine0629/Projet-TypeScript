export function ValidateSpecialMove(target: any, key: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;
    descriptor.value = function (event: any, repo: any) {
        if(event.power < 0 || event.power > 100) {
            throw new Error(`Invalid power value: ${event.power}. Power must be between 0 and 100.`);
        }
        return original.apply(this, arguments);
    };
    return descriptor;
}
export function Cache(target: any, key: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;
    const cache = new WeakMap<Object, Map<string, unknown>>();
    descriptor.value = function (this:object, ...args: unknown[]) {
    let instanceCache = cache.get(this);
    if (!instanceCache) {
        instanceCache = new Map<string, unknown>();
        cache.set(this, instanceCache);
    }
    const cacheKey = JSON.stringify(args);
    if (instanceCache.has(cacheKey)) {
        console.log("from cache");
        return instanceCache.get(cacheKey);
    }
    const result = original.apply(this, args);
    instanceCache.set(cacheKey, result);
    return result;
}
return descriptor;
}
