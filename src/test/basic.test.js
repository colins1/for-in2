import character from '../js/date';
import orderByProps from '../js/sort';

const special = [
  {
    id: 8,
    name: 'Двойной выстрел',
    icon: 'http://...',
    description: 'Двойной выстрел наносит двойной урон'
  }, 
  {
    id: 9,
    name: 'Нокаутирующий удар',
    icon: 'http://...',
    description: 'Описание недоступно'
  }
]

test('name check < 2', () => {
  expect(orderByProps(character)
  ).toEqual(special);
});
