var libs = {
  Nenkraft: require( './dist/nk.min' ).nk,
  NenkraftBehind: require( './dist/nkb.min' ).nkb
};
libs.default = libs.Nenkraft;

module.exports = libs;
