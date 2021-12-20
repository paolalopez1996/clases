/*
08 - skills
Tenemos la variable user, que es un objeto con datos de una persona en linkedin
En el objeto hay una propiedad skills, que es un array con las distintas habilidades de la persona
Necesitamos actualizar el perfil y agregar "Javascript" al array de de skills*/


var user = {
  id: 123456789,
  name: "Ada Lovelace",
  url: "https://www.linkedin.com/in/ada-lovelace",
  skills: ["HTML", "CSS", "SASS"],
};

user.skills.push('Javascript');

console.log(user);
