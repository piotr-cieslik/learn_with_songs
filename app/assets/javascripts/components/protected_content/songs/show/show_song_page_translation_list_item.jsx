var ShowSongPageTranslationListItem = function(props) {
  var nativeMeaning = null;
  if(props.showNativeMeaning){
    nativeMeaning = (
      <p className="translation-native-meaning">
        { props.translation.get('attributes').get('native-meaning') }
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
          { props.translation.get('attributes').get('foreign-meaning') }
        </p>
        { nativeMeaning }
      </li>
  );
};
