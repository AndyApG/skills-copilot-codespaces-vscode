function skillsMember() {
  var skills = ['HTML', 'CSS', 'JS', 'React', 'Node'];
  var member = {
    name: 'John',
    age: 25,
    skills: skills,
    // Method
    getSkills: function() {
      return this.skills;
    }
  };
  console.log(member.getSkills());
}