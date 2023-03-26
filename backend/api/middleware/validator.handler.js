import User from "../models/users.js";

export async function findExistingUser(value) {
  const existingUser = await User.findOne({
    $or: [{ email: value.email }, { userName: value.userName }],
  });
  return existingUser;
}

export function validatorUserHandler(schema,property) {
  return async (req, res, next) => {
    const { error, value } = schema.validate(req[property]);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    const existingUser = await findExistingUser(value);
    const { email, userName } = value;
    const errors = {};
    if (existingUser) {
      if (existingUser.email === email) {
        errors.email = `El correo electrónico ${email} ya está en uso`;
      }
      if (existingUser.userName === userName) {
        errors.userName = `El nombre de usuario ${userName} ya está en uso`;
      }
      if (Object.keys(errors).length > 0) {
        return res.status(409).json({ message: 'Conflict', errors });
      }
    }
    next();
  };
}

export function validatorHandler(schema, property) {
  return (req, res, next) => {
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false });

    if (error) {
      next(
        res.status(400).json({
          message: error.message,
          internalCode: "bad_request",
        })
      );
    }
    next();
  };
}


