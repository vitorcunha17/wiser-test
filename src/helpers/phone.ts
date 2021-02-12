export const phoneMask = (phone: string) => {
  let masked = phone.replace(/\D/g, "");

  masked = masked.replace(/^0/, "");
  if (masked.length > 10) {
    // 11+ digits. Format as 5+4.
    masked = masked.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
  } else if (masked.length > 5) {
    // 6..10 digits. Format as 4+4
    masked = masked.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
  } else if (masked.length > 2) {
    // 3..5 digits. Add (0..)
    masked = masked.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
  } else {
    // 0..2 digits. Just add (0
    masked = masked.replace(/^(\d*)/, "($1");
  }

  return masked;
};
