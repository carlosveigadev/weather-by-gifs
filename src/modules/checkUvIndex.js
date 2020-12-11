function checkUvIndex(index) {
  if (index > 0 && index < 3) {
    return 'text-green-600';
  } if (index > 2 && index < 6) {
    return 'text-yellow-300';
  } if (index > 5 && index < 8) {
    return 'text-yellow-700';
  } if (index > 8 && index < 11) {
    return 'text-red-600';
  }
  return 'text-purple-600';
}

export default checkUvIndex;