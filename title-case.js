function titleCase(str) {
  var res = str.toLowerCase(); 
  var pieces = res.split(" ");
  for (var i = 0; i < pieces.length; i++ ) {
        var j = pieces[i].charAt(0).toUpperCase();
        pieces[i] = j + pieces[i].substr(1);
      }

  return pieces.join(" ");
}
titleCase("sHoRt AnD sToUt");