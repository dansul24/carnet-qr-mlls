const estudiantes = {

    EST001: {
        nombre: "DANNY MAZZINI ORRALA",
        codigo: "EST001",
        curso: "3ero Bachillerato",
        especialidad: "Informática",
        institucion: "Unidad Educativa María Luisa Luque de Sotomayor",
        jornada: "Matutina",
        foto: "img/estudiante001.png"
    },

    EST002: {
        nombre: "ESTUDIANTE DOS",
        codigo: "EST002",
        curso: "3ero Bachillerato",
        especialidad: "Informática",
        institucion: "Unidad Educativa María Luisa Luque de Sotomayor",
        jornada: "Matutina",
        foto: "img/estudiante2.jpg"
    },

    EST003: {
        nombre: "ESTUDIANTE TRES",
        codigo: "EST003",
        curso: "2do Bachillerato",
        especialidad: "Informática",
        institucion: "Unidad Educativa María Luisa Luque de Sotomayor",
        jornada: "Matutina",
        foto: "img/estudiante3.jpg"
    }

};


// Obtener el código de la URL
const parametros = new URLSearchParams(window.location.search);

const codigo = parametros.get("id");


// Si no hay código, utilizar EST001
const estudiante = estudiantes[codigo || "EST001"];


if (estudiante) {

    document.getElementById("nombre").textContent =
        estudiante.nombre;

    document.getElementById("codigo").textContent =
        estudiante.codigo;

    document.getElementById("curso").textContent =
        estudiante.curso;

    document.getElementById("especialidad").textContent =
        estudiante.especialidad;

    document.getElementById("institucion").textContent =
        estudiante.institucion;

    document.getElementById("jornada").textContent =
        estudiante.jornada;

    document.getElementById("foto").src =
        estudiante.foto;

}