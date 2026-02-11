(function () {
  function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie =
      name + "=" + encodeURIComponent(value) +
      "; expires=" + expires +
      "; path=/" +
      "; SameSite=Lax";
  }

  setCookie("CSDT", "GA1.2.987654321.9876543210", 1);
})();
