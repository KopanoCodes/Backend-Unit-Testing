export default function fromWhere(registrationNumber) {
    const prefix = registrationNumber.substring(0, 2).toUpperCase();
    switch (prefix) {
      case 'CY':
        return 'Bellville';
      case 'CJ':
        return 'Paarl';
      case 'CA':
        return 'Cape Town';
      default:
        return 'Some other place!';
    }
  }