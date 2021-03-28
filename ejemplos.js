var creaSaludos = function(grettings)
{
    return function(name)
    {
        return (grettings + " " + name + "!");
    }
}

var holaSaludo = creaSaludos("Hola");

console.log(holaSaludo("Mauricio"));