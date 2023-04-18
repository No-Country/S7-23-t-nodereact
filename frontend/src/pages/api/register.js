export default async function handler(req, res) {
  if (req.method === "POST") {
    // Aquí puedes agregar tu lógica de registro.
    // Los datos del formulario se encuentran en req.body.
    const { username, email, password } = req.body;
    console.log(
      `Registrando a ${username} con email ${email} y contraseña ${password}`
    );
    res.status(200).json({ message: "Registro exitoso." });
  } else {
    res.status(405).json({ message: "Método no permitido." });
  }
}
