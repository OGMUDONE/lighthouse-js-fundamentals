function ageCalculator (name, yearOfBirth, currentYear) {
  let age = '';
  age = currentYear - yearOfBirth;
  return `${name} is ${age} years old.`;
}

ageCalculator('Suzie', 1984, 2016);
ageCalculator('Jack ', 2004, 2016);
ageCalculator('Ali', 2016, 2016);