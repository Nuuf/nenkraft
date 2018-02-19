/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  Nenkraft.Style.CreateAll = function ( _style ) {

    return {
      fill: Nenkraft.Style.Fill( _style ? _style.fill : null ),
      stroke: Nenkraft.Style.Stroke( _style ? _style.stroke : null ),
      shadow: Nenkraft.Style.Shadow( _style ? _style.shadow : null ),
      text: Nenkraft.Style.Text( _style ? _style.text : null ),
      pixel: Nenkraft.Style.Pixel( _style ? _style.pixel : null )
    };
  
  };

  Nenkraft.Style.CreateFSSa = function ( _style ) {

    return {
      fill: Nenkraft.Style.Fill( _style ? _style.fill : null ),
      stroke: Nenkraft.Style.Stroke( _style ? _style.stroke : null ),
      shadow: Nenkraft.Style.Shadow( _style ? _style.shadow : null )
    };
  
  };

  Nenkraft.Style.CreateSSa = function ( _style ) {

    return {
      stroke: Nenkraft.Style.Stroke( _style ? _style.stroke : null ),
      shadow: Nenkraft.Style.Shadow( _style ? _style.shadow : null )
    };
  
  };

  Nenkraft.Style.CreateFSa = function ( _style ) {

    return {
      fill: Nenkraft.Style.Fill( _style ? _style.fill : null ),
      shadow: Nenkraft.Style.Shadow( _style ? _style.shadow : null )
    };
  
  };

  Nenkraft.Style.CreateSaT = function ( _style ) {

    return {
      shadow: Nenkraft.Style.Shadow( _style ? _style.shadow : null ),
      text: Nenkraft.Style.Text( _style ? _style.text : null )
    };
  
  };

  Nenkraft.Style.CreateP = function ( _style ) {

    return {
      pixel: Nenkraft.Style.Pixel( _style ? _style.pixel : null )
    };
  
  };

  Nenkraft.Style.GCO = Object.create( null );
  Nenkraft.Style.GCO.SOURCE_OVER = Nenkraft.Style.GCO.DEFAULT = 'source-over';
  Nenkraft.Style.GCO.SOURCE_IN = 'source-in';
  Nenkraft.Style.GCO.SOURCE_OUT = 'source-out';
  Nenkraft.Style.GCO.SOURCE_ATOP = 'source-atop';
  Nenkraft.Style.GCO.DESTINATION_OVER = 'destination-over';
  Nenkraft.Style.GCO.DESTINATION_IN = 'destination-in';
  Nenkraft.Style.GCO.DESTINATION_OUT = 'destination-out';
  Nenkraft.Style.GCO.DESTINATION_ATOP = 'destination-atop';
  Nenkraft.Style.GCO.LIGHTER = 'lighter';
  Nenkraft.Style.GCO.COPY = 'copy';
  Nenkraft.Style.GCO.XOR = 'xor';
  Nenkraft.Style.GCO.MULTIPLY = 'multiply';
  Nenkraft.Style.GCO.OVERLAY = 'overlay';
  Nenkraft.Style.GCO.DARKEN = 'darken';
  Nenkraft.Style.GCO.LIGHTEN = 'lighten';
  Nenkraft.Style.GCO.COLOR_DODGE = 'color-dodge';
  Nenkraft.Style.GCO.COLOR_BURN = 'color-burn';
  Nenkraft.Style.GCO.HARD_LIGHT = 'hard-light';
  Nenkraft.Style.GCO.SOFT_LIGHT = 'soft-light';
  Nenkraft.Style.GCO.DIFFERENCE = 'difference';
  Nenkraft.Style.GCO.EXCLUSION = 'exclusion';
  Nenkraft.Style.GCO.HUE = 'hue';
  Nenkraft.Style.GCO.SATURATION = 'saturation';
  Nenkraft.Style.GCO.COLOR = 'color';
  Nenkraft.Style.GCO.LUMINOSITY = 'luminosity';

};
