var libs = {
  Nenkraft: require( './dist/nk.min' ),
  NenkraftBehind: require( './dist/nkb.min' )
};
libs.default = libs.Nenkraft;

module.exports = libs;
