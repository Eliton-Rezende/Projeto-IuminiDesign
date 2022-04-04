export function passwordValidator(password) {
  if (!password) return "Obrigatório informar email."
  if (password.length < 5) return 'Informe ao menos 5 caractéres.'
  return ''
}
