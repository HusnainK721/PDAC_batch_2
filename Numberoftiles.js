const NumberofTiles =(L,B,tl,td,ntb,nofloors,nobuilding) => {
  const NumberofTilesperefloor=(L*B) / (tl*tb);
  const NumberofTielsperbuilding=NumberofTilesperefloor*nofloors;
  const NumberofTiles=NumberofTielsperbuilding * nobuilding;
};