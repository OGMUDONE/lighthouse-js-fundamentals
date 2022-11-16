const judgeVegetable = function (vegetables, metric) {
  let max = 0;
  let submitter = ''
  for (let object of vegetables) {
    if (object[metric] > max) {
      max = object[metric];
      submitter = object['submitter'];
    }
  }
  return submitter;
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

judgeVegetable(vegetables, metric)