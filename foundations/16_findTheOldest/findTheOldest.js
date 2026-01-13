const getAge = function (birth, death) {
  return (death ?? new Date().getFullYear()) - birth;
};

const findTheOldest = function (people) {
  return people.reduce((oldestPerson, currentPerson) => {
    const currentAge = getAge(
      currentPerson.yearOfBirth,
      currentPerson.yearOfDeath
    );
    const oldestAge = getAge(
      oldestPerson.yearOfBirth,
      oldestPerson.yearOfDeath
    );

    return oldestAge > currentAge ? oldestPerson : currentPerson;
  }, people[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
