var ShowSongPageTranslationListItem = function(props) {
  return (
      <li className="collection-item">
        <p className="translation-foreign-meaning">{ props.translation.attributes['foreign-meaning'] }</p>
        <p className="translation-native-meaning">{ props.translation.attributes['native-meaning'] }</p>
      </li>
  );
};
