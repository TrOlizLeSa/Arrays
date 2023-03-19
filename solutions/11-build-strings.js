// BEGIN
export default (parrams) => { //Done
    if (!parrams || !parrams.length) {
      return '';
    }
    let result = '<dl>';
    for (let item of parrams) {
      result += `<dt>${item[0]}</dt><dd>${item[1]}</dd>`;
    }
    result += '</dl>';
    return result;
    
  };
// END