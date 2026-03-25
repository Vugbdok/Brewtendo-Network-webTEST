export const staffList: string[] = [
  'Adrian (VugbKat)',
  'Andrea',
  'Bunnyzluver1998',
  'FunDog',
  'HEXADUCK',
  'John N. Brewtendo',
  'Khentendo',
  'KittenPeng',
  'Meng',
  'Mr.Ghosty',
  'Preblox',
  'Drag0n_A13',
  'Thom',
  'SatellaGuy',
  'Somarix',
  'Technet',
  'cannedfart',
  'cool guy',
  'gilberr',
  'nebulagamez',
  'very broken ps3',
  'vista',
  'ENO yosh :3',
  'synikers',
  'sam.',
  'Ragy',
];

export function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
