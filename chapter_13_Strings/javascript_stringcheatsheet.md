# JavaScript String Cheat Sheet

## Property

| Property | Description | Example |
|----------|-------------|---------|
| `length` | Returns the number of characters | `"hello".length` → `5` |

## Search & Check Methods

| Method | Description | Example |
|--------|-------------|---------|
| `indexOf(searchValue)` | Returns index of first match or `-1` | `"hello".indexOf("l")` → `2` |
| `lastIndexOf(searchValue)` | Returns index of last match or `-1` | `"hello".lastIndexOf("l")` → `3` |
| `search(regexp)` | Returns index of first match via regex or `-1` | `"hello".search(/l/)` → `2` |
| `includes(searchValue)` | Returns `true` if string contains value | `"hello".includes("ll")` → `true` |
| `startsWith(searchValue)` | Returns `true` if string starts with value | `"hello".startsWith("he")` → `true` |
| `endsWith(searchValue)` | Returns `true` if string ends with value | `"hello".endsWith("lo")` → `true` |
| `match(regexp)` | Returns array of matches or `null` | `"abc123".match(/\d+/)` → `["123"]` |
| `matchAll(regexp)` | Returns iterator of all matches | `Array.from("a1b2".matchAll(/\d/g))` |

## Extract / Slice Methods

| Method | Description | Example |
|--------|-------------|---------|
| `charAt(index)` | Returns character at specified index | `"hello".charAt(1)` → `"e"` |
| `charCodeAt(index)` | Returns Unicode of character at index | `"hello".charCodeAt(0)` → `104` |
| `at(index)` | Returns character at index (supports negatives) | `"hello".at(-1)` → `"o"` |
| `slice(start, end)` | Extracts section of string | `"hello".slice(1, 4)` → `"ell"` |
| `substring(start, end)` | Similar to slice, no negative indices | `"hello".substring(1, 4)` → `"ell"` |
| `substr(start, length)` | Deprecated: extracts `length` chars from `start` | `"hello".substr(1, 3)` → `"ell"` |
| `split(separator)` | Splits string into array | `"a,b,c".split(",")` → `["a", "b", "c"]` |

## Transformation Methods

| Method | Description | Example |
|--------|-------------|---------|
| `toUpperCase()` | Converts to uppercase | `"hello".toUpperCase()` → `"HELLO"` |
| `toLowerCase()` | Converts to lowercase | `"HELLO".toLowerCase()` → `"hello"` |
| `trim()` | Removes whitespace from both ends | `"  hello  ".trim()` → `"hello"` |
| `trimStart()` / `trimLeft()` | Removes whitespace from start | `"  hello  ".trimStart()` → `"hello  "` |
| `trimEnd()` / `trimRight()` | Removes whitespace from end | `"  hello  ".trimEnd()` → `"  hello"` |
| `padStart(targetLength, padString)` | Pads from start | `"5".padStart(3, "0")` → `"005"` |
| `padEnd(targetLength, padString)` | Pads from end | `"5".padEnd(3, "0")` → `"500"` |
| `repeat(count)` | Repeats string | `"ha".repeat(3)` → `"hahaha"` |
| `replace(searchValue, newValue)` | Replaces first match | `"hello".replace("l", "z")` → `"hezlo"` |
| `replaceAll(searchValue, newValue)` | Replaces all matches | `"hello".replaceAll("l", "z")` → `"hezzo"` |
| `concat(str2, str3, ...)` | Joins strings | `"he".concat("llo", "!")` → `"hello!"` |

## Conversion / Utility Methods

| Method | Description | Example |
|--------|-------------|---------|
| `toString()` | Returns string value | `(123).toString()` → `"123"` |
| `valueOf()` | Returns primitive value | `new String("hi").valueOf()` → `"hi"` |
| `localeCompare(compareString)` | Compares two strings | `"a".localeCompare("b")` → `-1` |
| `normalize(form)` | Unicode normalization | `"\u0041\u030A".normalize()` → `"\u00C5"` |
| `codePointAt(pos)` | Returns Unicode code point | `"\uD83D\uDE00".codePointAt(0)` → `128512` |
| `fromCharCode(num1, ...)` | Static: creates string from Unicode | `String.fromCharCode(104, 105)` → `"hi"` |
| `fromCodePoint(num1, ...)` | Static: creates string from code points | `String.fromCodePoint(128512)` → `"😀"` |
| `raw(strings, ...values)` | Static: returns raw string | ``String.raw`Hi\nHello` `` → `"Hi\\nHello"` |

## Template Literals & Operators

| Feature | Description | Example |
|---------|-------------|---------|
| `+` (concatenation) | Joins strings | `"he" + "llo"` → `"hello"` |
| Template literal | Embedded expressions | `` `Hello ${name}` `` |
| Escape sequences | Special characters | `"Line1\nLine2"` (new line) |
| Spread / Array access | Access characters | `[..."hello"]` → `["h","e","l","l","o"]` |

---

> **Note:** JavaScript strings are **immutable** — all methods return a **new string** rather than modifying the original.
