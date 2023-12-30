import bcrypt from "bcrypt";
import authservices from "../services/auth.services.js";

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await authservices.loginService(email);

    if (!user) {
        return res.status(400).send({ message: "Usuario ou Senha inválidos." });
    }

    const passwordIsValid = await bcrypt.compare(password, user.password)

    if(!passwordIsValid) {
        return res.status(400).send({ message: "Usuario ou Senha inválidos." });
    }


    res.send(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export default { login };