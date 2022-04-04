export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/
  if (!email) return "Obrigatório informar o Email"
  if (!re.test(email)) return 'Ooops! Email inválido'
  return ''
}
