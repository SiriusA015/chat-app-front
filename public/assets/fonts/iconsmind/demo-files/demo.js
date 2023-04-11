if (!('boxShadow' in document.body.style)) {
  document.body.setAttribute('class', 'noBoxShadow');
}

// eslint-disable-next-line func-names
document.body.addEventListener('click', function (e) {
  const { target } = e;
  if (
    target.tagName === 'INPUT' &&
    target.getAttribute('class').indexOf('liga') === -1
  ) {
    target.select();
  }
});

// eslint-disable-next-line func-names
(function () {
  const fontSize = document.getElementById('fontSize');
  const testDrive = document.getElementById('testDrive');
  const testText = document.getElementById('testText');
  function updateTest() {
    testDrive.innerHTML = testText.value || String.fromCharCode(160);
    if (window.icomoonLiga) {
      window.icomoonLiga(testDrive);
    }
  }
  function updateSize() {
    testDrive.style.fontSize = `${fontSize.value}px`;
  }
  fontSize.addEventListener('change', updateSize, false);
  testText.addEventListener('input', updateTest, false);
  testText.addEventListener('change', updateTest, false);
  updateSize();
})();
