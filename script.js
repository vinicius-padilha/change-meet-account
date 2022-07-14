const isGoogleMeet = location.origin.includes('meet');
const isDefaultAccount = location.search.includes('0') || !location.search.includes('authuser');

if (isGoogleMeet && isDefaultAccount) {
  const accountIndex = prompt('Alterar conta padrão? Digite o index referente a conta escolhida.')

  if (accountIndex) {
    window.location = window.location.origin + window.location.pathname + `?authuser=${accountIndex}`;
  }

}
