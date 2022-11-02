const whichSchool = function (age) {
	let school = 'Lighthouse Labs';
	if (age < 13) {
		school = 'Elementary School';
	}else if (age >= 13 && age <= 18) {
		school = 'Secondary School';
	} 
	return school;
}
