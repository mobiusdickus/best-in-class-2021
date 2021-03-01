function _importAll(r) {
	let images = {};
  r.keys().forEach((item, index) => { 
    images[item.replace('./', '')] = r(item); 
  });
	return images
}

function importImages() {
  const images = _importAll(
    require.context('../assets/img/', false, /\.(png|jpe?g|svg)$/)
  );
  return images
}

export default importImages;
