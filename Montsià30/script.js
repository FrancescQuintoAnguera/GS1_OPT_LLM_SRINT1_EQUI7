//Funció del selctro de pàgines
function selector(){
    const pagines = document.getElementById("opcions").value;
    if (pagines){
        window.location.href = pagines;
    }
}

//Print the form in console
function formToXml(event) {
    event.preventDefault(); // Prevenir el envío por defecto del formulario

    // Obtener los elementos del formulario
    var form = document.getElementById("myForm");
    const formData = new FormData(form);

    // Crear un documento XML
    const xmlDoc = document.implementation.createDocument(null, "FormData");
    const root = xmlDoc.documentElement;

    // Añadir datos del formulario al XML
    for (const [name, content] of formData.entries()) {
        const fieldElement = xmlDoc.createElement(name);
        fieldElement.textContent = content;
        root.appendChild(fieldElement);
    }

    // Convertir XML a cadena
    const serializer = new XMLSerializer();
    const xmlString = serializer.serializeToString(xmlDoc);

    console.log(xmlString); // Mostrar XML en la consola
}
