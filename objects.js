/**
 * Fn Index: 
 *  obj_dotToLiteral
 *  obj_deepMerge
*/

/**
 * Return a string property accessor value to the actual object value
 * @param str
 * @param obj
 */
export const obj_dotToLiteral = (str, obj) => str.split('.').reduce((o, i) => o[i], obj);

/**
	 * Merge nested objects:
	 * Source: https://github.com/jashkenas/underscore/issues/88
	 * @param target
	 * @param source
	 * @returns {*}
	 */
export const obj_deepMerge = (target, source) => {
  for (let key in source) {
    let original = target[key];
    let next = source[key];
    if (original && next && typeof next == "object") {
      appUtils.deepMerge(original, next);
    } else {
      target[key] = next;
    }
  }
  return target;
};