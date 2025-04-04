const goodbye = (name) => {
  const byeElm = document.querySelector('.email__closing');
  byeElm.textContent = 'Na shledanou ' + name;
};
goodbye('Pavel Veliký');

const fillSubject = (subject) => {
  const sbjElm = document.querySelector('.email__subject');
  sbjElm.textContent = subject;
};
fillSubject('Nový název e-mailu');

const fillBody = (body) => {
  const bodyElm = document.querySelector('.email__body');
  bodyElm.textContent = body;
};
fillBody(
  'Nové tělo e-mailu  tělo e-mailu  tělo e-mailu  tělo e-mailu  tělo e-mailu  tělo e-mailu  tělo e-mailu  tělo e-mailu  tělo e-mailu  tělo e-mailu  tělo e-mailu  tělo e-mailu  tělo e-mailu ',
);
