/**
 * A trace decorator for debugging... probably should live in it's own project.
 */
export function Trace (): ClassDecorator {
  return function decorate (cls) {
    Object.getOwnPropertyNames(cls.prototype).forEach(key => {
      if (typeof cls.prototype[key] === 'function') {
        const method = cls.prototype[key]
        cls.prototype[key] = function (...args: any[]) {
          console.log('-->', key)
          const ret = method.apply(this, args)
          console.log('<--', key, ret)
          return ret
        }
      }
    })
  }
}
