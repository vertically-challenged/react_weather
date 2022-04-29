function AddPlusIfNeeded(temp) {
  if (temp > 0) return `+${temp}`
  return `${temp}`
}

export default AddPlusIfNeeded
