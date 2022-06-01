export const validation = (values) => {

  const errors = {};

  if (values.name !== undefined) {
    if (values.name === "") {
      errors.name = "Required";
    }
  }
  if (values.email !== undefined) {
    if (values.email === "") {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Wrong email";
    }
  }
  if (values.phoneNumber !== undefined) {
    if (values.phoneNumber === "") {
      errors.phoneNumber = "Required";
    } else if (!/^[\+]?[(]?[0-9]{1,3}[)]?[(]?[0-9]{1,3}[)]?[-\s\.]?[0-9]{1,3}[-\s\.]?[0-9]{1,13}$/im.test(values.phoneNumber)) {
      errors.phoneNumber = "Wrong phone number";
    }
  }
  if (values.country !== undefined) {
    if (values.country === "") {
      errors.country = "Required";
    }
  }
  if (values.methodOfUse !== undefined) {
    if (values.methodOfUse === "") {
      errors.methodOfUse = "Required";
    }
  }
  if (values.hearAboutUs !== undefined) {
    if (values.hearAboutUs === "") {
      errors.hearAboutUs = "Required";
    }
  }
  if (values.typeOfEquipment !== undefined) {
    if (values.typeOfEquipment === "") {
      errors.typeOfEquipment = "Required";
    }
  }
  return errors;
};
export const validationRu = (values) => {

  const errors = {};

  if (values.name !== undefined) {
    if (values.name === "") {
      errors.name = "Обязательное поле";
    }
  }
  if (values.email !== undefined) {
    if (values.email === "") {
      errors.email = "Обязательное поле";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Неверный email";
    }
  }
  if (values.phoneNumber !== undefined) {
    if (values.phoneNumber === "") {
      errors.phoneNumber = "Обязательное поле";
    } else if (!/^[\+]?[(]?[0-9]{1,3}[)]?[(]?[0-9]{1,3}[)]?[-\s\.]?[0-9]{1,3}[-\s\.]?[0-9]{1,13}$/im.test(values.phoneNumber)) {
      errors.phoneNumber = "Неверный номер";
    }
  }
  if (values.country !== undefined) {
    if (values.country === "") {
      errors.country = "Обязательное поле";
    }
  }
  if (values.methodOfUse !== undefined) {
    if (values.methodOfUse === "") {
      errors.methodOfUse = "Обязательное поле";
    }
  }
  if (values.hearAboutUs !== undefined) {
    if (values.hearAboutUs === "") {
      errors.hearAboutUs = "Обязательное поле";
    }
  }
  if (values.typeOfEquipment !== undefined) {
    if (values.typeOfEquipment === "") {
      errors.typeOfEquipment = "Обязательное поле";
    }
  }
  return errors;
};
