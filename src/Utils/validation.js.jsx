export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

export const validatePassword = (password) => {
  return password.length >= 6
}

export const validateName = (name) => {
  return name.length >= 2
}

export const validateWebsite = (url) => {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}