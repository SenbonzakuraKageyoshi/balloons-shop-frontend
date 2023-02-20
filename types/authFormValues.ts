export type RegisterFormValues = {
    userFirstName: string,
    userLastName: string,
    userTelephone: string,
    userEmail: string,
    userPassword: string
  }
  
export type LoginFormValues = Pick<RegisterFormValues, "userTelephone" | "userEmail" | "userPassword">
