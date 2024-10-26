"use strict";
// Маємо об'єкт з інформацією про види спорту, кількість представників і кількість медалей. 
// Необхідно додати нове поле percentOfSuccess, яке буде показувати відсоток завойованих медалей від загальної кількості спортсменів у кожному виді спорту.
"ВИКОРИСТОВУВАТИ ЛИШЕ МЕТОДИ МАСИВІВ filter, map, sort та інші, які є в файлі methods.js.";
"Можливо в цій задачі доведеться в методі map розкривати фігурні дужки для роботи з обʼєктом."; // Щось тиру Array.map(item => {
//   blablabla
//  .. return ЩОСЬ)
// })

"Для заокруглення числа можна до десятих використовуйте .toFixed(1)";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function addSuccessPercent(olympicRepresentation) {
  return olympicRepresentation.map(function (item) {
    var percentOfSuccess = (item.medals / item.athletes * 100).toFixed(1);
    var successString = item.athletes === 0 ? '0%' : "".concat(percentOfSuccess, "%");
    return _objectSpread({}, item, {
      percentOfSuccess: successString
    });
  });
}

var olympicRepresentation = [{
  sport: 'Swimming',
  athletes: 20,
  medals: 6
}, {
  sport: 'Gymnastics',
  athletes: 10,
  medals: 2
}, {
  sport: 'Boxing',
  athletes: 15,
  medals: 5
}, {
  sport: 'Athletics',
  athletes: 25,
  medals: 3
}];
console.log(addSuccessPercent(olympicRepresentation));
module.exports = addSuccessPercent;
//# sourceMappingURL=task3.dev.js.map
