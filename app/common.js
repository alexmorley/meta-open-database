module.exports.ifObject = function(item, options) {
  if(!(item.longname)) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
}
