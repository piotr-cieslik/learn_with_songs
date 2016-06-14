var ShowSongPageTranslationListItem = function(props) {
  var nativeMeaning = null;
  if(props.showNativeMeaning){
    nativeMeaning = (
      <p className="translation-native-meaning">
        { props.translation.attributes['native-meaning'] }
      </p>
    );
  }
  return (
      <li className="collection-item">
        <a
          href="#"
          className="red-text right"
          onClick={ props.onDelete }>usuń</a>
        <p className="translation-foreign-meaning">
          { props.translation.attributes['foreign-meaning'] }
        </p>
        { nativeMeaning }
      </li>
  );
};
