var libs = {
  Nenkraft: require( './src/nk.min' ),
  NenkraftBehind: require( './src/nkb.min' )
};
libs.default = libs.Nenkraft;

module.exports = libs;
